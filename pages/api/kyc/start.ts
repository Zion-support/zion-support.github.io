import type { NextApiRequest, NextApiResponse } from 'next';

interface KYCProfile {
  userId: string;
  role: string;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  lastUpdatedAt: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
}

const db: Record<string, KYCProfile> = {};

function save(data: Record<string, KYCProfile>) {
  // Mock save to database
  console.log('Saving KYC data:', data);
}

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

    const now = new Date().toISOString();
    const profile: KYCProfile = {
      userId,
      role,
      fullLegalName,
      businessName,
      businessRegistrationNumber,
      lastUpdatedAt: now,
      status: 'in_progress'
    };

    db[userId] = profile;
    save(db);

    res.status(200).json(profile);
  } catch (error) {
    console.error('KYC start error:', error);
    res.status(500).json({ error: 'Failed to start KYC process' });
  }
}