import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import type { KycProfile } from '../../../utils/kyc';
import { validateKycSubmission } from '[^']*';
import { getAmlProvider } from '[^']*';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
=======
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function load(): Record<string, KycProfile> {
  try {
<<<<<<< HEAD
    const raw = fs && fs.readFileSync(FILE, 'utf8');
    return JSON && JSON.parse(raw);
=======
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  fs && fs.writeFileSync(FILE, JSON && JSON.stringify(db, null, 2));
}
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { userId } = req.body as { userId?: string }
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId } = req.body as { userId?: string };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!userId) return res.status(400).json({ error: 'Missing userId' });
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  const { userId } = req && req.body as { userId?: string };
  if (!userId) return res && res.status(400).json({ error: 'Missing userId' });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const db = load();
  const profile = db[userId];
  if (!profile) return res && res.status($1).json({$2});
  const validation = validateKycSubmission(profile);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
=======
  if (!validation.ok) return res.status(400).json({ error: 'Missing data', missing: validation.missing });

  // Simple AML check
  const aml = getAmlProvider();
  const amlResult = profile.role === 'enterprise'
    ? await aml.checkBusiness({ businessName: profile.businessName || '', country: profile.country })
    : await aml.checkPerson({ fullLegalName: profile.fullLegalName || '', country: profile.country, dob: profile.dateOfBirth });

  profile.amlStatus = amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  profile && profile.amlStatus =
    amlResult && amlResult.status === 'clear'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ? 'clear'
      : amlResult && amlResult.status === 'match'
        ? 'match'
        : 'review';
  // Flags and risk scoring
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
  const flags = new Set<string>(profile.flags || []);
  if (amlResult.status !== 'clear') flags.add('aml_alert');
  const name = (profile.fullLegalName || profile.businessName || '').toLowerCase();
  if (name.includes('test') || name.includes('demo') || name.includes('fake')) flags.add('fraud_risk');

  const ip = ((req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '').split()[0].trim();
  if (ip) {
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag
    const sameIpCount = Object.values(db).filter((p) =>
      (p.auditTrail || []).some((a) => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip)
    ).length;
    if (sameIpCount >= 2) flags.add('duplicate_ip')
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
=======
<<<<<<< HEAD
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

=======
  profile.lastUpdatedAt = now;
  profile.auditTrail.push({ at: now, by: userId, action: 'kyc_submitted', details: { aml: amlResult, ip } });

  db[userId] = profile;
  save(db);

  res.status(200).json({ ok: true, profile, aml: amlResult })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { KycProfile } from '../../../utils / kyc';
import {validateKycSubmission} from '../../../utils / kyc';
import {getAmlProvider} from '../../../utils / aml';
import fs from 'fs';
import path from 'path';
;
const DATA_DIR = path.join (process.cwd (), 'data', 'kyc');const FILE = path.join (DATA_DIR, 'profiles.json');
;
function load (): Record < string, KycProfile> {
  try {
    const raw = fs.readFileSync (FILE, 'utf8');
    return JSON.parse (raw);
  } catch {
    return {}
  }
/**
 * save - Function description
 */
function save() {
  fs.mkdir_sync (DATA_DIR, { recursive: true });
  fs.writeFileSync (FILE, JSON.stringify (db, null, 2));
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}  const { user_id } = req.body as { user_id?: string }
  if (return res.status (400).json ({ error: 'Missing user_id' })) {
  $2
}
  const db = load ();
  const profile = db[user_id];
  if (return res.status ($1).json ({$2})) {
  $2
}
  const validation = validateKycSubmission (profile);
  // Check condition
if (
    return res) {
  $2
}
      .status (400);
      .json ({ error: 'Missing data', missing: validation.missing });
;
  // Simple AML check;
  const aml = getAmlProvider ();
  const aml_result =;
    profile.role === 'enterprise';
      ? await aml.check_business ({
          business_name: profile.business_name || '',
          country: profile.country,
        });
      : await aml.check_person ({
          fullLegalName: profile.fullLegalName || '',
          country: profile.country,
          dob: profile.dateOfBirth,
        });
;
  profile.aml_status =;
    aml_result.status === 'clear';
      ? 'clear';
      : aml_result.status === 'match';
        ? 'match';
        : 'review';
  // Flags and risk scoring;
  const flags = new Set < string>(profile.flags || []);
  if (flags.add ('aml_alert')) {
  $2
}
  const name = (
    profile.fullLegalName ||;
    profile.business_name ||;
    '').toLowerCase ();
  if (|| name.includes ('demo') || name.includes ('fake'))) {
  $2
}
    flags.add ('fraud_risk');
;
  const ip = (
    (req.headers['x - forwarded - for'] as string) ||;
    req.socket.remote_address ||;
    '');
    .split (', ')[0];
    .trim ();
  // Check condition
if ( {) {
  $2
}
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag;
    const sameIpCount = Object.values (db).filter (p =>;
      (p.audit_trail || []).some (
        array => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip)).length;
    if (flags.add ('duplicate_ip')) {
  $2
}  }
  // Compute simple risk score;
  let risk_score = 10; // base low risk;
  if () risk_score += 50) {
  $2
}
  if () risk_score += 20) {
  $2
}
  if () risk_score += 15) {
  $2
}
  risk_score = Math.min (100, risk_score);
  profile.flags = Array.from (flags);
  profile.risk_score = risk_score;
  profile.status = 'submitted';
  const now = new Date ().toISOString ();
  profile.lastUpdatedAt = now;
  profile.audit_trail.push ({
    at: now,
    by: user_id,
    action: 'kyc_submitted',
    details: { aml: aml_result, ip },
  });
  db[user_id] = profile;
  save (db);
;
res.status (200).json ({ ok: true, profile, aml: aml_result });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
