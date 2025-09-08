import type { NextApiRequest, NextApiResponse } from 'next';

interface ProviderConnection {
  providerId: string;
  status: 'connected' | 'disconnected' | 'error';
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  connectedAt: number;
  syncRules?: any;
  lastSyncAt?: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId, syncRules } = req.body;

    if (!providerId) {
      return res.status(400).json({ error: 'Provider ID is required' });
    }

    const now = Date.now();
    const connection: ProviderConnection = {
      providerId: providerId as string,
      status: 'connected',
      accessToken: 'mock access token',
      refreshToken: 'mock refresh token',
      expiresAt: now + 1000 * 60 * 60,
      connectedAt: now,
      syncRules: syncRules || {},
      lastSyncAt: undefined
    };

    res.status(200).json({
      success: true,
      connection
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to connect integration'
    });
  }
}