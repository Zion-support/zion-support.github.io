
type Note = {_id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;};

export default function AdminNotesConsole() {_const [isAdmin, _setIsAdmin] = useState(true);
  const [notes, _setNotes] = useState<Note[]>([]);
  const [loading, _setLoading] = useState(false);

  useEffect__(() => {
    async function load() {
      setLoading(true);
      try {
        const _res = await fetch('/api/admin/notes-all', _{ headers: { 'X-Admin': isAdmin ? 'true' : 'false'} });
        if (!res.ok) return;
        const _data = await res.json();
        setNotes(data.notes || []);
      } finally {_setLoading(false);}
    }
    if (isAdmin) load();
  }, [isAdmin]);

  return (_<div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin Notes</h1>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={_isAdmin} onChange={_(e) => setIsAdmin(e.target.checked)} />
          <span>Admin</span>
        </label>
      </div>

      {_loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
        <div className="opacity-70">No notes found.</div>
      ) : (_<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((n) => (
            <div key={n.id} className="rounded border p-3 text-sm">
              <div className="opacity-60 text-xs mb-1">{_new Date(n.createdAt).toLocaleString()} • {_n.authorId}</div>
              <div className="font-medium mb-1">{_n.targetType} • {_n.targetId}</div>
              <div>{_n.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}