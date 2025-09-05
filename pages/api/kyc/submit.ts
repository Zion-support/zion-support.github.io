import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_KycProfile} from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const _FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {_try {
    const _raw = fs.readFileSync(FILE, _'utf8');
    return JSON.parse(raw);} catch {_return {};
  }
}

function save(_db: Record<string, _KycProfile>) {_fs.mkdirSync(DATA_DIR, _{ recursive: true});
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_userId} = req.body as {_userId?: string};
  if (!userId) return res.status(400).json({_error: 'Missing userId'});

  const _db = load();
  const _profile = db[userId];
  if (!profile) return res.status(404).json({_error: 'Profile not found.'});

  const _validation = validateKycSubmission(profile);
  if (!validation.ok) return res.status(400).json({_error: 'Missing data', _missing: validation.missing});

  // Simple AML check
  const _aml = getAmlProvider();
  const _amlResult = profile.role === 'enterprise'
    ? await aml.checkBusiness({_businessName: profile.businessName || '', _country: profile.country})
    : await aml.checkPerson({_fullLegalName: profile.fullLegalName || '', _country: profile.country, _dob: profile.dateOfBirth});

  profile.amlStatus = amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review';

  // Flags and risk scoring
  const _flags = new Set<string>(profile.flags || []);
  if (amlResult.status !== 'clear') flags.add('aml_alert');
  const _name = (profile.fullLegalName || profile.businessName || '').toLowerCase();
  if (name.includes('test') || name.includes('demo') || name.includes('fake')) flags.add('fraud_risk');

  const _ip = ((req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '').split(',')[0].trim();
  if (ip) {_// naive duplicate IP heuristic: more than 2 submissions from same IP → flag
    const _sameIpCount = Object.values(db).filter(_(p) =>
      (p.auditTrail || []).some(_(a) => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip)
    ).length;
    if (sameIpCount >= 2) flags.add('duplicate_ip');}

  // Compute simple risk score
  let _riskScore = 10; // base low risk
  if (flags.has('aml_alert')) riskScore += 50;
  if (flags.has('fraud_risk')) riskScore += 20;
  if (flags.has('duplicate_ip')) riskScore += 15;
  riskScore = Math.min(100, riskScore);

  profile.flags = Array.from(flags);
  profile.riskScore = riskScore;

  profile.status = 'submitted';
  const _now = new Date().toISOString();
  profile.lastUpdatedAt = now;
  profile.auditTrail.push({_at: now, _by: userId, _action: 'kyc_submitted', _details: { aml: amlResult, _ip} });

  db[userId] = profile;
  save(db);

  res.status(200).json({_ok: true, _profile, _aml: amlResult});
}