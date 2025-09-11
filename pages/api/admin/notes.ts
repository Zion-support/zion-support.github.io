<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const notesStore: Note[] = [];
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';

<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const notesStore: Note[] = [];


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  if (req.method === 'GET') {

<<<<<<< HEAD
<<<<<<< HEAD
    const { targetType, targetId } = req.query;
    if (!targetType || Array.isArray(targetType)) {
      return res.status(400).json({ error: 'Invalid targetType' });
    }
    if (!targetId || Array.isArray(targetId)) {
      return res.status(400).json({ error: 'Invalid targetId' });
    }
    const notes = notesStore
      .filter((n) => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt);
    return res.status(200).json({ notes });
  }
if (req.method === 'POST') {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
  if (req.method === 'POST') {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const authorId = String(req.headers['x-admin-user'] || 'admin');
    const { targetType, targetId, text } = req.body || {};
    if (!targetType || !targetId || !text?.trim()) {
      return res.status(400).json({ error: 'Missing fields' });
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
  return res.status(405).json({ error: 'Method not allowed' });
}
export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt);

<<<<<<< HEAD


export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt)
}

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
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  return res.status(405).json({ error: 'Method not allowed' });
}

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
