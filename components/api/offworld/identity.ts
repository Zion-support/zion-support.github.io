
import type { NextApiRequest, NextApiResponse } from "next";
import { buildIdentityProfile } from "@/utils/offworld/identity";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  try {
    const { address } = req.query as { address?: string }
    const profile = await buildIdentityProfile(address);

    return res.status(200).json(profile);


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (e: any) {
    return res.status (500).json ({ error: e.message });
  }
}

