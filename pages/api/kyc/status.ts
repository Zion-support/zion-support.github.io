import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId } = req.query;
    
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'User ID required' });
    }

    // Mock KYC status
    const status = {
      userId,
      status: 'pending',
      progress: 60,
      steps: {
        identity: 'completed',
        address: 'completed',
        documents: 'pending',
        verification: 'pending'
      },
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      status
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve KYC status' });
  }
}