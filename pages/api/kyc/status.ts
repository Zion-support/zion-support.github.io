import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from '../../../utils/fsdb';

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
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId } = req.query as { userId?: string };
  if (!userId) return res.status(400).json({ error: 'Missing userId' });
  
  const db = readFile('kyc-profiles.json', {});
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  
  res.status(200).json({
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(profile.role),
    optionalDocuments: getOptionalDocuments(profile.role)
  });
}