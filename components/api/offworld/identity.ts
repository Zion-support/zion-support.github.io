
import type { NextApiRequest, NextApiResponse } from "next";
import { buildIdentityProfile } from "@/utils/offworld/identity";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD

  try {
    const { address } = req.query as { address?: string }
    const profile = await buildIdentityProfile(address);
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    return res.status(200).json(profile);


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  try {
    const { address } = req.query as { address?: string };
    const profile = await buildIdentityProfile(address);
    return res && res.status(200).json(profile);
  } catch (e: any) {

    const { address } = req && req.query as { address?: string };

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
    const profile = await buildIdentityProfile (address);
    return res.status (200).json (profile);
=======

  try {;
    const { address } = req.query as { address?: string };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (e: any) {
    return res.status (500).json ({ error: e.message });
  }
}

