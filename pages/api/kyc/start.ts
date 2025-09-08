import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body || {};
    const now = new Date().toISOString();
    
    const profile = {
      userId,
      role,
      fullLegalName,
      businessName,
      businessRegistrationNumber,
      lastUpdatedAt: now
    };
    
    res.status(200).json({ message: 'KYC start endpoint', profile });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}