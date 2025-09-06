import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, reason } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID required' });
    }

    const optOut = {
      id: `opt-out-${Date.now()}`,
      userId,
      reason: reason || 'User requested opt-out',
      processedAt: new Date().toISOString(),
      status: 'processed'
    };

    res.status(200).json({
      success: true,
      optOut
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process opt-out' });
  }
}