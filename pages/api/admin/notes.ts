import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
type Note = $2;
  targetType: string,
  targetId: string,
  text: string,
  authorId: string,
  createdAt: number},

const notesStore: Note[] = [],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = $2;
  if (!isAdmin) return res.status(403).json($2);
  if (req.method === 'GET') {
    const { targetType, targetId } = req.query,
    if (!targetType || Array.isArray(targetType)) return res.status(400).json($2);
    if (!targetId || Array.isArray(targetId)) return res.status(400).json($2);
    const notes = notesStore
      .filter((n) => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt),
    return res.status(200).json({ notes })
  }

  if (req.method === 'POST') {
    const authorId = String($2);
    const { targetType, targetId, text } = req.body || {},
    if (!targetType || !targetId || !text?.trim()) return res.status(400).json($2);
    const note: Note = { id: randomUUID(), targetType, targetId, text: String(text), authorId, createdAt: Date.now() },
    notesStore.push($2);
    return res.status(200).json({ ok: true, note })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt)
}