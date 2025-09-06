<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { address } = req.query as { address?: string };
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
=======
 
}
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
