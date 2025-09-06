import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  return res.status(200).json({ notes: getAllNotes() })
}

=======
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const notes = getAllNotes();
      res.json({ notes });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
