import React, { useEffect, useMemo, useState } from 'react',

export type AdminNotesPanelProps = {
  targetType: string, // e.g., 'user' | 'listing'
  targetId: string,   // unique identifier for the target
},

type Note = {
  id: string,
  targetType: string,
  targetId: string,
  text: string,
  authorId: string,
  createdAt: number
},

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {
  const [isAdmin, setIsAdmin] = useState(true),
  const [adminId, setAdminId] = useState('admin-demo'),
  const [notes, setNotes] = useState<Note[]>([]),
  const [loading, setLoading] = useState(false),
  const [adding, setAdding] = useState(false),
  const [text, setText] = useState(''),

  async function fetchNotes() {
    try {
      setLoading(true),
      const res = await fetch(`/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`, {
        headers: { 'X-Admin': isAdmin ? 'true' : 'false' }}),
      if (!res.ok) {
        setNotes([]),
        return
      }
      const data = await res.json(),
      setNotes(data.notes || [])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAdmin) fetchNotes()
  }, [isAdmin, targetType, targetId]),

  async function addNote() {
    if (!text.trim()) return,
    setAdding(true),
    try {
      const res = await fetch('/api/admin/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'falseX-Admin-User': adminId },
        body: JSON.stringify({ targetType, targetId, text })}),
      if (!res.ok) {
        alert('Failed to add note'),
        return
      }
      setText(''),
      await fetchNotes()
    } finally {
      setAdding(false)
    }
  }

  if (!isAdmin) {
    return (
      <div className=&quot;rounded border p-3&quot;>
        <div className=&quot;flex items-center gap-2 text-sm&quot;>
          <input id=&quot;isAdminToggle&quot; type=&quot;checkbox&quot; checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <label htmlFor=&quot;isAdminToggle&quot;>Admin</label>        </div>
        <div className=&quot;text-xs opacity-60 mt-2&quot;>Admin-only notes hidden.</div>
      </div>
    )
  }

  return (
    <div className=&quot;rounded border p-4 space-y-3&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;font-medium&quot;>Admin Notes</h3>
        <div className=&quot;flex items-center gap-3 text-sm&quot;>
          <label className=&quot;inline-flex items-center gap-2&quot;>
            <input type=&quot;checkbox&quot; checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
            <span>Admin</span>
          </label>
          <input className=&quot;border rounded px-2 py-1&quot; value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder=&quot;Admin ID&quot; />
        </div>
      </div>

      <div className=&quot;space-y-2&quot;>
        <textarea className=&quot;w-full border rounded-md px-3 py-2&quot; rows={3} placeholder=&quot;Write a private note (abuse, spam, special support)&quot; value={text} onChange={(e) => setText(e.target.value)} />
        <button disabled={!text.trim() || adding} onClick={addNote} className=&quot;px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50&quot;>{adding ? 'Adding…' : 'Add Note'}</button>
      </div>

      <div className=&quot;border-t pt-3&quot;>
        <div className=&quot;text-sm opacity-70 mb-2&quot;>Notes are private, time-stamped, and include author ID.</div>
        {loading ? (
          <div className=&quot;text-sm&quot;>Loading…</div>
        ) : notes.length === 0 ? (
          <div className=&quot;text-sm opacity-70&quot;>No notes yet.</div>
        ) : (
          <ul className=&quot;space-y-2&quot;>
            {notes.map((n) => (
              <li key={n.id} className=&quot;rounded border p-2 text-sm&quot;>
                <div className=&quot;opacity-60 text-xs mb-1&quot;>{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
                <div>{n.text}</div>              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}