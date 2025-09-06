import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile, writeFile } from '../../../utils/fsdb';

interface KycProfile {
  userId: string;
  role: 'individual' | 'business';
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: any[];
  status: 'in_progress' | 'completed' | 'rejected' | 'submitted';
  amlStatus: 'unknown' | 'passed' | 'failed';
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: any[];
  flags?: string[];
  riskScore?: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId } = req.body || {};
  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  const db = readFile('kyc-profiles.json', {});
  const profile = db[userId] as KycProfile;
  if (!profile) return res.status(404).json({ error: 'Profile not found' });

  // Mock AML check
  const amlResult = {
    status: Math.random() > 0.1 ? 'passed' : 'failed',
    score: Math.random() * 100,
    flags: Math.random() > 0.8 ? ['suspicious_activity'] : []
  };

  profile.amlStatus = amlResult.status as 'passed' | 'failed';

  // Simple risk assessment
  const flags = new Set<string>();
  if (amlResult.flags.length > 0) flags.add('aml_alert');
  
  // Check for duplicate IPs (mock)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  if (ip) {
    const sameIpCount = Object.values(db).filter((p: any) => 
      p.auditTrail?.some((entry: any) => entry.details?.ip === ip)
    ).length;
    if (sameIpCount >= 2) flags.add('duplicate_ip');
  }

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
  profile.auditTrail.push({ at: now, by: userId, action: 'kyc_submitted', details: { aml: amlResult, ip } });

  db[userId] = profile;
  writeFile('kyc-profiles.json', db);

  res.status(200).json({ ok: true, profile, aml: amlResult });
}