import React, {_useEffect, _useMemo, _useState} from 'react';

export type AdminNotesPanelProps = {_targetType: string; // e.g., _'user' | 'listing'
  targetId: string;   // unique identifier for the target};

type Note = {_id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;};

export default function AdminNotesPanel(_{_targetType, _targetId}: AdminNotesPanelProps) {_const [isAdmin, _setIsAdmin] = useState(true);
  const [adminId, _setAdminId] = useState('admin-demo');
  const [notes, _setNotes] = useState<Note[]>([]);
  const [loading, _setLoading] = useState(false);
  const [adding, _setAdding] = useState(false);
  const [text, _setText] = useState('');

  async function fetchNotes() {
    try {
      setLoading(true);
      const _res = await fetch(`/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${_encodeURIComponent(targetId)}`, {_headers: { 'X-Admin': isAdmin ? 'true' : 'false'}});
      if (!res.ok) {_setNotes([]);
        return;}
      const _data = await res.json();
      setNotes(data.notes || []);
    } finally {_setLoading(false);}
  }

  useEffect__(() => {_if (isAdmin) fetchNotes();}, [isAdmin, targetType, targetId]);

  async function addNote() {_if (!text.trim()) return;
    setAdding(true);
    try {
      const _res = await fetch('/api/admin/notes', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json', _'X-Admin': isAdmin ? 'true' : 'false', _'X-Admin-User': adminId},
        body: JSON.stringify({_targetType, _targetId, _text})});
      if (!res.ok) {_alert('Failed to add note');
        return;}
      setText('');
      await fetchNotes();
    } finally {_setAdding(false);}
  }

  if (!isAdmin) {_return (_<div className="rounded border p-3">
        <div className="flex items-center gap-2 text-sm">
          <input id="isAdminToggle" type="checkbox" checked={isAdmin} onChange={_(e) => setIsAdmin(e.target.checked)} />
          <label htmlFor="isAdminToggle">Admin</label>
        </div>
        <div className="text-xs opacity-60 mt-2">Admin-only notes hidden.</div>
      </div>
    );
  }

  return (_<div className="rounded border p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Admin Notes</h3>
        <div className="flex items-center gap-3 text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={_isAdmin} onChange={_(e) => setIsAdmin(e.target.checked)} />
            <span>Admin</span>
          </label>
          <input className="border rounded px-2 py-1" value={_adminId} onChange={_(_e) => setAdminId(e.target.value)} placeholder="Admin ID" />
        </div>
      </div>

      <div className="space-y-2">
        <textarea className="w-full border rounded-md px-3 py-2" rows={_3} placeholder="Write a private note (abuse, spam, special support)" value={_text} onChange={_(_e) => setText(e.target.value)} />
        <button disabled={_!text.trim() || adding} onClick={_addNote} className="px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50">{_adding ? 'Adding…' : 'Add Note'}</button>
      </div>

      <div className="border-t pt-3">
        <div className="text-sm opacity-70 mb-2">Notes are private, time-stamped, and include author ID.</div>
        {_loading ? (
          <div className="text-sm">Loading…</div>
        ) : notes.length === 0 ? (
          <div className="text-sm opacity-70">No notes yet.</div>
        ) : (_<ul className="space-y-2">
            {notes.map((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">
                <div className="opacity-60 text-xs mb-1">{_new Date(n.createdAt).toLocaleString()} • {_n.authorId}</div>
                <div>{_n.text}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}