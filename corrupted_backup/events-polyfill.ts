<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(v1);
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
