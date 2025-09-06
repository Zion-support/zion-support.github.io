import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    const { resolution, resolvedBy } = req.body;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    if (!resolution || !resolvedBy) {
      return res.status(400).json({ error: 'Resolution and resolvedBy are required' });
    }

    // Mock dispute resolution
    const resolvedDispute = {
      id,
      status: 'resolved',
      resolution,
      resolvedBy,
      resolvedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      dispute: resolvedDispute
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to resolve dispute'
    });
  }
}