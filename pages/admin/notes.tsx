<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======

  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string,
  target_type: string,
  target_id: string,
  text: string,
  author_id: string,
  created_at: number;
},
export default /**
 * AdminNotesConsole - Function description
 */
function AdminNotesConsole() {
  const [is_admin, setIsAdmin] = useState (true),
  const [notes, set_notes] = useState < Note[]>([]),
  const [loading, set_loading] = useState (false),
  useEffect (() => {
    async /**
 * load - Function description
 */
function load() {
      set_loading (true),
      try {
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } });
        if (!res.ok) return,;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {;
        setLoading(false);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      } finally {
        set_loading (false);
      }
    }


<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};
export default function AdminNotesConsole(req, res) {
  try {
  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {;
    async function load() {;
      setLoading(true);
      try {
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } });
        if (!res.ok) return,;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {;
        setLoading(false);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (isAdmin) load()
  }, [isAdmin]),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin Notes</h1>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <span>Admin</span>
        </label>
      </div>
      {loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
        <div className="opacity-70">No notes found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((n) => (
            <div key={n.id} className="rounded border p-3 text-sm">
<<<<<<< HEAD
              <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              <div className="font-medium mb-1">{n.targetType} • {n.targetId}</div>
              <div>{n.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}

type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};
export default function AdminNotesConsole(req, res) {
  try {
  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {;
    async function load() {;
      setLoading(true);
      try {
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } });
        if (!res.ok) return,;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {;
        setLoading(false);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

=======
    if (load ()) {
  $2
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
  }, [is_admin]),
  return (
    <div className="space - y-4">;
      <div className="flex items - center justify - between">;
        <h1 className="text - xl font - semibold">Admin Notes</h1>;
        <label className="inline - flex items - center gap - 2 text - sm">;
          <input type="checkbox" checked={is_admin} on_change={(e) => setIsAdmin (e.target.checked)} />;
          <span > Admin</span>;
        </label>;
      </div>;
      {loading ? (
        <div > Loading…</div>) : notes.length === 0 ? (
        <div className="opacity - 70">No notes found.</div>) : (
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 3">;
          {notes.map ((n) => (
            <div key={n.id} className="rounded border p - 3 text - sm">;
              <div className="opacity - 60 text - xs mb - 1">{new Date (n.created_at).toLocaleString ()} • {n.author_id}</div>;
              <div className="font - medium mb - 1">{n.target_type} • {n.target_id}</div>;
              <div>{n.text}</div>;
            </div>))}
        </div>)}
    </div>);
<<<<<<< HEAD
}


=======
    }
    if (isAdmin) load()
  }, [isAdmin]);

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-xl font-semibold&quot;>Admin Notes</h1>
        <label className=&quot;inline-flex items-center gap-2 text-sm&quot;>
          <input type=&quot;checkbox&quot; checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <span>Admin</span>
        </label>
      </div>

      {_loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
        <div className=&quot;opacity-70&quot;>No notes found.</div>
      ) : (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
          {notes.map((n) => (
            <div key={n.id} className=&quot;rounded border p-3 text-sm&quot;>
              <div className=&quot;opacity-60 text-xs mb-1&quot;>{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              <div className=&quot;font-medium mb-1&quot;>{n.targetType} • {n.targetId}</div>
=======
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } })
        if (!res.ok) return
        const data = await res.json()
        setNotes(data.notes |[])
      } finally {
        setLoading(false)
      }
    }
    if (isAdmin) load()
  }, [isAdmin])

=======
=======
<<<<<<< HEAD
import { useEffect, useState } from 'react',;
;
=======
import { useEffect, useState } from 'react';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};
export default function AdminNotesConsole(req, res) {
  try {
  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {;
    async function load() {;
      setLoading(true);
      try {
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } });
        if (!res.ok) return,;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {;
        setLoading(false);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (isAdmin) load()
  }, [isAdmin]),

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin Notes</h1>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <span>Admin</span>
        </label>
      </div>
      {loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
        <div className="opacity-70">No notes found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((n) => (
            <div key={n.id} className="rounded border p-3 text-sm">
              <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              <div className="font-medium mb-1">{n.targetType} • {n.targetId}</div>

              <div>{n.text}</div>
            </div>

          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
