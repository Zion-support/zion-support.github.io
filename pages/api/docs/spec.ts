<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import v1 from '../../../data/api-docs/v1',;
;
export default function handler(_req:NextApiRequest, res:NextApiResponse) {;
  res.setHeader('Content-Typeapplication/json'),;
  res.status(200).json(v1),;
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import v1 from '../../../data/api-docs/v1',
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json'),
  res.status(200).json(v1)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}