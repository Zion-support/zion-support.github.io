<<<<<<< HEAD
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
=======
import FeedbackModal from "../../components/ui/FeedbackModal";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ProjectPage() {_const _router = useRouter();
  const { projectId} = router.query as {_projectId?: string};
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
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
=======
  const _headers = {_"x-demo-user-role": "client", _"x-demo-user-id": "client-1", _// For talent view demo, _swap role and provide slug
    // "x-demo-user-role": "talent", _// "x-demo-talent-slug": "ava-chen"} as Record<string, string>;

  useEffect__(() => {_async function load() {
      if (!projectId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      try {
<<<<<<< HEAD
        setLoading(true),
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers }),
        const json = await res.json(),
        if (!json.ok) throw new Error(json.error || "Failed to load project"),
        setProject(json.project)
=======
        setLoading(true);
<<<<<<< HEAD
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
=======
        const _res = await fetch(`/api/marketplace/projects?id=${projectId}`, {_headers});
        const _json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load project");
        setProject(json.project);
      } catch (e: unknown) {_setError(e.message);} finally {_setLoading(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    load()
  }, [projectId]),

  const [showFeedback, setShowFeedback] = useState(false),

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </li>
                ))
              ) : (
                <li>No timeline defined</li>
              )}
            </ul>
          </section>

<<<<<<< HEAD
          <section className=&quot;rounded border p-4&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Documents</h2>
            <ul className=&quot;list-disc pl-6 space-y-1 text-sm&quot;>
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (
                      <a href={d.url} className=&quot;text-indigo-600 underline&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{d.name}</Link>
=======
          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Documents</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {_project.documents?.length ? (_project.documents.map((d: unknown) => (
                  <li key={d.id}>
                    {_d.url ? (
                      <a href={d.url} className="text-indigo-600 underline" target="_blank" rel="noreferrer">{_d.name}</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : (
                      <span>{_d.name}</span>
                    )}
<<<<<<< HEAD
                    <span className=&quot;text-gray-500&quot;> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
=======
                    <span className="text-gray-500"> • uploaded {_new Date(d.uploadedAtIso).toLocaleString()}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </li>
                ))
              ) : (
                <li>No documents</li>
              )}
            </ul>
          </section>

<<<<<<< HEAD
          <section className=&quot;rounded border p-4 space-y-3&quot;>
            <h2 className=&quot;font-medium&quot;>Shared notes/messages</h2>
            <div className=&quot;space-y-2&quot;>
              {project.notes?.length ? (
                project.notes.map((n: any) => (
                  <div key={n.id} className=&quot;text-sm&quot;>
                    <span className=&quot;font-medium&quot;>{n.authorRole}</span>: {n.content}
                    <span className=&quot;text-gray-500&quot;> • {new Date(n.createdAtIso).toLocaleString()}</span>
=======
          <section className="rounded border p-4 space-y-3">
            <h2 className="font-medium">Shared notes/messages</h2>
            <div className="space-y-2">
              {_project.notes?.length ? (_project.notes.map((n: unknown) => (
                  <div key={n.id} className="text-sm">
                    <span className="font-medium">{_n.authorRole}</span>: {_n.content}
                    <span className="text-gray-500"> • {_new Date(n.createdAtIso).toLocaleString()}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                ))
              ) : (
                <div className=&quot;text-sm text-gray-600&quot;>No notes yet.</div>
              )}
            </div>
<<<<<<< HEAD
            <div className=&quot;flex gap-2&quot;>
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder=&quot;Add a note&quot; className=&quot;flex-1 border rounded px-3 py-2&quot; />
              <button onClick={addNote} className=&quot;px-3 py-2 rounded bg-gray-900 text-white&quot;>Add</button>
            </div>
          </section>

          <div className=&quot;flex justify-end&quot;>
            {project.status !== &quot;COMPLETED&quot; && (
              <button onClick={markCompleted} className=&quot;px-4 py-2 rounded bg-emerald-600 text-white&quot;>Mark as Completed</button>
=======
            <div className="flex gap-2">
              <input value={_note} onChange={_(_e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />
              <button onClick={_addNote} className="px-3 py-2 rounded bg-gray-900 text-white">Add</button>
            </div>
          </section>

          <div className="flex justify-end">
            {_project.status !== "COMPLETED" && (
              <button onClick={markCompleted} className="px-4 py-2 rounded bg-emerald-600 text-white">Mark as Completed</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}