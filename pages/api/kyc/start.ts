import { NextApiRequest, NextApiResponse } from 'next';

interface KYCProfile {
  userId: string;
  role: string;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  lastUpdatedAt: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body;
    
    if (!userId || !role) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    
    const now = Date.now();
    const profile: KYCProfile = {
      userId,
      role,
      fullLegalName,
      businessName,
      businessRegistrationNumber,
      lastUpdatedAt: now
    };
    
    // Database save logic would go here
    res.status(200).json({ profile });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}