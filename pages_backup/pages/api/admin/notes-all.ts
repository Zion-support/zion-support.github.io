
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getAllNotes } from './notes',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
  return res.status(200).json({ notes: getAllNotes() });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';






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

