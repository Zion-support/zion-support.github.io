<<<<<<< HEAD
import { useEffect, useState } from "react",
import { useRouter } from "next/router",
import FeedbackModal from "../../components/ui/FeedbackModal",
export default function ProjectPage() {
  const router = useRouter(),
  const { projectId } = router.query as { projectId?: string },
  const [project, setProject] = useState<any | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [note, setNote] = useState(""),
=======
import { useEffect, useState } from &quot;react&quot;;
import { useRouter } from &quot;next/router&quot;;
import FeedbackModal from &quot;../../components/ui/FeedbackModal&quot;;

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query as { projectId?: string };
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const headers = {
    &quot;x-demo-user-role&quot;: &quot;client&quot;,
    &quot;x-demo-user-id&quot;: &quot;client-1&quot;,
    // For talent view demo, swap role and provide slug
<<<<<<< HEAD
    // "x-demo-user-role": "talent",
    // "x-demo-talent-slug": "ava-chen"} as Record<string string>,
=======
    // &quot;x-demo-user-role&quot;: &quot;talent&quot;,
    // &quot;x-demo-talent-slug&quot;: &quot;ava-chen&quot;} as Record<string, string>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  useEffect(() => {
    async function load() {
      if (!projectId) return,
      try {
<<<<<<< HEAD
        setLoading(true),
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers }),
        const json = await res.json(),
        if (!json.ok) throw new Error(json.error || "Failed to load project"),
        setProject(json.project)
=======
        setLoading(true);
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers });
        const json = await res.json();
        if (!json.ok) throw new Error(json.error || &quot;Failed to load project&quot;);
        setProject(json.project);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [projectId]),

  const [showFeedback, setShowFeedback] = useState(false),

  async function addNote() {
    const res = await fetch(`/api/marketplace/projects`, {
<<<<<<< HEAD
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "add_note", content: note })}),
    const json = await res.json(),
    if (json.ok) {
      setProject(json.project),
      setNote(""),
      setShowFeedback(true)
=======
      method: &quot;PATCH&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...headers },
      body: JSON.stringify({ id: projectId, action: &quot;add_note&quot;, content: note })});
    const json = await res.json();
    if (json.ok) {
      setProject(json.project);
      setNote("&quot;);
      setShowFeedback(true);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }

  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
<<<<<<< HEAD
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "mark_completed" })}),
    const json = await res.json(),
=======
      method: &quot;PATCH&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...headers },
      body: JSON.stringify({ id: projectId, action: &quot;mark_completed&quot; })});
    const json = await res.json();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    if (json.ok) {
      setProject(json.project),
      setShowFeedback(true)
    }
  }

  return (
    <div className=&quot;max-w-4xl mx-auto p-6 space-y-6&quot;>
      {loading && <div>Loading…</div>}
      {error && <div className=&quot;text-red-600&quot;>{error}</div>}
      {project && (
        <div className=&quot;space-y-6&quot;>
          <div className=&quot;flex items-center gap-3&quot;>
            <h1 className=&quot;text-2xl font-semibold&quot;>Project Kickoff</h1>
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === &quot;ACTIVE&quot; ? &quot;bg-emerald-100 text-emerald-700&quot; : &quot;bg-gray-200&quot;}`}>
              {project.status}
            </span>
          </div>

          <section className=&quot;rounded border p-4&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Project Summary</h2>
            <div className=&quot;text-sm&quot;>
              <div><b>Client</b>: {project.clientId}</div>
              <div><b>Talent</b>: {project.talentSlug}</div>
              <div><b>Start</b>: {new Date(project.startDateIso).toLocaleDateString()}</div>
              <div className=&quot;mt-2&quot;>{project.summary}</div>
            </div>
          </section>

          <section className=&quot;rounded border p-4&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Timeline</h2>
            <ul className=&quot;list-disc pl-6 space-y-1 text-sm&quot;>
              {project.timeline?.length ? (
                project.timeline.map((m: any) => (
                  <li key={m.id}>
                    <span className=&quot;font-medium&quot;>{m.title}</span>
                    {m.dueDateIso && <span> • due {new Date(m.dueDateIso).toLocaleDateString()}</span>}
                    {m.amountUsd && <span> • ${m.amountUsd}</span>}
                    {m.status && <span> • {m.status}</span>}
                  </li>
                ))
              ) : (
                <li>No timeline defined</li>
              )}
            </ul>
          </section>

          <section className=&quot;rounded border p-4&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Documents</h2>
            <ul className=&quot;list-disc pl-6 space-y-1 text-sm&quot;>
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (
                      <a href={d.url} className=&quot;text-indigo-600 underline&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{d.name}</Link>
                    ) : (
                      <span>{d.name}</span>
                    )}
                    <span className=&quot;text-gray-500&quot;> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
                  </li>
                ))
              ) : (
                <li>No documents</li>
              )}
            </ul>
          </section>

          <section className=&quot;rounded border p-4 space-y-3&quot;>
            <h2 className=&quot;font-medium&quot;>Shared notes/messages</h2>
            <div className=&quot;space-y-2&quot;>
              {project.notes?.length ? (
                project.notes.map((n: any) => (
                  <div key={n.id} className=&quot;text-sm&quot;>
                    <span className=&quot;font-medium&quot;>{n.authorRole}</span>: {n.content}
                    <span className=&quot;text-gray-500&quot;> • {new Date(n.createdAtIso).toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <div className=&quot;text-sm text-gray-600&quot;>No notes yet.</div>
              )}
            </div>
            <div className=&quot;flex gap-2&quot;>
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder=&quot;Add a note&quot; className=&quot;flex-1 border rounded px-3 py-2&quot; />
              <button onClick={addNote} className=&quot;px-3 py-2 rounded bg-gray-900 text-white&quot;>Add</button>
            </div>
          </section>

          <div className=&quot;flex justify-end&quot;>
            {project.status !== &quot;COMPLETED&quot; && (
              <button onClick={markCompleted} className=&quot;px-4 py-2 rounded bg-emerald-600 text-white&quot;>Mark as Completed</button>
            )}
          </div>
        </div>
      )}
      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        defaultContext={{ actionType: 'chatbot_use', metadata: { projectId } }}
        userHeaders={headers}
      />
    </div>
  )
}