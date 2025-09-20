import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ message: 'API endpoint working' ,});
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint working' });
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
}