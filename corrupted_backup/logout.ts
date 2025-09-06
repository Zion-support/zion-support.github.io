import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages/api/auth/logout.ts
import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
  res.status(200).json({ success: true });
}
=======

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
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/logout.ts
