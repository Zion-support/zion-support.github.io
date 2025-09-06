export default async function handler(req: any, res: any) {
  const { providerId, syncRules } = req.body || {};
  const now = Date.now();
  
  const connection = {
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
}