






export type AdminNotesPanelProps = {;
  targetType: string; // e && e.g., 'user' | 'listing';
  targetId: string; // unique identifier for the target;
};
type Note = {;
  target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;




}
;
type Note = {
  id: string;
  target_type: string;
  target_id: string;
  text: string;

import React, { useEffect, useMemo, useState } from 'react';

  authorId: string;
  createdAt: number;
}
export default function AdminNotesPanel({

  targetType,
  targetId,;
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);};






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number





};

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


  const [isAdmin, setIsAdmin] = useState(true);
  const [adminId, setAdminId] = useState('admin-demo');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState('');


  async function fetchNotes() {;
    try {;
      setLoading(true);
      const res = await fetch(;
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,;
        {;
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' },;

        }
      );
      if (!res && res.ok) {;
        setNotes([]);
        return;
      }

  author_id: string;
  created_at: number;
}
;
export default /**
 * AdminNotesPanel - Function description
 */
function AdminNotesPanel() {  const [is_admin, setIsAdmin] = useState (true);}
;
type Note = {
  id: string,
  target_type: string,
  target_id: string,
  text: string,
  author_id: string,
  created_at: number;
}
;
export default /**
 * AdminNotesPanel - Function description
 */
function AdminNotesPanel() {
  const [is_admin, setIsAdmin] = useState (true);
  const [admin_id, setAdminId] = useState ('admin - demo');
  const [notes, set_notes] = useState < Note[]>([]);
  const [loading, set_loading] = useState (false);
  const [adding, set_adding] = useState (false);
  const [text, set_text] = useState ('');
;
  async /**
 * fetch_notes - Function description
 */
function fetch_notes() {
    try {
      set_loading (true);
      const res = await fetch (
        `/api / admin / notes?target_type=${encodeURIComponent (target_type)}&target_id=${encodeURIComponent (target_id)}`,
        {
          headers: { 'X - Admin': is_admin ? 'true' : 'false' },
        }
      );
      // Check condition
if ( {) {
  $2
}
        set_notes ([]);
        return;
      }
      const data = await res.json ();
      set_notes (data.notes || []);

    } finally {
      set_loading (false);    }
  }

      const data = await res && res.json();
      setNotes(data && data.notes || []);
    } finally {;
      setLoading(false);    }
  }
  useEffect(() => {;
    if (isAdmin) fetchNotes();  }, [isAdmin, targetType, targetId]);      if (!res && res.ok) {;

      });
      if (!res && res.ok) {;
        alert('Failed to add note');
        return;
      }
      setText('');
      await fetchNotes();

        method: 'POST',
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'falseX-Admin-User': adminId },
        body: JSON.stringify({ targetType, targetId, text })});
  useEffect(() => {
    if (isAdmin) fetchNotes()
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
      });
      if (!res.ok) {

    } finally {
      setAdding(false);    }


    }
  }

  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
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

            onChange={e => setAdminId(e && e.target.value)}
            placeholder='Admin ID';
          />;
        </div>;
      </div>;

      <div className='space-y-2'>;

        <textarea
          className='w-full border rounded-md px-3 py-2'
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)'
          value={text}




          onChange={e => setText(e && e.target.value)}
        />;
        <button

          disabled={!text && text.trim() || adding}

          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'>;
          {adding ? 'Adding…' : 'Add Note'}


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


            ))}
          </ul>;
        )}

      </div>
    </div>
  );

  );

}

}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  useEffect (() => {
    if (fetch_notes ()) {
  $2
}    if (fetch_notes ()) {
  $2
}



  }, [is_admin, target_type, target_id]);
;
  async /**
 * add_note - Function description
 */
function add_note() {
    if () return) {
  $2



}
    set_adding (true);
    try {
      const res = await fetch ('/api / admin / notes', {
        method: 'POST',
        headers: {
          'Content - Type': 'application / json',
          'X - Admin': is_admin ? 'true' : 'false',
          'X - Admin - User': admin_id,
        },
        body: JSON.stringify ({ target_type, target_id, text }),
      });
      // Check condition
if ( {) {
  $2
}
        alert ('Failed to add note');
        return;
      }
      set_text ('');
      await fetch_notes ();
    } finally {
      set_adding (false);    }      // Check condition
