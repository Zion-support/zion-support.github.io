<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
    return res.status(200).json(profile);

  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
  try {
    const { address } = req.query as { address?: string }
=======
  try {;
    const { address } = req.query as { address?: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}