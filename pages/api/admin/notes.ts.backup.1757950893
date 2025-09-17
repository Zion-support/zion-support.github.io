
import { randomUUID } from 'crypto',;
type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number
}

<<<<<<< HEAD


  if (req.method === 'GET') {
    const { targetType, targetId } = req.query
    if (!targetType || Array.isArray(targetType)) return res.status(400).json({ error: 'Invalid targetType' })
    if (!targetId || Array.isArray(targetId)) return res.status(400).json({ error: 'Invalid targetId' })
    const notes = notesStore
      .filter((n) => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt)
    return res.status(200).json({ notes })
  }

  if (req.method === 'POST') {
    const authorId = String(req.headers['x-admin-user'] || 'admin')
    const { targetType, targetId, text } = req.body || {}
    if (!targetType || !targetId || !text?.trim()) return res.status(400).json({ error: 'Missing fields' })
    const note: Note = { id: randomUUID(), targetType, targetId, text: String(text), authorId, createdAt: Date.now() }
    notesStore.push(note)
    return res.status(200).json({ ok: true, note })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt)
};
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
