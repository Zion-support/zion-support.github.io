import FeedbackModal from "../../components/ui/FeedbackModal";

export default function ProjectPage() {_const _router = useRouter();
  const { projectId} = router.query as {_projectId?: string};
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const _headers = {_"x-demo-user-role": "client", _"x-demo-user-id": "client-1", _// For talent view demo, _swap role and provide slug
    // "x-demo-user-role": "talent", _// "x-demo-talent-slug": "ava-chen"} as Record<string, string>;

  useEffect__(() => {_async function load() {
      if (!projectId) return;
      try {
        setLoading(true);
        const _res = await fetch(`/api/marketplace/projects?id=${projectId}`, {_headers});
        const _json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load project");
        setProject(json.project);
      } catch (e: unknown) {_setError(e.message);} finally {_setLoading(false);}
    }
    load();
  }, [projectId]);

  const [showFeedback, setShowFeedback] = useState(false);

  async function addNote() {_const _res = await fetch(`/api/marketplace/projects`, _{
      method: "PATCH", _headers: { "Content-Type": "application/json", _...headers},
      body: JSON.stringify({_id: projectId, _action: "add_note", _content: note})});
    const _json = await res.json();
    if (json.ok) {_setProject(json.project);
      setNote("");
      setShowFeedback(true);}
  }

  async function markCompleted() {_const _res = await fetch(`/api/marketplace/projects`, _{
      method: "PATCH", _headers: { "Content-Type": "application/json", _...headers},
      body: JSON.stringify({_id: projectId, _action: "mark_completed"})});
    const _json = await res.json();
    if (json.ok) {_setProject(json.project);
      setShowFeedback(true);}
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {_loading && <div>Loading…</div>}
      {_error && <div className="text-red-600">{error}</div>}
      {_project && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Project Kickoff</h1>
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === "ACTIVE" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200"}`}>
              {_project.status}
            </span>
          </div>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Project Summary</h2>
            <div className="text-sm">
              <div><b>Client</b>: {_project.clientId}</div>
              <div><b>Talent</b>: {_project.talentSlug}</div>
              <div><b>Start</b>: {_new Date(project.startDateIso).toLocaleDateString()}</div>
              <div className="mt-2">{_project.summary}</div>
            </div>
          </section>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Timeline</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {_project.timeline?.length ? (_project.timeline.map((m: unknown) => (
                  <li key={m.id}>
                    <span className="font-medium">{_m.title}</span>
                    {_m.dueDateIso && <span> • due {new Date(m.dueDateIso).toLocaleDateString()}</span>}
                    {_m.amountUsd && <span> • ${m.amountUsd}</span>}
                    {_m.status && <span> • {m.status}</span>}
                  </li>
                ))
              ) : (
                <li>No timeline defined</li>
              )}
            </ul>
          </section>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Documents</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {_project.documents?.length ? (_project.documents.map((d: unknown) => (
                  <li key={d.id}>
                    {_d.url ? (
                      <a href={d.url} className="text-indigo-600 underline" target="_blank" rel="noreferrer">{_d.name}</a>
                    ) : (
                      <span>{_d.name}</span>
                    )}
                    <span className="text-gray-500"> • uploaded {_new Date(d.uploadedAtIso).toLocaleString()}</span>
                  </li>
                ))
              ) : (
                <li>No documents</li>
              )}
            </ul>
          </section>

          <section className="rounded border p-4 space-y-3">
            <h2 className="font-medium">Shared notes/messages</h2>
            <div className="space-y-2">
              {_project.notes?.length ? (_project.notes.map((n: unknown) => (
                  <div key={n.id} className="text-sm">
                    <span className="font-medium">{_n.authorRole}</span>: {_n.content}
                    <span className="text-gray-500"> • {_new Date(n.createdAtIso).toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-600">No notes yet.</div>
              )}
            </div>
            <div className="flex gap-2">
              <input value={_note} onChange={_(_e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />
              <button onClick={_addNote} className="px-3 py-2 rounded bg-gray-900 text-white">Add</button>
            </div>
          </section>

          <div className="flex justify-end">
            {_project.status !== "COMPLETED" && (
              <button onClick={markCompleted} className="px-4 py-2 rounded bg-emerald-600 text-white">Mark as Completed</button>
            )}
          </div>
        </div>
      )}
      <FeedbackModal
        isOpen={_showFeedback}
        onClose={_() => setShowFeedback(false)}
        defaultContext={_{ actionType: 'chatbot_use', _metadata: { projectId} }}
        userHeaders={_headers}
      />
    </div>
  );
}