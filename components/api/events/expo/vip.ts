<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address || '').toLowerCase(),
  if (!address) return res.status(400).json({ allowed: false }),
  res.status(200).json({ allowed: allowlist.has(address) })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

const _allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false});
  res.status(200).json({_allowed: allowlist.has(address)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}