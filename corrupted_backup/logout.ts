import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
  res.status(200).json({ success: true });
}
=======
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Logout successful' });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
