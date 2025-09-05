import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { findPartnerByApiKey, signJwt } from &quot;../../../utils/api/partnerAuth&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;POST&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
  }
  const { apiKey, ttlSeconds } = req.body || {};
  if (!apiKey) {
    return res.status(400).json({ error: &quot;apiKey required&quot; });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: &quot;Invalid API key&quot; });
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any,
    typeof ttlSeconds === &quot;number&quot; ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } });
}