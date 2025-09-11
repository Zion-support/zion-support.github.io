<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);


<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react';

type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number
}
export default function AdminNotesConsole() {
  const [isAdmin, setIsAdmin] = useState(true)
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(false)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
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
        const res = await fetch ('/api / admin / notes - all', { headers: { 'X - Admin': is_admin ? 'true' : 'false' } }),
        // Check condition
if (return, ) {
  $2
}
        const data = await res.json (),
        set_notes (data.notes || []);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } finally {
        set_loading (false);
      }
    }


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (isAdmin) load()
  }, [isAdmin]),
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
}

<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (load ()) {
  $2
=======
=======
}
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

import { useEffect, useState } from 'react',;
;
import { useEffect, useState } from 'react';
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
          ))}
        </div>
      )}
    </div>
  );
};
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
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
