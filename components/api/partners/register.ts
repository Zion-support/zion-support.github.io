import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { createPartner } from &quot;../../../utils/api/partnerAuth&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;POST&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
  }
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {};
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {
    return res.status(400).json({ error: &quot;Missing required fields&quot; });
  }
  try {
    const { partner, apiKey } = await createPartner({
      name,
      entityType,
      pointOfContact,
      useCaseType,
      brand});
    return res.status(201).json({
      partner: {
        id: partner.id,
        name: partner.name,
        status: partner.status,
        entityType: partner.entityType,
        useCaseType: partner.useCaseType,
        createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`});
  } catch (e) {
    return res.status(500).json({ error: &quot;Failed to create partner&quot; });
  }
}