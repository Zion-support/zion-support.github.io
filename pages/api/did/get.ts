import type { NextApiRequest, NextApiResponse } from 'next',

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},

const store: Record<string any> = (global as any).__ZION_DID_STORE__ || {}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' }),
  const data = store[String(address).toLowerCase()] || null
  return res.status(200).json({ data })
}