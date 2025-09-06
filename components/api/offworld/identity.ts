<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { address } = req.query as { address?: string };
    const profile = null;
    return res.status(200).json(profile)
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { buildIdentityProfile } from "@/utils/offworld/identity";
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
    const { address } = req.query as { address?: string }
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
  try {
    const { address } = req.query as { address?: string }
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
 
} catch (e: any) {
    return res.status(500).json({ error: e.message });
<<<<<<< HEAD
  }
}
=======
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
