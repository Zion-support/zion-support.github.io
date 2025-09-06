<<<<<<< HEAD
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

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextApiRequest, NextApiResponse } from "next";
import { buildIdentityProfile } from "@/utils/offworld/identity";
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  }
}
=======
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
