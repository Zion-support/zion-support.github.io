import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { apiKey, ttlSeconds } = req.body || {};
  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
=======
    return res.status(401).json({ error: "Invalid API key" });
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType,
    } as any,
    typeof ttlSeconds === 'number'
      ? Math.max(300, Math.min(86400, ttlSeconds))
      : 3600
  );
  return res
    .status(200)
<<<<<<< HEAD
    .json({ token, partner: { id: partner.id, name: partner.name } });
=======
      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
