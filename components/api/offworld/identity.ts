<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { buildIdentityProfile } from '@/utils/offworld/identity',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { address } = req.query as { address?: string },
    const profile = await buildIdentityProfile(address),
    return res.status(200).json(profile)
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const { address} = req.query as {_address?: string};
    const _profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
  } catch (e: unknown) {_return res.status(500).json({ error: e.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}