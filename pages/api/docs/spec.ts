import type { NextApiRequest, NextApiResponse } from 'next',
import v1 from '../../../data/api-docs/v1'
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json'),
  res.status(200).json(v1)
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
