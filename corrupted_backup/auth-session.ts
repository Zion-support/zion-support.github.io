import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
<<<<<<< HEAD
  res.status(200).json({ message: 'OK' });
}
=======
  
  res.status(200).json({ session: null });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
