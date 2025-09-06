import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId } = req.body;

    if (!providerId) {
      return res.status(400).json({ error: 'Provider ID is required' });
    }

    // Mock disconnection
    const result = {
      providerId,
      status: 'disconnected',
      disconnectedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to disconnect integration'
    });
  }
}