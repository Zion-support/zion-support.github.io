import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.body || {};
    
    const profile = {
      userId,
      uploadedAt: new Date().toISOString()
    };
    
    res.status(200).json({ message: 'KYC upload endpoint', profile });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}