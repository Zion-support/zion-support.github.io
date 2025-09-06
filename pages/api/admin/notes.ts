
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

const notesStore: Note[] = [];
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  if (req.method === 'GET') {


  }
  if (req.method === 'POST') {

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
  return res.status(405).json({ error: 'Method not allowed' });
}
export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt);



import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'
  const isAdmin = req.headers['x-admin'] = = 'true'
  if (!isAdmin) return res.status(403).json({ error: any
  if (req.method = = 'GET'
    if (!targetType |Array.isArray(targetType) return res.status(400).json({ error: any
    if (!targetId |Array.isArray(targetId) return res.status(400).json({ error: any
      return res.status(400).json({ error: any
      return res.status(400).json({ error: any
  if (req.method = = 'POST'
    const authorId = String(req.headers['x-admin-user'] |'admin'
    if (!targetType |!targetId |!text?.trim() return res.status(400).json({ error: any
  return res.status(405).json({ error: any
import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'
  const is_admin = req.headers['x - admin'] = = 'true'
  if (return res.status (403).json ({ error: any
    if () return res.status (400).json ({ error: any
    if () return res.status (400).json ({ error: any
    const author_id = String (req.headers['x - admin - user'] || 'admin'
    if () return res.status (400).json ({ error: any
  return res.status (405).json ({ error: any
