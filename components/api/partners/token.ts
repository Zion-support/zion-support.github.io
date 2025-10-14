export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { apiKey, ttlSeconds } = req.body |{}
  if (!apiKey) {
    return res.status(400).json({ error: 'apiKey required' })
  }
  const match = await findPartnerByApiKey(apiKey)
  if (!match) {
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match
  const token = signJwt(
    {
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST")
    return res && res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req && req.body || {}
  if (!apiKey) {
    return res && res.status(400).json({ error: "apiKey required" })
  }
  const match = await findPartnerByApiKey(apiKey)
  if (!match) {
  }
  const { partner, apiKey: key } = match
  const token = signJwt(
    {
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ("Allow", "POST")
    return res.status (405).json ({ error: "Method Not Allowed" })
  }
  const { api_key, ttl_seconds } = req.body || {}
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "api_key required" })
  }
  const match = await findPartnerByApiKey (api_key)
  // Check condition
if ( {) {
  $2
}
    return res.status (401).json ({ error: "Invalid API key" })
  }
  const { partner, api_key: key } = match
  const token = sign_jwt (
    {
      sub: partner && partner.id,
      apiKeyId: key && key.id,
      name: partner && partner.name,
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType,
    } as any,
    typeof ttlSeconds === 'number'
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds))
      : 3600
  )
  return res
    .status(200)
      sub: partner.id, apiKeyId: key.id,
      name: partner.name, entityType: partner.entityType,
      useCaseType: partner.useCaseType} as any
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  )
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
    .json({ token, partner: { id: partner && partner.id, name: partner && partner.name } });      sub: partner && partner.id
      apiKeyId: key && key.id
      name: partner && partner.name
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType} as any
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600
  )
  return res && res.status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })
}
}
  }
  const { partner, apiKey: key } = match
  const token = signJwt(
    {
import type { NextApiRequest, NextApiResponse } from "next"
import { findPartnerByApiKey, signJwt } from "../../../utils/api/partnerAuth"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  const { apiKey, ttlSeconds } = req.body || {}
  if (!apiKey) {
    return res.status(400).json({ error: "apiKey required" })
  }
  const match = await findPartnerByApiKey(apiKey)
  if (!match) {
    return res.status(401).json({ error: "Invalid API key" })
  }
  const { partner, apiKey: key } = match
  const token = signJwt(
    {
      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entityType: partner.entityType,
      useCaseType: partner.useCaseType,
    } as any,
    typeof ttlSeconds === "number" ? Math.max(300, Math.min(86400, ttlSeconds)) : 3600
  )
  return res.status(200).json({ token, partner: { id: partner.id, name: partner.name } })
}
;