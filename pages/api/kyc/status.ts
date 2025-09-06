import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId } = req.query;
    
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Mock KYC status
    const status = {
      userId,
      status: 'in_progress',
      progress: 75,
      requiredDocuments: ['passport', 'utility_bill'],
      completedDocuments: ['passport'],
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json(status);
  } catch (error) {
    console.error('KYC status error:', error);
    res.status(500).json({ error: 'Failed to get KYC status' });
  }
}