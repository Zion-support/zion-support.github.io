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
}