import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { authenticateRequest, listApiKeys, saveApiKeys } from &quot;../../../utils/api/partnerAuth&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;POST&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
  }
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: &quot;Unauthorized&quot; });
  }
  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key
  const existing = keys.find((k) => k.id === apiKey.id);
  if (existing) existing.active = false;
  // Create new key
  const now = new Date().toISOString();
  const newKey = {
    id: uuidv4(),
    partnerId: auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60};
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({ apiKey: newKey.key });
}