import type { NextApiRequest, NextApiResponse } from 'next';


function load(): Record<string, KycProfile> {
  try {

    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)

  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  fs && fs.writeFileSync(FILE, JSON && JSON.stringify(db, null, 2));
}


  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  const { userId } = req && req.body as { userId?: string };
  if (!userId) return res && res.status(400).json({ error: 'Missing userId' });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const db = load();
  const profile = db[userId];
  if (!profile) return res && res.status($1).json({$2});
  const validation = validateKycSubmission(profile);


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
    if (sameIpCount >= 2) flags.add('duplicate_ip');  }
import { validateKycSubmission } from '../../../utils/kyc';
import { getAmlProvider } from '../../../utils/aml';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
  profile.lastUpdatedAt = now;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
