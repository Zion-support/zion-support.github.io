import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages/api/auth/me.ts
import { getUserFromRequest } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
}
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
}
=======
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ user: null });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/me.ts
