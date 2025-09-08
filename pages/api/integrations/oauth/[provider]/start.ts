import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { provider } = req.query;
    const { redirectUri, scopes } = req.body;

    if (!provider || typeof provider !== 'string') {
      return res.status(400).json({ error: 'Provider is required' });
    }

    if (!redirectUri) {
      return res.status(400).json({ error: 'Redirect URI is required' });
    }

    // Mock OAuth start
    const authUrl = `https://${provider}.com/oauth/authorize?client_id=mock_client_id&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scopes?.join(' ') || 'read'}&state=mock_state`;

    res.status(200).json({
      success: true,
      authUrl,
      state: 'mock_state'
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to start OAuth flow'
    });
  }
}