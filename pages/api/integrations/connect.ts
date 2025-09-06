import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = {
    providerId: req.body?.providerId || 'unknown',
    status: 'connected',
    accessToken: 'mock access token',
    refreshToken: 'mock refresh token',
    expiresAt: Date.now() + 1000 * 60 * 60,
    connectedAt: Date.now(),
    syncRules: req.body?.syncRules || {},
    lastSyncAt: undefined
  };
  
  res.status(200).json({ connection });
}