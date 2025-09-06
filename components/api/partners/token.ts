<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { findPartnerByApiKey, signJwt } from '../../../utils/api/partnerAuth';
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req.body || {};
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
<<<<<<< HEAD
    return res.status(401).json({ error: 'Invalid API key' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req.body || {};
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }
  const match = await findPartnerByApiKey(apiKey);
  if (!match) {
    return res.status(401).json({ error: "Invalid API key" });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(401).json({ error: "Invalid API key" });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  const { partner, apiKey: key } = match;
  const token = signJwt(
    {
<<<<<<< HEAD
<<<<<<< HEAD
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
    .json({ token, partner: { id: partner.id, name: partner.name } });
=======
      sub: partner.id, apiKeyId: key.id,
      name: partner.name, entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      sub: partner.id;
      apiKeyId: key.id;
      name: partner.name;
      entityType: partner.entityType;
      useCaseType: partner.useCaseType} as any;
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  );
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
