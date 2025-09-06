import type { NextApiRequest, NextApiResponse } from 'next';


function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);


  // Compute simple risk score
  let riskScore = 10; // base low risk
  if (flags.has('aml_alert')) riskScore += 50;
  if (flags.has('fraud_risk')) riskScore += 20;
  if (flags.has('duplicate_ip')) riskScore += 15;
  riskScore = Math.min(100, riskScore);
  profile.flags = Array.from(flags);
  profile.riskScore = riskScore;
  profile.status = 'submitted';
  const now = new Date().toISOString();
  profile.lastUpdatedAt = now;


