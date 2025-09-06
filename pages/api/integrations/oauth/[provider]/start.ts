import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { provider } = req.query;
    const { redirectUri, state } = req.query;
    
    if (!provider || typeof provider !== 'string') {
      return res.status(400).json({ error: 'Provider is required' });
    }

    // Mock OAuth start URL generation
    const authUrl = `https://${provider}.com/oauth/authorize?` +
      `client_id=mock_client_id&` +
      `redirect_uri=${encodeURIComponent(redirectUri as string || 'http://localhost:3000/callback')}&` +
      `response_type=code&` +
      `scope=read&` +
      `state=${state || 'default'}`;

    res.status(200).json({
      provider,
      authUrl,
      state: state || 'default'
    });
  } catch (error) {
    console.error('OAuth start error:', error);
    res.status(500).json({ error: 'Failed to start OAuth flow' });
  }
}