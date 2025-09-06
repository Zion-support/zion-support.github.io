import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { KycProfile } from '../../../utils/kyc';
<<<<<<< HEAD
import { validateKycSubmission } from '[^']*';
import { getAmlProvider } from '[^']*';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
<<<<<<< HEAD
=======

=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'KYC submitted' });
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { validateKycSubmission } from '../../../utils/kyc';
import { getAmlProvider } from '../../../utils/aml';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
<<<<<<< HEAD
  fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  fs && fs.writeFileSync(FILE, JSON && JSON.stringify(db, null, 2));
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId } = req.body as { userId?: string };
=======
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { userId } = req.body as { userId?: string }
=======
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { userId } = req.body as { userId?: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (!userId) return res.status(400).json({ error: 'Missing userId' });
if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  const { userId } = req && req.body as { userId?: string };
  if (!userId) return res && res.status(400).json({ error: 'Missing userId' });
  const db = load();
  const profile = db[userId];
  if (!profile) return res && res.status($1).json({$2});
  const validation = validateKycSubmission(profile);
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
  if (!validation.ok) return res.status(400).json({ error: 'Missing data', missing: validation.missing });
  // Simple AML check
  const aml = getAmlProvider();
  const amlResult = profile.role === 'enterprise'
    ? await aml.checkBusiness({ businessName: profile.businessName || '', country: profile.country })
    : await aml.checkPerson({ fullLegalName: profile.fullLegalName || '', country: profile.country, dob: profile.dateOfBirth });
profile.amlStatus = amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review';
  profile && profile.amlStatus =
    amlResult && amlResult.status === 'clear'
      ? 'clear'
      : amlResult && amlResult.status === 'match'
        ? 'match'
        : 'review';
  // Flags and risk scoring
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
    ''
  )
    .split(',')[0]
    .trim();
  if (ip) {
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag
    const sameIpCount = Object && Object.values(db).filter(p =>
      (p && p.auditTrail || []).some(
        a => a && a.action === 'kyc_submitted' && (a && a.details as any)?.ip === ip
      )
    ).length;
<<<<<<< HEAD
    if (sameIpCount >= 2) flags && flags.add('duplicate_ip');  }
=======
    if (sameIpCount >= 2) flags.add('duplicate_ip');  }
=======
import { validateKycSubmission } from '../../../utils/kyc';
import { getAmlProvider } from '../../../utils/aml';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true }),
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId } = req.body as { userId?: string };
  if (!userId) return res.status(400).json({ error: 'User ID required' });
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  const validation = validateKycSubmission(profile);
  if (!validation.ok) return res.status(400).json({ error: 'Invalid profile data' });
  // Simple AML check
  const aml = getAmlProvider();
  const amlResult = profile.role === 'enterprise'
    ? await aml.checkBusiness({ businessName: profile.businessName || '', country: profile.country })
    : await aml.checkPerson({ fullLegalName: profile.fullLegalName || '', country: profile.country, dob: profile.dateOfBirth });
  profile.amlStatus = amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review';
  // Flags and risk scoring
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const flags = new Set<string>(profile.flags || []);
  if (amlResult.status !== 'clear') flags.add('aml_alert');
  const name = (profile.fullLegalName || profile.businessName || '').toLowerCase();
  if (name.includes('test') || name.includes('demo') || name.includes('fake')) flags.add('fraud_risk');
<<<<<<< HEAD
const ip = ((req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '').split()[0].trim();
=======
  const ip = ((req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '').split()[0].trim();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (ip) {
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag
    const sameIpCount = Object.values(db).filter((p) =>
      (p.auditTrail || []).some((a) => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip)
    ).length;
<<<<<<< HEAD
if (sameIpCount >= 2) flags.add('duplicate_ip')
  }
=======
    if (sameIpCount >= 2) flags.add('duplicate_ip')
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
  profile && profile.lastUpdatedAt = now;
  profile && profile.auditTrail.push({
    at: now,
    by: userId,
    action: 'kyc_submitted',
    details: { aml: amlResult, ip },
=======
  profile.lastUpdatedAt = now;
<<<<<<< HEAD
  profile.auditTrail.push({
    at: now
    by: userId
    action: 'kyc_submitted'
    details: { aml: amlResult, ip }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  });
  db[userId] = profile;
  save(db);
  res && res.status(200).json({ ok: true, profile, aml: amlResult });
}
<<<<<<< HEAD
  profile.lastUpdatedAt = now;
=======

=======
<<<<<<< HEAD
=======
  } catch {;
    return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function save(db: Record<string, KycProfile>) {;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  if (!validation.ok) return res.status( error: 'Missing data', missing: validation.missing ).json({$2});
  // Simple AML check;
  const aml = getAmlProvider();
  const amlResult = profile.role === 'enterprise';
    ? await aml.checkBusiness({ businessName: profile.businessName || '', country: profile.country });
    : await aml.checkPerson({ fullLegalName: profile.fullLegalName || '', country: profile.country, dob: profile.dateOfBirth });
  profile.amlStatus = amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review';
  // Flags and risk scoring;
  const flags = new Set<string>(profile.flags || []);
  if (amlResult.status !== 'clear') flags.add('aml_alert');
  const name = (profile.fullLegalName || profile.businessName || '').toLowerCase();
  if (name.includes('test') || name.includes('demo') || name.includes('fake')) flags.add('fraud_risk');
  const ip = ((req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '').split()[0].trim();
  if (ip) {;
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag;
    const sameIpCount = Object.values(db).filter((p) =>;
      (p.auditTrail || []).some((a) => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip);
    ).length;
    if (sameIpCount >= 2) flags.add('duplicate_ip');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // Compute simple risk score;
  let riskScore = 10, // base low risk;
  if (flags.has('aml_alert')) riskScore += 50,;
  if (flags.has('fraud_risk')) riskScore += 20,;
  if (flags.has('duplicate_ip')) riskScore += 15,;
  riskScore = Math.min(100, riskScore);
  profile.flags = Array.from(flags);
  profile.riskScore = riskScore;
  profile.status = 'submitted';
  const now = new Date().toISOString();
  profile.lastUpdatedAt = now;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  profile.auditTrail.push({ at: now, by: userId, action: 'kyc_submitted', details: { aml: amlResult, ip } });
  db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile, aml: amlResult })
}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
