import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
<<<<<<< HEAD

type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
=======
type Note = {
  id: string, targetType: string,
  targetId: string, text: string,
  authorId: string,
  createdAt: number
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

const notesStore: Note[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });

  if (req.method === 'GET') {
    const { targetType, targetId } = req.query;
<<<<<<< HEAD
    if (!targetType || Array.isArray(targetType))
      return res.status(400).json({ error: 'Invalid targetType' });
    if (!targetId || Array.isArray(targetId))
      return res.status(400).json({ error: 'Invalid targetId' });
    const notes = notesStore
      .filter(n => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt);
    return res.status(200).json({ notes });
=======
    if (!targetType || Array.isArray(targetType)) return res.status(400).json({ error: 'Invalid targetType' });
    if (!targetId || Array.isArray(targetId)) return res.status(400).json({ error: 'Invalid targetId' });
    const notes = notesStore
      .filter((n) => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt);
    return res.status(200).json({ notes })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'POST') {
    const authorId = String(req.headers['x-admin-user'] || 'admin');
    const { targetType, targetId, text } = req.body || {};
<<<<<<< HEAD
    if (!targetType || !targetId || !text?.trim())
      return res.status(400).json({ error: 'Missing fields' });
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

  return res.status(405).json({ error: 'Method not allowed' });

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt);
=======
    if (!targetType || !targetId || !text?.trim()) return res.status(400).json({ error: 'Missing fields' });
    const note: Note = { id: randomUUID(), targetType, targetId, text: String(text), authorId, createdAt: Date.now() };
    notesStore.push(note);
    return res.status(200).json({ ok: true, note })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
