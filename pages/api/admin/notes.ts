import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';

type Note = {
  id: string;
  content: string;
  createdAt: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const note: Note = {
      id: randomUUID(),
      content: req.body.content || '',
      createdAt: new Date().toISOString()
    };
    return res.status(200).json({ ok: true, note });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

const notesStore: Note[] = [];

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}
