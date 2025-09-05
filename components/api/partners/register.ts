<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { createPartner } from "../../../utils/api/partnerAuth",
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST"),
    return res.status(405).json({ error: "Method Not Allowed" })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { createPartner } from &quot;../../../utils/api/partnerAuth&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;POST&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {},
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {
<<<<<<< HEAD
    return res.status(400).json({ error: "Missing required fields" })
=======
    return res.status(400).json({ error: &quot;Missing required fields&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  try {
    const { partner, apiKey } = await createPartner({
      name,
      entityType,
      pointOfContact,
      useCaseType,
      brand}),
    return res.status(201).json({
      partner: {
        id: partner.id,
        name: partner.name,
        status: partner.status,
        entityType: partner.entityType,
        useCaseType: partner.useCaseType,
        createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${partner.id}`})
  } catch (e) {
<<<<<<< HEAD
    return res.status(500).json({ error: "Failed to create partner" })
=======
    return res.status(500).json({ error: &quot;Failed to create partner&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") {
    res.setHeader("Allow", _"POST");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const {_name, _entityType, _pointOfContact, _useCaseType, _brand} = req.body || {};
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {_return res.status(400).json({ error: "Missing required fields"});
  }
  try {_const { partner, _apiKey} = await createPartner({_name, _entityType, _pointOfContact, _useCaseType, _brand});
    return res.status(201).json({_partner: {
        id: partner.id, _name: partner.name, _status: partner.status, _entityType: partner.entityType, _useCaseType: partner.useCaseType, _createdAt: partner.createdAt},
      apiKey: apiKey.key,
      dashboardUrl: `/partners/dashboard?pid=${_partner.id}`});
  } catch (e) {_return res.status(500).json({ error: "Failed to create partner"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}