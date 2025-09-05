<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth",
import { v4 as uuidv4 } from "uuid",
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST"),
    return res.status(405).json({ error: "Method Not Allowed" })
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { authenticateRequest, listApiKeys, saveApiKeys } from &quot;../../../utils/api/partnerAuth&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;POST&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;POST&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  const auth = await authenticateRequest(req),
  if (!auth) {
<<<<<<< HEAD
    return res.status(401).json({ error: "Unauthorized" })
=======
    return res.status(401).json({ error: &quot;Unauthorized&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  const { apiKey } = auth,
  const keys = await listApiKeys(),
  // Deactivate old key
  const existing = keys.find((k) => k.id === apiKey.id),
  if (existing) existing.active = false,
  // Create new key
  const now = new Date().toISOString(),
  const newKey = {
    id: uuidv4(),
    partnerId: auth.partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
    rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60},
  keys.push(newKey as any),
  await saveApiKeys(keys),
  return res.status(201).json({ apiKey: newKey.key })
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") {
    res.setHeader("Allow", _"POST");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  const _auth = await authenticateRequest(req);
  if (!auth) {_return res.status(401).json({ error: "Unauthorized"});
  }
  const {_apiKey} = auth;
  const _keys = await listApiKeys();
  // Deactivate old key
  const _existing = keys.find(_(k) => k.id === apiKey.id);
  if (existing) existing.active = false;
  // Create new key
  const _now = new Date().toISOString();
  const _newKey = {_id: uuidv4(), _partnerId: auth.partner.id, _key: uuidv4(), _active: true, _createdAt: now, _rateLimitPerMinute: apiKey.rateLimitPerMinute ?? 60};
  keys.push(newKey as any);
  await saveApiKeys(keys);
  return res.status(201).json({_apiKey: newKey.key});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}