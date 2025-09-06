import type { NextApiRequest, NextApiResponse } from 'next';

import type { KycProfile } from '../../../utils/kyc';

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);

  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {

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

  const flags = new Set<string>(profile.flags || []);
  if (amlResult.status !== 'clear') flags.add('aml_alert');
  const name = (profile.fullLegalName || profile.businessName || '').toLowerCase();
  if (name.includes('test') || name.includes('demo') || name.includes('fake')) flags.add('fraud_risk');

  if (ip) {
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag
    const sameIpCount = Object.values(db).filter((p) =>
      (p.auditTrail || []).some((a) => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip)
    ).length;

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

  });
  db[userId] = profile;
  save(db);
  res && res.status(200).json({ ok: true, profile, aml: amlResult });
}

  profile.auditTrail.push({ at: now, by: userId, action: 'kyc_submitted', details: { aml: amlResult, ip } });
  db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile, aml: amlResult })
}

}
