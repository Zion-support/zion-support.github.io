import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body;

    if (!userId || !role) {
      return res.status(400).json({ error: 'User ID and role are required' });
    }

    // Mock KYC profile creation
    const profile = {
      userId,
      role,
      fullLegalName: fullLegalName || '',
      businessName: businessName || '',
      businessRegistrationNumber: businessRegistrationNumber || '',
      status: 'pending',
      lastUpdatedAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      profile
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to start KYC process'
    });
  }
}