import { NextApiRequest, NextApiResponse } from 'next';

interface ProviderConnection {
  providerId: string;
  status: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  connectedAt: number;
  syncRules: any;
  lastSyncAt?: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { providerId, syncRules } = req.body;
    const now = Date.now();
    
    const connection: ProviderConnection = {
      providerId: providerId as any,
      status: 'connected',
      accessToken: 'mock access token',
      refreshToken: 'mock refresh token',
      expiresAt: now + 1000 * 60 * 60,
      connectedAt: now,
      syncRules: syncRules || {},
      lastSyncAt: undefined
    };
    
    res.status(200).json({ connection });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}