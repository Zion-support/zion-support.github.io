import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';
  try {
    const { address } = req.query as { address?: string };
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile)
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  };
}
