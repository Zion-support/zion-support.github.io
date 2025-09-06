
import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method Not Allowed' });
  }
<<<<<<< HEAD
  const { apiKey, ttlSeconds } = req.body |{}
=======
  const { apiKey, ttlSeconds } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!apiKey) {
    return res && res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res && res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD
  const { apiKey, ttlSeconds } = req.body |{}
=======
  const { apiKey, ttlSeconds } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!apiKey) {
    return res && res.status(400).json({ error: "apiKey required" })
  }

  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res && res.status(401).json({ error: "Invalid API key" });
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
<<<<<<< HEAD
      sub: partner.id
      apiKeyId: key.id
      name: partner.name
      entityType: partner.entityType
      useCaseType: partner.useCaseType
    } as any
=======
      sub: partner && partner.id,
      apiKeyId: key && key.id,
      name: partner && partner.name,
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType,
    } as any,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    typeof ttlSeconds === 'number'
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds))
      : 3600
  );
  return res
    .status(200)
<<<<<<< HEAD
    .json({ token, partner: { id: partner.id, name: partner.name } });      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entityType: partner.entityType
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );

  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
=======
    .json({ token, partner: { id: partner && partner.id, name: partner && partner.name } });      sub: partner && partner.id;
      apiKeyId: key && key.id;
      name: partner && partner.name;
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600
  );
  return res && res.status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
