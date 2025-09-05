<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const store: Record<string any> = (global as any).__ZION_DID_STORE__ || {},

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' }),
  const data = store[String(address).toLowerCase()] || null,
  return res.status(200).json({ data })
=======
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { address} = req.query as {_address?: string};
  if (!address) return res.status(400).json({_error: 'Missing address'});
  const _data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({_data});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}