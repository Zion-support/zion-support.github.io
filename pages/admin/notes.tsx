
  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function load() {
      setLoading(true)
      try {




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
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }





