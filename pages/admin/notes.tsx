import { useEffect, useState } from 'react',;
type Note = {;
  id: string,;
  targetType: string,;
  targetId: string,;
  text: string,;
  authorId: string,;
  createdAt: number;
},;
export default function AdminNotesConsole() {;
  const [isAdmin, setIsAdmin] = useState(true),;
  const [notes, setNotes] = useState<Note[]>([]),;
  const [loading, setLoading] = useState(false),;
  useEffect(() => {;
    async function load() {;
      setLoading(true),;
      try {;
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } }),;
        if (!res.ok) return,;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {;
        setLoading(false);
      }
    }
<<<<<<< HEAD
    if (isAdmin) load()
  }, [isAdmin]),

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-xl font-semibold&quot;>Admin Notes</h1>
        <label className=&quot;inline-flex items-center gap-2 text-sm&quot;>
          <input type=&quot;checkbox&quot; checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <span>Admin</span>
        </label>
      </div>

      {loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
        <div className=&quot;opacity-70&quot;>No notes found.</div>
      ) : (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
          {notes.map((n) => (
            <div key={n.id} className=&quot;rounded border p-3 text-sm&quot;>
              <div className=&quot;opacity-60 text-xs mb-1&quot;>{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              <div className=&quot;font-medium mb-1&quot;>{n.targetType} • {n.targetId}</div>
              <div>{n.text}</div>
            </div>
=======
    if (isAdmin) load();
  }, [isAdmin]);
  return (;
    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <h1 className="text-xl font-semibold">Admin Notes</h1>;
        <label className="inline-flex items-center gap-2 text-sm">;
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />;
          <span>Admin</span>;
        </label>;
      </div>;
      {loading ? (;
        <div>Loading…</div>;
      ) : notes.length === 0 ? (;
        <div className="opacity-70">No notes found.</div>;
      ) : (;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">;
          {notes.map((n) => (;
            <div key={n.id} className="rounded border p-3 text-sm">;
              <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>;
              <div className="font-medium mb-1">{n.targetType} • {n.targetId}</div>;
              <div>{n.text}</div>;
            </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </div>;
      )}
    </div>;
  );
}