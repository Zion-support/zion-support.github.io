import type { NextApiRequest, NextApiResponse } from 'next';

interface KYCProfile {
  userId: string;
  role: string;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  lastUpdatedAt: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  amlStatus?: 'clear' | 'match' | 'review';
  flags?: string[];
  riskScore?: number;
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
    const { userId, documents } = req.body;
    
    if (!userId || !documents) {
      return res.status(400).json({ error: 'User ID and documents are required' });
    }

    // Mock AML check
    const amlResult = { status: 'clear' };
    const flags = new Set<string>();
    const riskScore = Math.floor(Math.random() * 100);

    const profile: KYCProfile = {
      userId,
      role: 'individual',
      lastUpdatedAt: new Date().toISOString(),
      status: 'completed',
      amlStatus: amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review',
      flags: Array.from(flags),
      riskScore
    };

    db[userId] = profile;
    save(db);

    res.status(200).json(profile);
  } catch (error) {
    console.error('KYC submit error:', error);
    res.status(500).json({ error: 'Failed to submit KYC' });
  }
}