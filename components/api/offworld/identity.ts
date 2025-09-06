import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  try {
    const { address } = req.query as { address?: string };
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
=======
    return res.status(500).json({ error: e.message })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
