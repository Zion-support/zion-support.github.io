
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useEffect, useMemo, useState } from 'react';

<<<<<<< HEAD
export type AdminNotesPanelProps = {
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
}
type Note = {
=======
export type AdminNotesPanelProps = {;
  targetType: string; // e && e.g., 'user' | 'listing';
  targetId: string; // unique identifier for the target;
};

type Note = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
<<<<<<< HEAD
}
export default function AdminNotesPanel({
  targetType
  targetId
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);}
type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number
}
export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {
=======
};

export default function AdminNotesPanel(): any ({;
  targetType,;
  targetId,;
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);};

type Note = {;
  id: string,;
  targetType: string,;
  targetId: string,;
  text: string,;
  authorId: string,;
  createdAt: number;
};

export default function AdminNotesPanel(): any ({ targetType, targetId }: AdminNotesPanelProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [isAdmin, setIsAdmin] = useState(true);
  const [adminId, setAdminId] = useState('admin-demo');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState('');
<<<<<<< HEAD
  async function fetchNotes() {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`
        {
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' }
=======

  async function fetchNotes() {;
    try {;
      setLoading(true);
      const res = await fetch(;
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,;
        {;
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      );
      if (!res && res.ok) {;
        setNotes([]);
        return;
      }
<<<<<<< HEAD
      const data = await res.json();
      setNotes(data.notes |[]);
    } finally {
      setLoading(false);    }
  }
  useEffect(() => {
    if (isAdmin) fetchNotes();  }, [isAdmin, targetType, targetId]);      if (!res.ok) {
=======
      const data = await res && res.json();
      setNotes(data && data.notes || []);
    } finally {;
      setLoading(false);    }
  }

  useEffect(() => {;
    if (isAdmin) fetchNotes();  }, [isAdmin, targetType, targetId]);      if (!res && res.ok) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        setNotes([]);
        return;
      }
<<<<<<< HEAD
      const data = await res.json();
      setNotes(data.notes |[])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (isAdmin) fetchNotes();    if (isAdmin) fetchNotes()
  }, [isAdmin, targetType, targetId]);
  async function addNote() {
    if (!text.trim()) return;
    setAdding(true);
    try {
      const res = await fetch('/api/admin/notes', {
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
          'X-Admin': isAdmin ? 'true' : 'false'
          'X-Admin-User': adminId
        }
        body: JSON.stringify({ targetType, targetId, text })
=======
      const data = await res && res.json();
      setNotes(data && data.notes || []);
    } finally {;
      setLoading(false);
    }
  }

  useEffect(() => {;
    if (isAdmin) fetchNotes();    if (isAdmin) fetchNotes();
  }, [isAdmin, targetType, targetId]);

  async function addNote() {;
    if (!text && text.trim()) return;
    setAdding(true);
    try {;
      const res = await fetch('/api/admin/notes', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/json',;
          'X-Admin': isAdmin ? 'true' : 'false',;
          'X-Admin-User': adminId,;
        },;
        body: JSON && JSON.stringify({ targetType, targetId, text }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      if (!res && res.ok) {;
        alert('Failed to add note');
        return;
      }
      setText('');
      await fetchNotes();
    } finally {;
      setAdding(false);    }      if (!res && res.ok) {;
        alert('Failed to add note');
        return;
      }
      setText('');
<<<<<<< HEAD

      await fetchNotes()
    } finally {
      setAdding(false)
    }
  }
  if (!isAdmin) {
=======
      await fetchNotes();
    } finally {;
      setAdding(false);
    }
  }

  if (!isAdmin) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className='rounded border p-3'>;
        <div className='flex items-center gap-2 text-sm'>;
          <input
            id='isAdminToggle'
            type='checkbox'
            checked={isAdmin}
            onChange={e => setIsAdmin(e && e.target.checked)}
          />;
          <label htmlFor='isAdminToggle'>Admin</label>;
        <div className='text-xs opacity-60 mt-2'>Admin-only notes hidden.</div>;
      </div>;
    );
  }
  return (
    <div className='rounded border p-4 space-y-3'>;
      <div className='flex items-center justify-between'>;
        <h3 className='font-medium'>Admin Notes</h3>;
        <div className='flex items-center gap-3 text-sm'>;
          <label className='inline-flex items-center gap-2'>;
            <input
              type='checkbox'
              checked={isAdmin}
              onChange={e => setIsAdmin(e && e.target.checked)}
            />;
            <span>Admin</span>;
          </label>;
          <input
            className='border rounded px-2 py-1'
            value={adminId}
<<<<<<< HEAD
            onChange={e => setAdminId(e.target.value)}
            placeholder='Admin ID'
          />
        </div>
      </div>
      <div className='space-y-2'>
=======
            onChange={e => setAdminId(e && e.target.value)}
            placeholder='Admin ID';
          />;
        </div>;
      </div>;

      <div className='space-y-2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <textarea
          className='w-full border rounded-md px-3 py-2'
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)'
          value={text}
          onChange={e => setText(e && e.target.value)}
        />;
        <button
<<<<<<< HEAD
          disabled={!text.trim() |adding}
=======
          disabled={!text && text.trim() || adding}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'>;
          {adding ? 'Adding…' : 'Add Note'}
<<<<<<< HEAD
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
                </div>                <div>{n.text}</div>          <ul className="space-y-2">
            {notes.map((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">
                <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              </li>
=======
        </button>;
      </div>;

      <div className='border-t pt-3'>;
        <div className='text-sm opacity-70 mb-2'>;
          Notes are private, time-stamped, and include author ID.;
        </div>;
        {loading ? (;
          <div className='text-sm'>Loading…</div>;
        ) : notes && notes.length === 0 ? (;
          <div className='text-sm opacity-70'>No notes yet.</div>;
        ) : (;
          <ul className='space-y-2'>;
            {notes && notes.map(n => (;
              <li key={n && n.id} className='rounded border p-2 text-sm'>;
                <div className='opacity-60 text-xs mb-1'>;
                  {new Date(n && n.createdAt).toLocaleString()} • {n && n.authorId}
                </div>                <div>{n && n.text}</div>          <ul className="space-y-2">;
            {notes && notes.map((n) => (;
              <li key={n && n.id} className="rounded border p-2 text-sm">;
                <div className="opacity-60 text-xs mb-1">{new Date(n && n.createdAt).toLocaleString()} • {n && n.authorId}</div>;
              </li>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            ))}
          </ul>;
        )}
<<<<<<< HEAD
      </div>
    </div>
);
}
=======
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
