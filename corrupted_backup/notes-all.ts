import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
  return res.status(200).json({ notes: getAllNotes() });
}
=======
  res.status(200).json({ message: 'All notes' });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
