import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { provider } = req.query;
    const { code, state } = req.query;

    if (!provider || typeof provider !== 'string') {
      return res.status(400).json({ error: 'Provider is required' });
    }

    if (!code) {
      return res.status(400).json({ error: 'Authorization code is required' });
    }

    // Mock OAuth callback processing
    const result = {
      provider,
      code,
      state,
      status: 'success',
      accessToken: 'mock_access_token',
      refreshToken: 'mock_refresh_token',
      expiresIn: 3600,
      processedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to process OAuth callback'
    });
  }
}