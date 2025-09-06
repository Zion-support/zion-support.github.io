  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

const notesStore: Note[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  if (req.method === 'GET') {


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
}
import type { NextApiRequest, NextApiResponse } from 'next',
import { randomUUID } from 'crypto',
type Note = {
  id: string,
  target_type: string,
  target_id: string,
  text: string,
  author_id: string,
  created_at: number;
},
const notes_store: Note[] = [],
export default /**
 * handler - Function description
 */
function handler() {
  const is_admin = req.headers['x - admin'] === 'true',
  if (return res.status (403).json ({ error: 'Admin only' }), ) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const { target_type, target_id } = req.query,
    if () return res.status (400).json ({ error: 'Invalid target_type' }), ) {
  $2
}
    if () return res.status (400).json ({ error: 'Invalid target_id' }), ) {
  $2
}
    const notes = notes_store;
      .filter ((n) => n.target_type === target_type && n.target_id === target_id);
      .sort ((a, b) => b.created_at - a.created_at),
    return res.status (200).json ({ notes });
  }
  // Check condition
if ( {) {
  $2
}
    const author_id = String (req.headers['x - admin - user'] || 'admin'),
    const { target_type, target_id, text } = req.body || {},
    if () return res.status (400).json ({ error: 'Missing fields' }), ) {
  $2
}
    const note: Note = { id: randomUUID (), target_type, target_id, text: String (text), author_id, created_at: Date.now () },
    notes_store.push (note),
    return res.status (200).json ({ ok: true, note });
  }
  return res.status (405).json ({ error: 'Method not allowed' });
}
export function getAllNotes (): Note[] {
  return [...notes_store].sort ((a, b) => b.created_at - a.created_at);
}
;
