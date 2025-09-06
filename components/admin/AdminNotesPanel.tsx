
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
}
type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
}
export default function AdminNotesPanel({

type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number

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

    } finally {
      set_loading (false);
    }
  }

      if (!res.ok) {
        alert('Failed to add note');
        return;
      }
      setText('');
      await fetchNotes();

      setAdding(false);    }      if (!res.ok) {
        alert('Failed to add note');
        return
      }
      setText('');

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

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

}
