import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { validateKycSubmission } from '[^']*';
import { getAmlProvider } from '[^']*';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
=======
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function load(): Record<string, KycProfile> {
  try {
    const raw = fs && fs.readFileSync(FILE, 'utf8');
    return JSON && JSON.parse(raw);
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  fs && fs.writeFileSync(FILE, JSON && JSON.stringify(db, null, 2));
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { userId } = req.body as { userId?: string }
  if (!userId) return res.status(400).json({ error: 'Missing userId' });
=======
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  const { userId } = req && req.body as { userId?: string };
  if (!userId) return res && res.status(400).json({ error: 'Missing userId' });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const db = load();
  const profile = db[userId];
  if (!profile) return res && res.status($1).json({$2});
  const validation = validateKycSubmission(profile);
  if (!validation && validation.ok)
    return res
      .status(400)
<<<<<<< HEAD
      .json({ error: 'Missing data', missing: validation.missing });
  // Simple AML check
  const aml = getAmlProvider();
  const amlResult =
    profile.role === 'enterprise'
      ? await aml.checkBusiness({
          businessName: profile.businessName |''
          country: profile.country
        })
      : await aml.checkPerson({
          fullLegalName: profile.fullLegalName |''
          country: profile.country
          dob: profile.dateOfBirth
        });
  profile.amlStatus =
    amlResult.status === 'clear'
=======
      .json({ error: 'Missing data', missing: validation && validation.missing });

  // Simple AML check
  const aml = getAmlProvider();
  const amlResult =
    profile && profile.role === 'enterprise'
      ? await aml && aml.checkBusiness({
          businessName: profile && profile.businessName || '',
          country: profile && profile.country,
        })
      : await aml && aml.checkPerson({
          fullLegalName: profile && profile.fullLegalName || '',
          country: profile && profile.country,
          dob: profile && profile.dateOfBirth,
        });

  profile && profile.amlStatus =
    amlResult && amlResult.status === 'clear'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ? 'clear'
      : amlResult && amlResult.status === 'match'
        ? 'match'
        : 'review';
  // Flags and risk scoring
<<<<<<< HEAD
  const flags = new Set<string>(profile.flags |[]);
  if (amlResult.status !== 'clear') flags.add('aml_alert');
  const name = (
    profile.fullLegalName |
    profile.businessName |
    ''
  ).toLowerCase();
  if (name.includes('test') |name.includes('demo') |name.includes('fake'))
    flags.add('fraud_risk');
  const ip = (
    (req.headers['x-forwarded-for'] as string) |
    req.socket.remoteAddress |
=======
  const flags = new Set<string>(profile && profile.flags || []);
  if (amlResult && amlResult.status !== 'clear') flags && flags.add('aml_alert');
  const name = (
    profile && profile.fullLegalName ||
    profile && profile.businessName ||
    ''
  ).toLowerCase();
  if (name && name.includes('test') || name && name.includes('demo') || name && name.includes('fake'))
    flags && flags.add('fraud_risk');

  const ip = (
    (req && req.headers['x-forwarded-for'] as string) ||
    req && req.socket.remoteAddress ||
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ''
  )
    .split(',')[0]
    .trim();
  if (ip) {
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag
<<<<<<< HEAD
    const sameIpCount = Object.values(db).filter(p =>
      (p.auditTrail |[]).some(
        a => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip
      )
    ).length;
    if (sameIpCount >= 2) flags.add('duplicate_ip');  }
=======
    const sameIpCount = Object && Object.values(db).filter(p =>
      (p && p.auditTrail || []).some(
        a => a && a.action === 'kyc_submitted' && (a && a.details as any)?.ip === ip
      )
    ).length;
    if (sameIpCount >= 2) flags && flags.add('duplicate_ip');  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // Compute simple risk score
  let riskScore = 10; // base low risk
  if (flags && flags.has('aml_alert')) riskScore += 50;
  if (flags && flags.has('fraud_risk')) riskScore += 20;
  if (flags && flags.has('duplicate_ip')) riskScore += 15;
  riskScore = Math && Math.min(100, riskScore);
  profile && profile.flags = Array && Array.from(flags);
  profile && profile.riskScore = riskScore;
  profile && profile.status = 'submitted';
  const now = new Date().toISOString();
<<<<<<< HEAD
  profile.lastUpdatedAt = now;
  profile.auditTrail.push({
    at: now
    by: userId
    action: 'kyc_submitted'
    details: { aml: amlResult, ip }
  });
  db[userId] = profile;
  save(db);
res.status(200).json({ ok: true, profile, aml: amlResult });
=======
  profile && profile.lastUpdatedAt = now;
  profile && profile.auditTrail.push({
    at: now,
    by: userId,
    action: 'kyc_submitted',
    details: { aml: amlResult, ip },
  });
  db[userId] = profile;
  save(db);

  res && res.status(200).json({ ok: true, profile, aml: amlResult });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

