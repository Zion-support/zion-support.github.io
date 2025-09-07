  let riskScore = 10, // base low risk
  if (flags.has('aml_alert')) riskScore += 50,
  if (flags.has('fraud_risk')) riskScore += 20,
  if (flags.has('duplicate_ip')) riskScore += 15,
  riskScore = Math.min($2);
  profile.flags = Array.from($2);
  profile.riskScore = $2;
  profile.status = $2;
  const now = new Date().toISOString($2);
  profile.lastUpdatedAt = $2;
  profile.auditTrail.push($2);
  db[userId] = profile,
  save($2);
  res.status(200).json({ ok: true, profile, aml: amlResult})
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ submitted: true });
}