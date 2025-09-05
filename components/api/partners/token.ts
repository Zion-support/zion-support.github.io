<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth",

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST"),
    return res.status(405).json({ error: "Method Not Allowed" })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { findPartnerByApiKey, signJwt } from &quot;../../../utils/api/partnerAuth&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;POST&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  const { apiKey, ttlSeconds } = req.body || {},
  if (!apiKey) {
<<<<<<< HEAD
    return res.status(400).json({ error: "apiKey required" })
=======
    return res.status(400).json({ error: &quot;apiKey required&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  const match = await findPartnerByApiKey(apiKey),
  if (!match) {
<<<<<<< HEAD
    return res.status(401).json({ error: "Invalid API key" })
=======
    return res.status(401).json({ error: &quot;Invalid API key&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  const { partner, apiKey: key } = match,
  const token = signJwt(
    {
      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any,
<<<<<<< HEAD
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  ),
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
=======
    typeof ttlSeconds === &quot;number&quot; ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST"),;
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const { apiKey, ttlSeconds } = req.body || {},;
  if (!apiKey) {;
    return res.status(400).json({ error: "apiKey required" });
  }
  const match = await findPartnerByApiKey(apiKey),;
  if (!match) {;
    return res.status(401).json({ error: "Invalid API key" });
  }
  const { partner, apiKey: key } = match,;
  const token = signJwt(;
    {;
      sub: partner.id,;
      apiKeyId: key.id,;
      name: partner.name,;
      entityType: partner.entityType,;
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600;
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}