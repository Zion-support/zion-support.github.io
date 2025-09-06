<<<<<<< HEAD

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import type { NextApiRequest, NextApiResponse } from "next";
import { buildIdentityProfile } from "@/utils/offworld/identity";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
  try {
    const { address } = req.query as { address?: string }
    const profile = await buildIdentityProfile(address);
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    return res.status(200).json(profile);

=======
    const { address } = req && req.query as { address?: string };
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const { address } = req.query as { address?: string };
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    const profile = await buildIdentityProfile(address);
    return res && res.status(200).json(profile);
  } catch (e: any) {
    const profile = await buildIdentityProfile(address);
    return res && res.status(200).json(profile);
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message });
import type { NextApiRequest, NextApiResponse } from './next';
import { buildIdentityProfile  } from '@/utils / offworld / identity';
export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const { address } = req.query as { address?: string }
    const profile = await buildIdentityProfile (address);
    return res.status (200).json (profile);
  } catch (e: any) {
    return res.status (500).json ({ error: e.message });
  }
  try {
    const { address } = req.query as { address?: string }
<<<<<<< HEAD
  try {;
    const { address } = req.query as { address?: string };
=======
    const profile = await buildIdentityProfile (address);
    return res.status (200).json (profile);
<<<<<<< HEAD
=======

  try {;
    const { address } = req.query as { address?: string };

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (e: any) {
    return res.status (500).json ({ error: e.message });
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
}
    return res.status(500).json({ error: e.message })
  };
}
