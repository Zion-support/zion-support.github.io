import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { action, fraudId, reason } = req.body;

    if (!action || !fraudId) {
      return res.status(400).json({ error: 'Action and fraudId are required' });
    }

    // Mock fraud action
    const result = {
      id: fraudId,
      action,
      reason: reason || '',
      processedAt: new Date().toISOString(),
      status: 'completed'
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to process fraud action'
    });
  }
}