<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { buildIdentityProfile } from '@/utils/offworld/identity',;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  try {;
    const { address } = req.query as { address?:string },;
    const profile = await buildIdentityProfile(address),;
    return res.status(200).json(profile),;
  } catch (e:any) {;
    return res.status(500).json({ error:e.message }),;
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { buildIdentityProfile } from '@/utils/offworld/identity',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { address } = req.query as { address?: string },
    const profile = await buildIdentityProfile(address),
    return res.status(200).json(profile)
  } catch (e: any) {
    return res.status(500).json({ error: e.message })  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}