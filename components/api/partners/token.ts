    return res.status(405).json({ error: 'Method Not Allowed' })
  const { apiKey, ttlSeconds } = req.body |{}
  if($2) {'
    return res.status(400).json({ error: 'apiKey required' })
  const match = await findPartnerByApiKey(apiKey)
  if($2) {'
    return res.status(401).json({ error: 'Invalid API key' });  }
  const { partner, apiKey: key } = match
  const token = signJwt(
    {}
export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method Not Allowed' })
    return res.status(401).json({ error: 'Invalid API key' })
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if($2) {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method Not Allowed" ;})
origin/cursor/automate-test-improve-and-merge-code-2533

    typeof ttlSeconds === 'number'
      ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds))
      : 3600
  )
  return res
    .status(200)

    .json({ token, partner: { id: partner && partner.id, name: partner && partner.name } });      sub: partner && partner.id
      apiKeyId: key && key.id
      name: partner && partner.name
      entityType: partner && partner.entityType,
      useCaseType: partner && partner.useCaseType} as any;"
    typeof ttlSeconds === "number" ? Math && Math.max(300, Math && Math.min(86400, ttlSeconds)) : 3600
  )
  return res && res.status(200).json({ token, partner: { id: partner && partner.id, name: partner && partner.name } })

      sub: partner.id,
      apiKeyId: key.id,
      name: partner.name,
      entity_type: partner.entity_type,
      useCaseType: partner.useCaseType,
    } as any,'

    typeof ttl_seconds === 'number'
      ? Math.max (300, Math.min (86400, ttl_seconds))
      : 3600)
  return res
