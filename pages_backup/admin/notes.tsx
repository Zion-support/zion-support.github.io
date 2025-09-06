<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/notes.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);


<<<<<<< HEAD
=======
=======
type Note = any;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
type Note = any;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/notes.tsx
=======
type Note = any;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/notes.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      } finally {
        set_loading (false);
      }
    }


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/notes.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const res = await fetch('/api/admin/notes-all', {
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' },
        });
        if (!res.ok) return;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {
        setLoading(false);
      }
    }
    if (isAdmin) load();
  }, [isAdmin]);

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Admin Notes</h1>
        <label className='inline-flex items-center gap-2 text-sm'>
          <input
            type='checkbox'
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
          />
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/notes.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/notes.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
=======
<div className='opacity-70'>No notes found.</div>
      ) : (
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/notes.tsx
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((n) => (
            <div key={n.id} className="rounded border p-3 text-sm">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
=======

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}


=======
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/notes.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {notes.map(n => (
            <div key={n.id} className='rounded border p-3 text-sm'>
              <div className='opacity-60 text-xs mb-1'>
                {new Date(n.createdAt).toLocaleString()} • {n.authorId}
              </div>
              <div className='font-medium mb-1'>
                {n.targetType} • {n.targetId}
              </div>
              <div>{n.text}</div>
            </div>
          ))}
        </div>
{/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search notes..."
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Tag</label>
              <select
                value={filterTag}
                onChange={(e) => setFilterTag(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPrivate}
                  onChange={(e) => setShowPrivate(e.target.checked)}
                  className="mr-2"
                />
                <span>Show Private Notes</span>
              </label>
            </div>
          </div>
        </div>

        {/* Notes List */}
        {loading ? (
          <div className="text-center py-8">Loading notes...</div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No notes found matching your criteria.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <div key={note.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{note.title}</h3>
                  <div className="flex items-center gap-2">
                    {note.isPrivate && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                        Private
                      </span>
                    )}
                    <span className="text-sm text-gray-500">
                      {new Date(note.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{note.content}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs cursor-pointer hover:bg-blue-200"
                        onClick={() => setFilterTag(tag)}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    By {note.author}
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm">
                    Delete
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/notes.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/notes.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