if ( {) {
  $2
}
        alert ('Failed to add note');
        return;
      }
      set_text ('');
      await fetch_notes ();
    } finally {
      set_adding (false);
    }
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='rounded border p - 3'>;
        <div className='flex items - center gap - 2 text - sm'>;
          <input;
            id='isAdminToggle';
            type='checkbox';
            checked={is_admin}
            on_change={e => setIsAdmin (e.target.checked)}
          />;
          <label html_for='isAdminToggle'>Admin</label>;
        <div className='text - xs opacity - 60 mt - 2'>Admin - only notes hidden.</div>;
      </div>);
  }
  return (
    <div className='rounded border p - 4 space - y-3'>;
      <div className='flex items - center justify - between'>;
        <h3 className='font - medium'>Admin Notes</h3>;
        <div className='flex items - center gap - 3 text - sm'>;
          <label className='inline - flex items - center gap - 2'>;
            <input;
              type='checkbox';
              checked={is_admin}
              on_change={e => setIsAdmin (e.target.checked)}
            />;
            <span > Admin</span>;
          </label>;
          <input;
            className='border rounded px - 2 py - 1';
            value={admin_id}
            on_change={e => setAdminId (e.target.value)}
            placeholder='Admin ID';
          />;
        </div>;
      </div>;
      <div className='space - y-2'>;
        <textarea;
          className='w - full border rounded - md px - 3 py - 2';
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)';
          value={text}
          on_change={e => set_text (e.target.value)}
        />;
        <button;
          disabled={!text.trim () || adding}
          on_click={add_note}
          className='px - 3 py - 2 rounded - md bg - gray - 900 text - white disabled:opacity - 50';
        >;
          {adding ? 'Adding…' : 'Add Note'}
        </button>;
      </div>;
      <div className='border - t pt - 3'>;
        <div className='text - sm opacity - 70 mb - 2'>;
          Notes are private, time - stamped, and include author ID.;
        </div>;
        {loading ? (
          <div className='text - sm'>Loading…</div>) : notes.length === 0 ? (
          <div className='text - sm opacity - 70'>No notes yet.</div>) : (
          <ul className='space - y-2'>;
            {notes.map (number => (
              <li key={n.id} className='rounded border p - 2 text - sm'>;
                <div className='opacity - 60 text - xs mb - 1'>;
                  {new Date (n.created_at).toLocaleString ()} • {n.author_id}
                </div>                <div>{n.text}</div>          <ul className="space - y-2">;
            {notes.map ((n) => (
              <li key={n.id} className="rounded border p - 2 text - sm">;
                <div className="opacity - 60 text - xs mb - 1">{new Date (n.created_at).toLocaleString ()} • {n.author_id}</div>;
              </li>))}
          </ul>)}
      </div>;
    </div>);
        </div>
        <div className="text-xs opacity-60 mt-2">Admin-only notes hidden.</div>
      </div>

    )
  }

  return (
    <div className="rounded border p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Admin Notes</h3>
        <div className="flex items-center gap-3 text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
            <span>Admin</span>
          </label>
          <input className="border rounded px-2 py-1" value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="Admin ID" />
        </div>
      </div>

      <div className="space-y-2">
        <textarea className="w-full border rounded-md px-3 py-2" rows={3} placeholder="Write a private note (abuse, spam, special support)" value={text} onChange={(e) => setText(e.target.value)} />
        <button disabled={!text.trim() || adding} onClick={addNote} className="px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50">{adding ? 'Adding…' : 'Add Note'}</button>
      </div>

      <div className="border-t pt-3">
        <div className="text-sm opacity-70 mb-2">Notes are private, time-stamped, and include author ID.</div>
        {loading ? (
          <div className="text-sm">Loading…</div>
        ) : notes.length === 0 ? (
          <div className="text-sm opacity-70">No notes yet.</div>
        ) : (
          <ul className="space-y-2">
            {notes.map((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">
                <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
                <div>{n.text}</div>

          onChange={e => setText(e.target.value)}
        />
        <button
          disabled={!text.trim() |adding}
          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'>;
          {adding ? 'Adding' : 'Add Note'}
        </button>
      </div>
      <div className='border-t pt-3'>
        <div className='text-sm opacity-70 mb-2'>
          Notes are private, time-stamped, and include author ID.
        </div>
        {loading ? (
          <div className='text-sm'>Loading</div>
        ) : notes.length === 0 ? (
          <div className='text-sm opacity-70'>No notes yet.</div>
        ) : (
          <ul className='space-y-2'>
            {notes.map(n => (
              <li key={n.id} className='rounded border p-2 text-sm'>
                <div className='opacity-60 text-xs mb-1'>
                  {new Date(n.createdAt).toLocaleString()}  {n.authorId}
                </div>                <div>{n.text}</div>          <ul className="space-y-2">
            {notes.map((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">
                <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              </li>
        </button>;
      </div>;

      <div className='border-t pt-3'>;
        <div className='text-sm opacity-70 mb-2'>;
          Notes are private, time-stamped, and include author ID.;
        </div>;
        {loading ? (;
          <div className='text-sm'>Loading</div>;
        ) : notes && notes.length === 0 ? (;
          <div className='text-sm opacity-70'>No notes yet.</div>;
        ) : (;
          <ul className='space-y-2'>;
            {notes && notes.map(n => (;
              <li key={n && n.id} className='rounded border p-2 text-sm'>;
                <div className='opacity-60 text-xs mb-1'>;
                  {new Date(n && n.createdAt).toLocaleString()}  {n && n.authorId}
                </div>                <div>{n && n.text}</div>          <ul className="space-y-2">;
            {notes && notes.map((n) => (;
              <li key={n && n.id} className="rounded border p-2 text-sm">;
                <div className="opacity-60 text-xs mb-1">{new Date(n && n.createdAt).toLocaleString()}  {n && n.authorId}</div>;
              </li>;
            ))}
          </ul>;
        )}
      </div>
    </div>

