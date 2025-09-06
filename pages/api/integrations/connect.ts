export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  
  const { providerId, syncRules } = req.body || {};
  const now = Date.now();
  
  const connection = {
    providerId: providerId,
    status: 'connected',
    accessToken: 'mock access token',
    refreshToken: 'mock refresh token',
    expiresAt: now + 1000 * 60 * 60,
    connectedAt: now,
    syncRules: syncRules || {},
    lastSyncAt: undefined
  };
  
  res.status(200).json({ message: 'Integrations Connect API', connection });
}