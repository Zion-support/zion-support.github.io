

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type AdminNotesPanelProps = {;
  targetType: string; // e && e.g., 'user' | 'listing';
  targetId: string; // unique identifier for the target;
};
type Note = {;
  target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;
<<<<<<< HEAD
=======
=======
import React, { useEffect, useMemo, useState } from 'react';
export type AdminNotesPanelProps = {;
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
type Note = {
  id: string;
  target_type: string;
  target_id: string;
  text: string;
<<<<<<< HEAD

export type AdminNotesPanelProps = {
  targetType: string, // e.g., 'user' | 'listing'
  targetId: string,   // unique identifier for the target
};
import React, { useEffect, useMemo, useState } from 'react';


<<<<<<< HEAD
export type AdminNotesPanelProps = {
export type AdminNotesPanelProps = {;
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
}
type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
=======
import React, { useEffect, useMemo, useState } from 'react';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  authorId: string;
  createdAt: number;
}
export default function AdminNotesPanel({
<<<<<<< HEAD
  targetType
  targetId
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  targetType,
  targetId,;
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);};

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number

};


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {;

<<<<<<< HEAD
<<<<<<< HEAD
};

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {;
}
export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {
};

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isAdmin, setIsAdmin] = useState(true);
  const [adminId, setAdminId] = useState('admin-demo');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function fetchNotes() {;
    try {;
      setLoading(true);
      const res = await fetch(;
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,;
        {;
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' },;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      );
      if (!res && res.ok) {;
        setNotes([]);
        return;
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    } finally {
      set_loading (false);    }
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    } finally {
      set_loading (false);    }
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const data = await res && res.json();
      setNotes(data && data.notes || []);
    } finally {;
      setLoading(false);    }
  }
  useEffect(() => {;
    if (isAdmin) fetchNotes();  }, [isAdmin, targetType, targetId]);      if (!res && res.ok) {;
<<<<<<< HEAD
<<<<<<< HEAD
        setNotes([]);
        return;
      }
      const res = await fetch(`/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`, {
        headers: { 'X-Admin': isAdmin ? 'true' : 'false' }}),
      if (!res.ok) {
        setNotes([]);
        return
  useEffect (() => {
    if (fetch_notes ()) {
  $2
}  }, [is_admin, target_type, target_id]);      // Check condition
if ( {) {
  $2
}
        set_notes ([]);
        return;
      }
      const data = await res.json();
      setNotes(data.notes |[])
    } finally {
      set_loading (false);
    }
  }

    } finally {;
      setAdding(false);    }      if (!res && res.ok) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      });
      if (!res && res.ok) {;
        alert('Failed to add note');
        return;
      }
      setText('');
      await fetchNotes();

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        method: 'POST',
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'falseX-Admin-User': adminId },
        body: JSON.stringify({ targetType, targetId, text })});
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'falseX-Admin-User': adminId },
        body: JSON.stringify({ targetType, targetId, text })});
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      });
      if (!res.ok) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    } finally {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        alert('Failed to add note');
        return;
      }
      setText('');

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }

  if (!isAdmin) {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return (


    }
  }


<<<<<<< HEAD

  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
      await fetchNotes();
    } finally {
      setAdding(false);    }      if (!res.ok) {
        alert('Failed to add note');
        return
      }
      setText('');

      await fetchNotes()
    } finally {
      setAdding(false)
      setAdding(false);    }

    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      setAdding(false);    }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <input
            id='isAdminToggle'
            type='checkbox'
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
          />
          <label htmlFor='isAdminToggle'>Admin</label>
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
<<<<<<< HEAD
<<<<<<< HEAD
            onChange={e => setAdminId(e.target.value)}
            placeholder='Admin ID'
          />
        </div>
      </div>
      <div className='space-y-2'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            onChange={e => setAdminId(e && e.target.value)}
            placeholder='Admin ID';
          />;
        </div>;
      </div>;

      <div className='space-y-2'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <textarea
          className='w-full border rounded-md px-3 py-2'
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)'
          value={text}
<<<<<<< HEAD
<<<<<<< HEAD
          disabled={!text && text.trim() || adding}
          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'>;
          {adding ? 'Adding…' : 'Add Note'}
      <div className="rounded border p-3">
        <div className="flex items-center gap-2 text-sm">
          <input id="isAdminToggle" type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <label htmlFor="isAdminToggle" htmlFor="input-Admin">Admin</label>
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
              </li>
=======
<<<<<<< HEAD
          onChange={e => setText(e && e.target.value)}
        />;
        <button

          disabled={!text && text.trim() || adding}

          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'>;
          {adding ? 'Adding…' : 'Add Note'}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
            ))}
          </ul>;
        )}
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
          </ul>;
        )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
    </div>;
  );
=======
      </div>
    </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

      </div>;
    </div>;
  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );

}
<<<<<<< HEAD

}
  );
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                <div>{n.text}</div>
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onChange={e => setText(e.target.value)}
        />
        <button
          disabled={!text.trim() |adding}
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
                </div>                <div>{n.text}</div>          <ul className="space-y-2">
            {notes.map((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">
                <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
);
  );
}
}
  );
}
=======
<<<<<<< HEAD
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
