type Note = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
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
origin/cursor/automate-test-improve-and-merge-code-2533
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
<div className='opacity-70'>No notes found.</div>
      ) : (
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
origin/cursor/automate-test-improve-and-merge-code-2533
