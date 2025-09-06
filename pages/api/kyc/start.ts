import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile, writeFile } from '../../../utils/fsdb';

interface KycProfile {
  userId: string;
  role: 'individual' | 'business';
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: any[];
  status: 'in_progress' | 'completed' | 'rejected';
  amlStatus: 'unknown' | 'passed' | 'failed';
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: any[];
}

function getRequiredDocuments(role: 'individual' | 'business'): string[] {
  if (role === 'individual') {
    return ['government_id', 'proof_of_address'];
  }
  return ['business_registration', 'tax_certificate', 'proof_of_address'];
}

function getOptionalDocuments(role: 'individual' | 'business'): string[] {
  if (role === 'individual') {
    return ['bank_statement', 'utility_bill'];
  }
  return ['bank_statement', 'utility_bill', 'financial_statements'];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body || {};
  
  if (!userId || !role || !['individual', 'business'].includes(role)) {
    return res.status(400).json({ error: 'Missing or invalid userId or role' });
  }

  const db = readFile('kyc-profiles.json', {});
  const now = new Date().toISOString();
  const existing = db[userId];
  const profile: KycProfile = existing || {
    userId,
    role,
    fullLegalName,
    businessName,
    businessRegistrationNumber,
    documents: [],
    status: 'in_progress',
    amlStatus: 'unknown',
    createdAt: now,
    lastUpdatedAt: now,
    auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]
  } as KycProfile;

  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  writeFile('kyc-profiles.json', db);

  res.status(200).json({
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role)
  });
}