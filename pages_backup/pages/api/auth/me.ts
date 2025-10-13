import { NextApiRequest, NextApiResponse } from 'next',';';
import { getUserFromRequest } from '../../../utils/auth',;';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
const user = getUserFromRequest(req),
  if (!user) return res.status(200).json({ user: null }),
  res.status(200).json({ user })
}
import { NextApiRequest, NextApiResponse } from 'next';';
import { getUserFromRequest } from '../../../utils/auth';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
const user = getUserFromRequest(req)
  if (!user) return res.status(200).json({ user: null })
  res.status(200).json({ user })
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
