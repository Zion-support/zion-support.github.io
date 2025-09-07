import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
  res.status(200).json({ success: true });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
  res.status(200).json({ success: true });
}
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Logout successful' });
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
