<<<<<<< HEAD


export type AdminNotesPanelProps = {;
  targetType: string; // e && e.g., 'user' | 'listing';
  targetId: string; // unique identifier for the target
};
type Note = {;
  target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;
import React, { useEffect, useMemo, useState } from 'react';
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
}
;
type Note = {
  id: string;
  target_type: string;
  target_id: string;
  text: string;
  targetType,
  targetId,;
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true)
};

type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number

}
};


=======

;

export type AdminNotesPanelProps = {
  targetType: string; // e.g., user' | 'listing
  targetId: string; // unique identifier for the target
}

type Note = {target_type: string; // e.g., 'user' | 'listing';}
  target_id: string; // unique identifier for the target;}
import React, { useEffect, useMemo, useState } from 'react';

export type AdminNotesPanelProps = any;
export type AdminNotesPanelProps = {
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
}
;

type Note = {


type Note = {;'
  target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;'
import React, { useEffect, useMemo, useState } from 'react';'
  targetType: string; // e.g., 'user' | 'listing'
export type AdminNotesPanelProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  targetId: string; // unique identifier for the target
}
;

type Note = {}
  id: string;
  targetType: string; // e.g., 'user' | 'listing';
export type AdminNotesPanelProps = any;targetId: string; // unique identifier for the target;
}type Note = {id: string;
  targetType: string; // e.g., 'user' | 'listing';
export type AdminNotesPanelProps = any;targetId: string; // unique identifier for the target;
}type Note = {id: string;
  target_type: string;
  target_id: string;
  text: string;targetType,targetId,}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true)}type Note = {id: string;
  targetType: string;
  targetId: string;
  text: string;

  targetType,
  targetId,;
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);};
  id: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba


  target_type: string;}
  target_id: string;}
  text: string;targetType,targetId}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true)}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

