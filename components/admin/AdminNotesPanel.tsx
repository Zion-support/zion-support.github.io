export type AdminNotesPanelProps = {;
  targetType: string; // e && e.g., 'user' | 'listing';
  targetId: string; // unique identifier for the target;
};

type Note = {;
  target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;
  targetType: string; // e.g., 'user' | 'listing'
  targetId: string; // unique identifier for the target
}
;
type Note = {
  id: string;
  target_type: string;
  target_id: string;
  text: string;
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
        }
      );
      if (!res && res.ok) {;
        setNotes([]);
        return;
      }
        setNotes([]);
        return;
      }
        setNotes([]);
        return;
      }
      const data = await res.json();
      setNotes(data.notes |[])
    } finally {
      set_loading (false);
    }
  }

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
        alert('Failed to add note');
        return;
      }
      setText('');
      setAdding(false);    }

    }
  }

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
        <textarea
          className='w-full border rounded-md px-3 py-2'
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)'
          value={text}
}
