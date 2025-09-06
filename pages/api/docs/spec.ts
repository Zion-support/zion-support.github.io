import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(v1);
=======
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
