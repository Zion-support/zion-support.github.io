import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    // Mock dispute data
    const dispute = {
      id,
      status: 'open',
      description: 'Sample dispute',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      dispute
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve dispute'
    });
  }
}