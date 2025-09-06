import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
  res.status(200).json(v1);
=======
  res.status(200).json(v1);
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
