<<<<<<< HEAD
import { useEffect, useState } from 'react',

type Note = {
  id: string,
  targetType: string,
  targetId: string,
  text: string,
  authorId: string,
  createdAt: number
},

export default function AdminNotesConsole() {
  const [isAdmin, setIsAdmin] = useState(true),
  const [notes, setNotes] = useState<Note[]>([]),
  const [loading, setLoading] = useState(false),
=======

type Note = {_id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;};

export default function AdminNotesConsole() {_const [isAdmin, _setIsAdmin] = useState(true);
  const [notes, _setNotes] = useState<Note[]>([]);
  const [loading, _setLoading] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    async function load() {
      setLoading(true),
      try {
<<<<<<< HEAD
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } }),
        if (!res.ok) return,
        const data = await res.json(),
        setNotes(data.notes || [])
      } finally {
        setLoading(false)
      }
=======
        const _res = await fetch('/api/admin/notes-all', _{ headers: { 'X-Admin': isAdmin ? 'true' : 'false'} });
        if (!res.ok) return;
        const _data = await res.json();
        setNotes(data.notes || []);
      } finally {_setLoading(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    if (isAdmin) load()
  }, [isAdmin]),

<<<<<<< HEAD
  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-xl font-semibold&quot;>Admin Notes</h1>
        <label className=&quot;inline-flex items-center gap-2 text-sm&quot;>
          <input type=&quot;checkbox&quot; checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
=======
  return (_<div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin Notes</h1>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={_isAdmin} onChange={_(e) => setIsAdmin(e.target.checked)} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <span>Admin</span>
        </label>
      </div>

      {_loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
<<<<<<< HEAD
        <div className=&quot;opacity-70&quot;>No notes found.</div>
      ) : (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
          {notes.map((n) => (
            <div key={n.id} className=&quot;rounded border p-3 text-sm&quot;>
              <div className=&quot;opacity-60 text-xs mb-1&quot;>{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              <div className=&quot;font-medium mb-1&quot;>{n.targetType} • {n.targetId}</div>
              <div>{n.text}</div>
=======
        <div className="opacity-70">No notes found.</div>
      ) : (_<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((n) => (
            <div key={n.id} className="rounded border p-3 text-sm">
              <div className="opacity-60 text-xs mb-1">{_new Date(n.createdAt).toLocaleString()} • {_n.authorId}</div>
              <div className="font-medium mb-1">{_n.targetType} • {_n.targetId}</div>
              <div>{_n.text}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          ))}
        </div>
      )}
    </div>
  )
}