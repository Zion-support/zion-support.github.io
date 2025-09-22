import { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
}
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ user: null });
}
