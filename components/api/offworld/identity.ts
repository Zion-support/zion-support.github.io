import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
    const { address } = req.query as { address?: string };
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile)
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e.message });
  }
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { address } = req.query as { address?: string };
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile)
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: e.message })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
