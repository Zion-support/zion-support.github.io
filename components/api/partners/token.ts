<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' });
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {;
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }

  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: "Invalid API key" });
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
<<<<<<< HEAD
    {
      sub: partner.id
      apiKeyId: key.id
      name: partner.name
      entityType: partner.entityType
      useCaseType: partner.useCaseType
    } as any
    typeof ttlSeconds === 'number'
      ? Math.max(300, Math.min(86400, ttlSeconds))
      : 3600
  );
  return res
    .status(200)
    .json({ token, partner: { id: partner.id, name: partner.name } });      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entityType: partner.entityType
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );

  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
<<<<<<< HEAD
=======
    {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======

  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