type Note = {id: string;
  targetType: string;
  targetId: string;
  text: string;

<<<<<<< HEAD


=======



  authorId: string;}
  createdAt: number;}
}}
export default function AdminNotesPanel() {authorId: string;}
  createdAt: number;}
}
export default function AdminNotesPanel({
  targetType,
  targetId,
}: AdminNotesPanelProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [isAdmin, setIsAdmin] = useState(true);
  const [adminId, setAdminId] = useState('admin-demo');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState('');
<<<<<<< HEAD

=======

  async function fetchNotes() {
    try {
      setLoading(true);
const res = await fetch(
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,
        {
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' }
export default function AdminNotesPanel() {const [isAdmin, setIsAdmin] = useState(true)const [adminId, setAdminId] = useState('admin-demo')const [notes, setNotes] = useState<Note[]>([])const [loading, setLoading] = useState(false)const [adding, setAdding] = useState(false)const [text, setText]  = useState('')async function fetchNotes() {try {setLoading(true)const res = await fetch(`/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,{headers: { 'X-Admin': isAdmin ? 'true' : 'false' }}
      )if (!res && res.ok) {setNotes([])return;
      }method: 'POST',headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'falseX-Admin-User': adminId },body: JSON.stringify({ targetType, targetId, text })})const data = await res.json()setNotes(data.notes |[])} finally {setLoading(false)}
  }useEffect(() => {if (isAdmin) fetchNotes()}, [isAdmin, targetType, targetId])async function addNote() {if (!text.trim()) return;
    setAdding(true)try {const res = await fetch('/api/admin/notes', {method: 'POST';
        headers: {'Content-Type': 'application/json';
          'X-Admin': isAdmin ? 'true' : 'false';
          'X-Admin-User': adminId;

export default function AdminNotesPanel() {authorId: string;}
  createdAt: number;}
}

}
export default function AdminNotesPanel({
  targetType
  targetId
}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true);}
type Note = {
  id: string
  target_type: string;}
  target_id: string;}
  text: string;targetType,targetId}: AdminNotesPanelProps) {  const [isAdmin, setIsAdmin] = useState(true)}

type Note = {id: string
  targetType: string
  targetId: string
  text: string
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function AdminNotesPanel({
  targetType}
  targetId}
}: AdminNotesPanelProps) {
  const [isAdmin, setIsAdmin] = useState(true);

const [adminId, setAdminId] = useState('admin-demo');

const [notes, setNotes] = useState<Note[]    />([]);

const [loading, setLoading] = useState(false);

const [adding, setAdding] = useState(false);

const [text, setText] = useState('');

  async function fetchNotes() {
    try {
      setLoading(true);
}
const res = await fetch(}
        `/api/admin/notes?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`,
        {}
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' }

       
}
        body: JSON.stringify({ targetType, targetId, text })} finally {setAdding(false)}      if (!res.ok) {method: 'POST'}
  headers: {'Content-Type': 'application/json','X-Admin': isAdmin ? 'true' : 'false','X-Admin-User': adminId},body: JSON.stringify({ targetType, targetId, text })})if (!res.ok) {alert('Failed to add note';}
  return;}
      }

<<<<<<< HEAD
        }
      );
      if (!res && res.ok) {
        setNotes([]);
        return;
      }
=======
'
        method: 'POST','
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'falseX-Admin-User': adminId },
        body: JSON.stringify({ targetType, targetId, text })});
>>>>>>> origin/cursor/delete-old-data-records-6bba



        method: POST','
        headers: { Content-Type: 'application/jsonX-Admin': isAdmin ? true : 'falseX-Admin-User': adminId },
        body: JSON.stringify({ targetType, targetId, text })});


  async function addNote() {
    if (!text.trim()) return,
    setAdding($2);
    try {
      const res = await fetch('/api/admin/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'falseX-Admin-User': adminId },
        body: JSON.stringify({ targetType, targetId, text })}),
      if (!res.ok) {
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
          'X-Admin': isAdmin ? 'true' : 'false'
          'X-Admin-User': adminId
        }
        body: JSON.stringify({ targetType, targetId, text })
    } finally {
      setAdding(false);    }      if (!res.ok) {

<<<<<<< HEAD
=======
const data = await res.json();
      setNotes(data.notes |[]);
    } finally {}
      setLoading(false);}
    }
  }
  useEffect(() => {
}
if (isAdmin) fetchNotes();}
  }, [isAdmin, targetType, targetId]);
  async function addNote() {
    if (!text.trim()) return;
    setAdding(true);
    try {

        }
        body: JSON.stringify({ targetType, targetId, text })
    } finally {
      setAdding(false);    }      if (!res.ok) {
        method: 'POST',
headers: {
          'Content-Type': 'application/json',
          'X-Admin': isAdmin ? 'true' : 'false',
          'X-Admin-User': adminId,
        },
        body: JSON.stringify({ targetType, targetId, text })
      });
      if (!res.ok) {
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/delete-old-data-records-6bba
        alert('Failed to add note');
        return;
      }'
      setText();
      setAdding(false);    }

    }
  }
  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
          <input'
            id='isAdminToggle''
origin/cursor/automate-test-improve-and-merge-code-2533
        alert('Failed to add note');}
        return;}
      }
      setText('');


      await fetchNotes();
    } finally {
      setAdding(false);}
      await fetchNotes()}
    } finally {}
      setAdding(false)}

    }
  }


    }
  }

  if (!isAdmin) {
    return (
        }
        body: JSON.stringify({ targetType, targetId, text })} finally {setAdding(false)}      if (!res.ok) {method: 'POST',headers: {'Content-Type': 'application/json','X-Admin': isAdmin ? 'true' : 'false','X-Admin-User': adminId,},body: JSON.stringify({ targetType, targetId, text }),})if (!res.ok) {alert('Failed to add note')return;
      }
      setText('')setAdding(false)}await fetchNotes()} finally {setAdding(false)await fetchNotes()} finally {setAdding(false)}
  }}
  }if (!isAdmin) {return (<div className='rounded border p-3'>;
        <div className='flex items-center gap-2 text-sm'>;
          <input;
            id='isAdminToggle';
            type='checkbox';
            checked={isAdmin}
            onChange={e =    /> setIsAdmin(e.target.checked)}
          />;
          <label htmlFor='isAdminToggle'    />Admin</label>;
        <div className='text-xs opacity-60 mt-2'    />Admin-only notes hidden.</div>;
      </div>;
    )}
  return (<div className='rounded border p-4 space-y-3'    />;
      <div className='flex items-center justify-between'    />;
        <h3 className='font-medium'    />Admin Notes</h3>;
        <div className='flex items-center gap-3 text-sm'    />;
          <label className='inline-flex items-center gap-2'    />;
            <input;
              type='checkbox';
              checked={isAdmin}
              onChange={e =    /> setIsAdmin(e.target.checked)}
            />;
            <span    />Admin</span>;
          </label>;
          <input;
            className='border rounded px-2 py-1';
            value={adminId}
        <textarea;
          className='w-full border rounded-md px-3 py-2';
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)';
          value={text}</div    />;
    </div>;
  ))}}
  )}
  useEffect (() => {if (fetch_notes ()) {$2;}
}    if (fetch_notes ()) {$2;}
}
}
    set_adding (true)try {const res = await fetch ('/api / admin / notes', {method: 'POST'}
  headers: {'Content - Type': 'application / json','X - Admin': is_admin ? 'true' : 'false','X - Admin - User': admin_id},body: JSON.stringify ({ target_type, target_id, text })})// Check condition;
if ( {) {$2;}
}
        alert ('Failed to add note')return;
      }
      set_text ('')await fetch_notes ()} finally {set_adding (false)}      // Check condition;
if ( {) {$2;}
}
        alert ('Failed to add note')return;
      }
      set_text ('')await fetch_notes ()} finally {set_adding (false)}
      <div className="rounded border p-3">
        <div className="flex items-center gap-2 text-sm">
          <input id="isAdminToggle" type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <label htmlFor="isAdminToggle">Admin</label>
        </div>
        <div className="text-xs opacity-60 mt-2">Admin-only notes hidden.</div>
<div className='rounded border p-3'>
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>

          <input'
            id='isAdminToggle''
            type='checkbox'
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
          />'
          <label htmlFor='isAdminToggle'>Admin</label>'
        <div className='text-xs opacity-60 mt-2'>Admin-only notes hidden.</div>
      </div>
    )
  }
  return ('
    <div className='rounded border p-4 space-y-3'>'
      <div className='flex items-center justify-between'>'
        <h3 className='font-medium'>Admin Notes</h3>'
        <div className='flex items-center gap-3 text-sm'>'
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
            ))}
          </ul>
        )}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
  target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;
}
origin/cursor/automate-test-improve-and-merge-code-2533
      </div>;
    </div>;
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;
}type Note = {id: string;
  target_type: string;
  target_id: string;
  text: string;
type Note = {id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
}
export default function AdminNotesPanel() {}export default function AdminNotesPanel() {const [isAdmin, setIsAdmin] = useState(true)const [adminId, setAdminId] = useState('admin-demo')const [notes, setNotes] = useState<Note[]>([])const [loading, setLoading] = useState(false)const [adding, setAdding] = useState(false)const [text, setText] = useState('')}
      )if (!res && res.ok) {setNotes([])return;
      }
    } finally {set_loading (false)}
  }
        setNotes([])return;
      }
      }
      const data = await res.json ()set_notes (data.notes || [])} finally {set_loading (false)}
  }
  }, [isAdmin, targetType, targetId])async function addNote() {if (!text.trim()) return;
    setAdding(true)try {const res = await fetch('/api/admin/notes', {const data = await res && res.json()setNotes(data && data.notes || [])} finally {setLoading(false)}
  }useEffect(() => {if (isAdmin) fetchNotes()if (isAdmin) fetchNotes()}, [isAdmin, targetType, targetId])async function addNote() {if (!text && text.trim()) return;
    setAdding(true)try {const res = await fetch('/api/admin/notes', {method: 'POST',headers: {'Content-Type': 'application/json','X-Admin': isAdmin ? 'true' : 'false','X-Admin-User': adminId,},body: JSON && JSON.stringify({ targetType, targetId, text }),})if (!res && res.ok) {alert('Failed to add note')return;
      }
      setText('')await fetchNotes()} finally {setAdding(false)}      if (!res && res.ok) {alert('Failed to add note')return;
      }
      setText('')}
  }if (!isAdmin) {return (<div className='rounded border p-3'>;
        <div className='flex items-center gap-2 text-sm'>;
          <input;
            id='isAdminToggle';
            type='checkbox';
            checked={isAdmin}
            onChange={e => setIsAdmin(e && e.target.checked)}
          />;
          <label htmlFor='isAdminToggle'>Admin</label>;
        <div className='text-xs opacity-60 mt-2'>Admin-only notes hidden.</div>;
      </div>;
    )}
  return (<div className='rounded border p-4 space-y-3'>;
      <div className='flex items-center justify-between'>;
        <h3 className='font-medium'>Admin Notes</h3>;
        <div className='flex items-center gap-3 text-sm'>;
          <label className='inline-flex items-center gap-2'>;
            <input;
              type='checkbox';
              checked={isAdmin}
              onChange={e => setIsAdmin(e && e.target.checked)}
            />;
            <span>Admin</span>;
          </label>;
          <input;
            className='border rounded px-2 py-1';
            value={adminId}
        <textarea;
          className='w-full border rounded-md px-3 py-2';
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)';
          value={text}
          onChange={e => setText(e && e.target.value)}
        />;
        <button;
          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'>;
          {adding ? 'Adding…' : 'Add Note'}
              </li>;
        </button>;
      </div>;<div className='border-t pt-3'>;
        <div className='text-sm opacity-70 mb-2'>;
          Notes are private, time-stamped, and include author ID.;
        </div>;
        {loading ? (<div className='text-sm'>Loading…</div>;
        ) : notes && notes.length === 0 ? (<div className='text-sm opacity-70'>No notes yet.</div>;
        ) : (<ul className='space-y-2'>;
            {notes && notes.map(n => (<li key={n && n.id} className='rounded border p-2 text-sm'>;
                <div className='opacity-60 text-xs mb-1'>;
                  {new Date(n && n.createdAt).toLocaleString()} • {n && n.authorId}
                </div>                <div>{n && n.text}</div>          <ul className="space-y-2">;
            {notes && notes.map((n) => (<li key={n && n.id} className="rounded border p-2 text-sm">;
                <div className="opacity-60 text-xs mb-1">{new Date(n && n.createdAt).toLocaleString()} • {n && n.authorId}</div>;
              </li>;
            ))}
          </ul>;
        )}
  )}
  useEffect (() => {if (fetch_notes ()) {$2;
}    if (fetch_notes ()) {$2;
}
  }, [is_admin, target_type, target_id])async /**;
 * add_note - Function description;
 */;
function add_note() {if () return) {$2;
}
    set_adding (true)try {const res = await fetch ('/api / admin / notes', {method: 'POST',headers: {'Content - Type': 'application / json','X - Admin': is_admin ? 'true' : 'false','X - Admin - User': admin_id,},body: JSON.stringify ({ target_type, target_id, text }),})// Check condition;
if ( {) {$2;
}
        alert ('Failed to add note')return;
      }
      set_text ('')await fetch_notes ()} finally {set_adding (false)}      // Check condition;
if ( {) {$2;
}
        alert ('Failed to add note')return;
      }
      set_text ('')await fetch_notes ()} finally {set_adding (false)}
  }
  // Check condition;
if ( {) {$2;}
}
    return (<div className='rounded border p - 3'    />;
        <div className='flex items - center gap - 2 text - sm'    />;
          <input;
            id='isAdminToggle';'
            type='checkbox';'
            checked={is_admin}
            on_change={e => { return setIsAdmin (e.target.checked)}
          />; }
          <label html_for='isAdminToggle'>Admin</label>;'
        <div className='text - xs opacity - 60 mt - 2'>Admin - only notes hidden.</div>'
    </div>
  );
}
  return (<div className='rounded border p - 4 space - y-3'>;'
      <div className='flex items - center justify - between'>;'
        <h3 className='font - medium'>Admin Notes</h3>;'
        <div className='flex items - center gap - 3 text - sm'>;'
          <label className='inline - flex items - center gap - 2'>;'
            <input;
              type='checkbox';'
              checked={is_admin}
              on_change={e => { return setIsAdmin (e.target.checked)}
            />; }
            <span > Admin</span>;
          </label>;
          <input;
            className='border rounded px - 2 py - 1';'
            value={admin_id}
            on_change={e => { return setAdminId (e.target.value)}
            placeholder='Admin ID'; }'
          />;
        </div>;
      </div>;
      <div className='space - y-2'>;'
        <textarea;
          className='w - full border rounded - md px - 3 py - 2';'
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)';'
          value={text}
          on_change={e => { return set_text (e.target.value)}
        />; }
        <button;
          disabled={!text.trim () || adding}
          on_click={add_note}
          className='px - 3 py - 2 rounded - md bg - gray - 900 text - white 'disabled': opacity - 50'>'

          {adding ? 'Adding…' : 'Add Note,'
}
        </button>;
      </div>;
      <div className='border - t pt - 3'>;'
        <div className='text - sm opacity - 70 mb - 2'>;'
          Notes are private, time - stamped, and include author ID.;
        </div>;
        {loading ? (<div className='text - sm'>Loading…</div>) : notes.length === 0 ? (<div className='text - sm opacity - 70'>No notes yet.</div>) : (<ul className='space - y-2'>;'
            {notes.map (number => (<li key={n.id} className='rounded border p - 2 text - sm'>;'
                <div className='opacity - 60 text - xs mb - 1'>;'
                  {new Date (n.created_at).toLocaleString ()} • {n.author_id}
                </div>                <div>{n.text}</div>          <ul className='space - y-2'>;'
            {notes.map ((n) => (<li key={n.id} className='rounded border p - 2 text - sm'>;'
                <div className='opacity - 60 text - xs mb - 1'>{new Date (n.created_at).toLocaleString ()} • {n.author_id}</div>;'
              </li>))}
          </ul>)}
      </div>;
    </div>);
}
    </div>)})}
      </div>
    </div>
  )
}

      await fetchNotes();
    } finally {
      setAdding(false);    }      if (!res.ok) {
        alert('Failed to add note');
        return
      }
      setText('');
>>>>>>> origin/cursor/delete-old-data-records-6bba

      await fetchNotes()
    } finally {
      setAdding(false)

origin/cursor/automate-test-improve-and-merge-code-2533

    }
  }

<<<<<<< HEAD



=======
  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <label className='inline-flex items-center gap-2'>
            <input
              type=checkbox'
              checked={isAdmin}
              onChange={e => setIsAdmin(e.target.checked)}
            />
            <span>Admin</span>
          </label>
          <input'
            className=border rounded px-2 py-1
            value={adminId}

<<<<<<< HEAD

        <textarea'

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          className='w-full border rounded-md px-3 py-2'
          rows={3}
          placeholder=Write a private note (abuse, spam, special support)'
          value={text}

<<<<<<< HEAD
=======
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'
        >'
          {adding ? 'Adding…' : 'Add Note'}
        </button>
      </div>'
      <div className='border-t pt-3'>'
        <div className='text-sm opacity-70 mb-2'>
          Notes are private, time-stamped, and include author ID.
        </div>
        {loading ? ('
          <div className='text-sm'>Loading…</div>
        ) : notes.length === 0 ? ('
          <div className='text-sm opacity-70'>No notes yet.</div>
        ) : ('
          <ul className='space-y-2'>
            {notes.map(n => ('
              <li key={n.id} className='rounded border p-2 text-sm'>'
                <div className='opacity-60 text-xs mb-1'>
>>>>>>> origin/cursor/delete-old-data-records-6bba


          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50
        >
          {adding ? 'Adding…' : Add Note}
        </button>
      </div>'
      <div className='border-t pt-3>
        <div className='text-sm opacity-70 mb-2'>
          Notes are private, time-stamped, and include author ID.
        </div>
        {loading ? (
          <div className=text-sm'>Loading…</div>
        ) : notes.length === 0 ? ('
          <div className=text-sm opacity-70>No notes yet.</div>
        ) : ('
          <ul className='space-y-2>
            {notes.map(n => (
              <li key={n.id} className='rounded border p-2 text-sm'>
                <div className=opacity-60 text-xs mb-1'>

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

}
  );
}
  useEffect (() => {}
    if (fetch_notes ()) {}
  $2;
}    if (fetch_notes ()) {}
  $2;
}
}
    set_adding (true);
    try {'
      const res = await fetch ('/api / admin / notes', {'
        method: 'POST',
        headers: {'
          'Content - Type': 'application / json','
          'X - Admin': is_admin ? 'true' : 'false','
          'X - Admin - User': admin_id,
        },
        body: JSON.stringify ({ target_type, target_id, text }),
      });
      // Check condition;
if ( {) {}
  $2;
}'
        alert ('Failed to add note');
        return;
      }'
      set_text ('');
      await fetch_notes ();
    } finally {}
      set_adding (false);    }      // Check condition;
if ( {) {}
  $2;
}'
        alert ('Failed to add note');
        return;
      }'
      set_text ('');
      await fetch_notes ();
    } finally {}
      set_adding (false);
    }
  }
  // Check condition;
if ( {) {}
  $2;
}
    return ('
      <div className='rounded border p - 3'>;'
        <div className='flex items - center gap - 2 text - sm'>;
          <input;'
            id='isAdminToggle';'
<<<<<<< HEAD

              </li>;



=======
            id='isAdminToggle';
            type='checkbox';
            checked={is_admin}
            on_change={e =    /> setIsAdmin (e.target.checked)}
          />;
          <label html_for='isAdminToggle'    />Admin</label>;
        <div className='text - xs opacity - 60 mt - 2'    />Admin - only notes hidden.</div>
    </div>
  );
}
  return (<div className='rounded border p - 4 space - y-3'    />;
      <div className='flex items - center justify - between'    />;
        <h3 className='font - medium'    />Admin Notes</h3>;
        <div className='flex items - center gap - 3 text - sm'    />;
          <label className='inline - flex items - center gap - 2'    />;
            <input;
              type='checkbox';
              checked={is_admin}
              on_change={e =    /> setIsAdmin (e.target.checked)}
            />;
            <span     /> Admin</span>;
          </label>;
          <input;
            className='border rounded px - 2 py - 1';
            value={admin_id}
            on_change={e =    /> setAdminId (e.target.value)}
            placeholder='Admin ID';
          />;
        </div>;
      </div>;
      <div className='space - y-2'    />;
        <textarea;
          className='w - full border rounded - md px - 3 py - 2';
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)';
          value={text}
          on_change={e =    /> set_text (e.target.value)}
        />;
        <button;
          disabled={!text.trim () || adding}
          on_click={add_note}
          className='px - 3 py - 2 rounded - md bg - gray - 900 text - white disabled: opacity - 50'    />

          {adding ? 'Adding…' : 'Add Note}
}
        </button>;
      </div>;
      <div className='border - t pt - 3'    />;
        <div className='text - sm opacity - 70 mb - 2'    />;
          Notes are private, time - stamped, and include author ID.;
        </div>;
        {loading ? (<div className='text - sm'    />Loading…</div>) : notes.length === 0 ? (<div className='text - sm opacity - 70'    />No notes yet.</div>) : (<ul className='space - y-2'    />;}
            {notes.map (number => (<li key={n.id} className='rounded border p - 2 text - sm'    />;
                <div className='opacity - 60 text - xs mb - 1'    />;
                  {new Date (n.created_at).toLocaleString ()} • {n.author_id}
                </div>                <div    />{n.text}</div>          <ul className=\"space - y-2\"    />;"
            {notes.map ((n) => (<li key={n.id} className=\"rounded border p - 2 text - sm\"    />;"
                <div className=\"opacity - 60 text - xs mb - 1\"    />{new Date (n.created_at).toLocaleString ()} • {n.author_id}</div>;
              </li>))}
          </ul>)}
      </div>;
    </div>)</div>;
        <div className=&quot;text-xs opacity-60 mt-2&quot;    />Admin-only notes hidden.</div>;
      </div>;
    )}return (<div className=&quot;rounded border p-4 space-y-3&quot    />

      <div className=&quot;flex items-center justify-between&quot    />

        <h3 className=&quot;font-medium&quot;    />Admin Notes</h3>;
        <div className=&quot;flex items-center gap-3 text-sm&quot    />

          <label className=&quot;inline-flex items-center gap-2&quot    />

            <input type=&quot;checkbox&quot; checked={isAdmin} onChange={(e) =    /> setIsAdmin(e.target.checked)} />;
            <span    />Admin</span>;
          </label>;
          <input className=&quot;border rounded px-2 py-1&quot; value={adminId} onChange={(e) =    /> setAdminId(e.target.value)} placeholder=&quot;Admin ID&quot; />;
        </div>;
      </div>;
      <div className=&quot;space-y-2&quot    />

        <textarea className=&quot;w-full border rounded-md px-3 py-2&quot; rows={3} placeholder=&quot;Write a private note (abuse, spam, special support)&quot; value={text} onChange={(e) =    /> setText(e.target.value)} />;
        <button disabled={!text.trim() || adding} onClick={addNote} className=&quot;px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50&quot;    />{adding ? 'Adding…' : 'Add Note'}</button>;
      </div>;
      <div className=&quot;border-t pt-3&quot    />

        <div className=&quot;text-sm opacity-70 mb-2&quot;    />Notes are private, time-stamped, and include author ID.</div>;
        {loading ? (<div className=&quot;text-sm&quot;    />Loading…</div>;
        ) : notes.length === 0 ? (<div className=&quot;text-sm opacity-70&quot;    />No notes yet.</div>;
        ) : (<ul className=&quot;space-y-2&quot    />}
}
            {notes.map((n) => (<li key={n.id} className=&quot;rounded border p-2 text-sm&quot    />

                <div className=&quot;opacity-60 text-xs mb-1&quot;    />{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>;
                <div    />{n.text}</div>;
          onChange={e => setText(e.target.value)}
        />;
        <button;
          disabled={!text.trim() |adding}
          onClick={addNote}'
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50'
        >'
          {adding ? 'Adding…' : 'Add Note'}
        </button>
      </div>'
      <div className='border-t pt-3'>'
        <div className='text-sm opacity-70 mb-2'>
          Notes are private, time-stamped, and include author ID.
        </div>
        {loading ? ('
          <div className='text-sm'>Loading…</div>
        ) : notes.length === 0 ? ('
          <div className='text-sm opacity-70'>No notes yet.</div>
        ) : ('
          <ul className='space-y-2'>
            {notes.map(n => ('
              <li key={n.id} className='rounded border p-2 text-sm'>'
                <div className='opacity-60 text-xs mb-1'>

                  {new Date(n.createdAt).toLocaleString()} • {n.authorId}
                </div>
                <div>{n.text}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
);
}
}
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
  target_type: string; // e.g., 'user' | 'listing';
  target_type: string; // e.g., user | 'listing';
  target_id: string; // unique identifier for the target;
}
type Note = {}
  id: string;
  target_type: string;
  target_id: string;
  text: string;
type Note = {}
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
}
export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {}
}

export default function AdminNotesPanel({ targetType, targetId }: AdminNotesPanelProps) {}
  const [adminId, setAdminId] = useState(admin-demo');
  const [adding, setAdding] = useState(false);'
        }
      );
      if (!res && res.ok) {
        setNotes([]);
        return;
      }
    } finally {}
      set_loading (false);    }
  }
        setNotes([]);
        return;
      }
      }
      const data = await res.json ();
      set_notes (data.notes || []);
    } finally {}
      set_loading (false);
    }
  }
  }, [isAdmin, targetType, targetId]);
  async function addNote() {}
    if (!text.trim()) return;
    setAdding(true);
    try {'
      const res = await fetch('/api/admin/notes, {}
      const data = await res && res.json();
      setNotes(data && data.notes || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isAdmin) fetchNotes();    if (isAdmin) fetchNotes();
  }, [isAdmin, targetType, targetId]);

  async function addNote() { return null; }
        },
        body: JSON && JSON.stringify({ targetType, targetId, text })});
      if (!res && res.ok) {
        alert('Failed to add note');
        return;
      }
      setText(');
      await fetchNotes();
    } finally {
      setAdding(false);    }      if (!res && res.ok) {'
        alert(Failed to add note);
        return;
      }'
      setText(');
    }
  }

  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>;
        <div className=flex items-center gap-2 text-sm'>;
          <input'
            id=isAdminToggle'
            type='checkbox
            checked={isAdmin}
            onChange={e => setIsAdmin(e && e.target.checked)}
          />;
          <label htmlFor='isAdminToggle'>Admin</label>;
        <div className=text-xs opacity-60 mt-2'>Admin-only notes hidden.</div>;
      </div>;
    );
  }
  return ('
    <div className=rounded border p-4 space-y-3>;'
      <div className='flex items-center justify-between>;
        <h3 className='font-medium'>Admin Notes</h3>;
        <div className=flex items-center gap-3 text-sm'>;'
          <label className=inline-flex items-center gap-2>;
            <input'
              type='checkbox
              checked={isAdmin}

        <textarea
          className=w-full border rounded-md px-3 py-2'
          rows={3}'
          placeholder=Write a private note (abuse, spam, special support)
          value={text}
          onChange={e => setText(e && e.target.value)}
        />;
        <button;
          onClick={addNote}'
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50>;
          {adding ? 'Adding…' : Add Note}
              </li>
        </button>;
      </div>;

          onClick={addNote}
          className='px-3 py-2 rounded-md bg-gray-900 text-white disabled: opacity-50'    />

          {adding ? 'Adding…' : 'Add Note}
}
        </button>;
      </div>;
      <div className='border-t pt-3'    />;
        <div className='text-sm opacity-70 mb-2'    />;

          Notes are private, time-stamped, and include author ID.;
        </div>;
        {loading ? (<div className='text-sm'    />Loading…</div>;
        ) : notes.length === 0 ? (<div className='text-sm opacity-70'    />No notes yet.</div>;}
        ) : (<ul className='space-y-2'    />;}
            {notes.map(n => (<li key={n.id} className='rounded border p-2 text-sm'    />;
                <div className='opacity-60 text-xs mb-1'    />;
                  {new Date(n.createdAt).toLocaleString()} • {n.authorId}
                </div>;
                <div    />{n.text}</div>;
              </li>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
            ))}
          </ul>;
        )}


<<<<<<< HEAD

      </div>;
    </div>;
  );

=======
      </div>
    </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

  );
}

<<<<<<< HEAD

}
  );
}
  useEffect (() => {
    if (fetch_notes ()) {
  $2
}    if (fetch_notes ()) {
  $2

}
=======
  useEffect (() => {}
    if (fetch_notes ()) {}
  $2;
}    if (fetch_notes ()) {}
  $2;

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, [is_admin, target_type, target_id]);
  async /**
 * add_note - Function description;
 */
function add_note() {}
    if () return) {}
  $2;
}
    set_adding (true);
    try {'
      const res = await fetch (/api / admin / notes, {'
        method: 'POST,
        headers: {
          'Content - Type': application / json,'
          'X - Admin: is_admin ? true' : 'false,
          'X - Admin - User': admin_id},
        body: JSON.stringify ({ target_type, target_id, text })});
      // Check condition;
if ( {) {}
  $2;
}
        alert (Failed to add note');
        return;
      }'
      set_text ();
      await fetch_notes ();
    } finally {}
      set_adding (false);    }      // Check condition;
if ( {) {}
  $2;
}'
        alert ('Failed to add note);
        return;
      }
      set_text ('');
      await fetch_notes ();
    } finally {}
      set_adding (false);
    }
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <div className=rounded border p - 3'>;'
        <div className=flex items - center gap - 2 text - sm>;
          <input;'
            id='isAdminToggle;
            type='checkbox';
            checked={is_admin}
            on_change={e => setIsAdmin (e.target.checked)}
          />;
          <label html_for=isAdminToggle'>Admin</label>;'
        <div className=text - xs opacity - 60 mt - 2>Admin - only notes hidden.</div>;
      </div>);
  }
  return ('
    <div className='rounded border p - 4 space - y-3>;
      <div className='flex items - center justify - between'>;
        <h3 className=font - medium'>Admin Notes</h3>;'
        <div className=flex items - center gap - 3 text - sm>;'
          <label className='inline - flex items - center gap - 2>;
            <input;
              type='checkbox';
              checked={is_admin}
              on_change={e => setIsAdmin (e.target.checked)}
            />;
            <span > Admin</span>;
          </label>;
          <input;
            className=border rounded px - 2 py - 1';
            value={admin_id}
            on_change={e => setAdminId (e.target.value)}'
            placeholder=Admin ID;
          />;
        </div>;
      </div>;'
      <div className='space - y-2>;
        <textarea;
          className='w - full border rounded - md px - 3 py - 2';
          rows={3}
          placeholder=Write a private note (abuse, spam, special support)';
          value={text}
          on_change={e => set_text (e.target.value)}
        />;
        <button;
          disabled={!text.trim () || adding}
          on_click={add_note}'
          className=px - 3 py - 2 rounded - md bg - gray - 900 text - white disabled:opacity - 50;
        >;'
          {adding ? 'Adding… : Add Note'}
        </button>;
      </div>;'
      <div className=border - t pt - 3>;'
        <div className='text - sm opacity - 70 mb - 2>;
          Notes are private, time - stamped, and include author ID.;
        </div>;
        {loading ? (
          <div className='text - sm'>Loading…</div>) : notes.length === 0 ? (
          <div className=text - sm opacity - 70'>No notes yet.</div>) : ('
          <ul className=space - y-2>;
            {notes.map (number => ('
              <li key={n.id} className='rounded border p - 2 text - sm>;
                <div className='opacity - 60 text - xs mb - 1'>;
                  {new Date (n.created_at).toLocaleString ()} • {n.author_id}
                </div>                <div>{n.text}</div>          <ul className="space-y-2">;
            {notes.map ((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">;
                <div className="opacity - 60 text-xs mb-1">{new Date (n.created_at).toLocaleString ()} • {n.author_id}</div>;
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




=======
);
  );
}
}
  );
}
  );
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
                </div>                <div>{n.text}</div>          <ul className="space-y-2">;
            {notes.map ((n) => (
              <li key={n.id} className="rounded border p-2 text-sm">;
                <div className="opacity - 60 text-xs mb-1">{new Date (n.created_at).toLocaleString ()} • {n.author_id}</div>;
              </li>))}
          </ul>)}
      </div>;
    </div>);
}

"
>>>>>>> origin/cursor/delete-old-data-records-6bba

