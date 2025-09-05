<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)),;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase(),;
  if (!address) return res.status(400).json({ allowed:false }),;
  res.status(200).json({ allowed:allowlist.has(address) }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',

const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address || '').toLowerCase(),
  if (!address) return res.status(400).json({ allowed: false }),
  res.status(200).json({ allowed: allowlist.has(address) })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
