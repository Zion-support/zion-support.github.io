import React, { useEffect, useMemo, useState } from 'react';

export type AdminNotesPanelProps = {
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

export default function AdminNotesPanel({
  targetType,
  targetId,
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);
=======
export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [isAdmin, setIsAdmin] = useState(true);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [adminId, setAdminId] = useState('admin-demo');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState('');

  async function fetchNotes() {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,
        {
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' },
        }
      );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      if (!res.ok) {
        setNotes([]);
        return;
      }
      const data = await res.json();
      setNotes(data.notes || []);
    } finally {
      setLoading(false);    }
  }

  useEffect(() => {
    if (isAdmin) fetchNotes();  }, [isAdmin, targetType, targetId]);
=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  useEffect(() => {
<<<<<<< HEAD
    if (isAdmin) fetchNotes();
=======
    if (isAdmin) fetchNotes()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [isAdmin, targetType, targetId]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  async function addNote() {
    if (!text.trim()) return;
    setAdding(true);
    try {
      const res = await fetch('/api/admin/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin': isAdmin ? 'true' : 'false',
          'X-Admin-User': adminId,
        },
        body: JSON.stringify({ targetType, targetId, text }),
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      if (!res.ok) {
        alert('Failed to add note');
        return;
      }
      setText('');
      await fetchNotes();
    } finally {
      setAdding(false);    }
=======
      setAdding(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
          <input
            id='isAdminToggle'
            type='checkbox'
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
          />
          <label htmlFor='isAdminToggle'>Admin</label>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
        <div className='text-xs opacity-60 mt-2'>Admin-only notes hidden.</div>
      </div>
    );
  }

  return (
    <div className='rounded border p-4 space-y-3'>
      <div className='flex items-center justify-between'>
        <h3 className='font-medium'>Admin Notes</h3>
        <div className='flex items-center gap-3 text-sm'>
          <label className='inline-flex items-center gap-2'>
            <input
              type='checkbox'
              checked={isAdmin}
              onChange={e => setIsAdmin(e.target.checked)}
            />
            <span>Admin</span>
          </label>
          <input
            className='border rounded px-2 py-1'
            value={adminId}
            onChange={e => setAdminId(e.target.value)}
            placeholder='Admin ID'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <textarea
          className='w-full border rounded-md px-3 py-2'
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          disabled={!text.trim() || adding}
          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'
        >
          {adding ? 'Adding…' : 'Add Note'}
        </button>
      </div>

      <div className='border-t pt-3'>
        <div className='text-sm opacity-70 mb-2'>
          Notes are private, time-stamped, and include author ID.
        </div>
        {loading ? (
          <div className='text-sm'>Loading…</div>
        ) : notes.length === 0 ? (
          <div className='text-sm opacity-70'>No notes yet.</div>
        ) : (
          <ul className='space-y-2'>
            {notes.map(n => (
              <li key={n.id} className='rounded border p-2 text-sm'>
                <div className='opacity-60 text-xs mb-1'>
                  {new Date(n.createdAt).toLocaleString()} • {n.authorId}
                </div>                <div>{n.text}</div>
          <ul className="space-y-2">
            {notes.map((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">
                <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                <div>{n.text}</div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
