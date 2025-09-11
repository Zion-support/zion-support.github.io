

export type AdminNotesPanelProps = {
  targetType: string, // e.g., 'user' | 'listing'
  targetId: string,   // unique identifier for the target
};
import React, { useEffect, useMemo, useState } from 'react';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number

};


};

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {;

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {;
}
export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {
};

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isAdmin, setIsAdmin] = useState(true);
  const [adminId, setAdminId] = useState('admin-demo');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState('');
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function fetchNotes() {;
    try {;
      setLoading(true);
      const res = await fetch(;
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,;
        {;
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' },;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        }
      );
      if (!res && res.ok) {;
        setNotes([]);
        return;
      }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

=======
    } finally {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        alert('Failed to add note');
        return;
      }
      setText('');

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }

  if (!isAdmin) {;

    }
  }


      await fetchNotes()
    } finally {
      setAdding(false)
      setAdding(false);    }

    }
  }
==============
      setAdding(false);    }
=======

    }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
            onChange={e => setAdminId(e && e.target.value)}
            placeholder='Admin ID';
          />;
        </div>;
      </div>;

      <div className='space-y-2'>;

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
=======          onChange={e => setText(e.target.value)}
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
}>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
