<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next',;
import { randomUUID } from 'crypto',;
type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number
}
const notesStore: Note[] = []
<<<<<<< HEAD
=======

  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

const notesStore: Note[] = [];

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

const notesStore: Note[] = [];
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { randomUUID } from 'crypto';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  if (req.method === 'GET') {
<<<<<<< HEAD


  }
  if (req.method === 'POST') {
    const authorId = String(req.headers['x-admin-user'] |'admin')
    const { targetType, targetId, text } = req.body |{}
    if (!targetType |!targetId |!text?.trim()) return res.status(400).json({ error: 'Missing fields' })
    const note: Note = { id: randomUUID(), targetType, targetId, text: String(text), authorId, createdAt: Date.now() }
    notesStore.push(note)
    return res.status(200).json({ ok: true, note })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt)
}

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt);
};
import type { NextApiRequest, NextApiResponse } from 'next';

interface Note {
  id: string;
  targetType: string;
  targetId: string;
  content: string;
  author: string;
  createdAt: string;
}

let notesStore: Note[] = [];

export function getAllNotes(): Note[] {
  return notesStore;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const { targetType, targetId } = req.query;
      if (!targetType || Array.isArray(targetType)) return res.status(400).json({ error: 'Invalid targetType' });
      if (!targetId || Array.isArray(targetId)) return res.status(400).json({ error: 'Invalid targetId' });
      
      const notes = notesStore
        .filter((n) => n.targetType === targetType && n.targetId === targetId);
      res.json({ notes });
    } else if (req.method === 'POST') {
      const { targetType, targetId, content, author } = req.body;
      const note: Note = {
        id: Date.now().toString(),
        targetType,
        targetId,
        content,
        author,
        createdAt: new Date().toISOString()
      };
      notesStore.push(note);
      res.json({ note });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
<<<<<<< HEAD
=======
=======


  }
  if (req.method === 'POST') {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

    const authorId = String(req.headers['x-admin-user'] || 'admin');
    const { targetType, targetId, text } = req.body || {};
    if (!targetType || !targetId || !text?.trim()) {
      return res.status(400).json({ error: 'Missing fields' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    const note: Note = {
      id: randomUUID(),
      targetType,
      targetId,
      text: String(text),
      authorId,
      createdAt: Date.now(),
    };
    notesStore.push(note);
    return res.status(200).json({ ok: true, note });
  }
<<<<<<< HEAD


=======
  return res.status(405).json({ error: 'Method not allowed' });
}
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function getAllNotes(): Note[] {

interface Note {
  id: string;
  targetType: string;
  targetId: string;
  content: string;
  author: string;
  createdAt: string;
}

let notesStore: Note[] = [];

<<<<<<< HEAD
export function getAllNotes(): Note[] {
  return notesStore;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const { targetType, targetId } = req.query;
      if (!targetType || Array.isArray(targetType)) return res.status(400).json({ error: 'Invalid targetType' });
      if (!targetId || Array.isArray(targetId)) return res.status(400).json({ error: 'Invalid targetId' });

      const notes = notesStore
        .filter((n) => n.targetType === targetType && n.targetId === targetId);
      res.json({ notes });
    } else if (req.method === 'POST') {
      const { targetType, targetId, content, author } = req.body;
      const note: Note = {
        id: Date.now().toString(),
        targetType,
        targetId,
        content,
        author,
        createdAt: new Date().toISOString()
      };
      notesStore.push(note);
      res.json({ note });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
