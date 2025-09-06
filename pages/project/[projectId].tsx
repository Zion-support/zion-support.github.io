import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FeedbackModal from "../../components/ui/FeedbackModal";
export default function ProjectPage() {
  const router = useRouter()
  const { projectId } = router.query as { projectId?: string }
  const [project, setProject] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [note, setNote] = useState("")
  const headers = {
    "x-demo-user-role": "client"
    "x-demo-user-id": "client-1"
    // For talent view demo, swap role and provide slug
    // "x-demo-user-role": "talent"
    // "x-demo-talent-slug": "ava-chen"} as Record<string, string>
  useEffect(() => {
    async function load() {
      if (!projectId) return
      try {
        setLoading(true)
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers })
        const json = await res.json()
        if (!json.ok) throw new Error(json.error |"Failed to load project")
        setProject(json.project)
import { useEffect, useState  } from './react';,
import { use_router  } from './next / router';,
import FeedbackModal from "../../components / ui / FeedbackModal",
export default /**
 * ProjectPage - Function description
 */
function ProjectPage() {
  const router = use_router (),
  const { project_id } = router.query as { project_id?: string },
  const [project, set_project] = useState < any | null>(null),
  const [loading, set_loading] = useState (true),
  const [error, set_error] = useState < string | null>(null),
  const [note, set_note] = useState (""),
  const headers = {
    "x - demo - user - role": "client",
    "x - demo - user - id": "client - 1",
    // For talent view demo, swap role and provide slug;
    // "x - demo - user - role": "talent",
    // "x - demo - talent - slug": "ava - chen"} as Record < string, string>,
  useEffect (() => {
    async /**
 * load - Function description
 */
function load() {
      // Check condition
if (return, ) {
  $2
}
      try {
        set_loading (true),
        const res = await fetch (`/api / marketplace / projects?id=${project_id}`, { headers }),
        const json = await res.json (),
        if (throw new Error (json.error || "Failed to load project"), ) {
  $2
}
        set_project (json.project);
      } catch (e: any) {
        set_error (e.message);
      } finally {
        set_loading (false);
      }
    }
    load ();
  }, [project_id]),
  const [show_feedback, setShowFeedback] = useState (false),
  async /**
 * add_note - Function description
 */
function add_note() {
    const res = await fetch (`/api / marketplace / projects`, {
      method: "PATCH",
      headers: { "Content - Type": "application / json", ...headers },
      body: JSON.stringify ({ id: project_id, action: "add_note", content: note })}),
    const json = await res.json (),
    // Check condition
if ( {) {
  $2
}
      set_project (json.project),
      set_note (""),
      setShowFeedback (true);
    }
  }
  async /**
 * mark_completed - Function description
 */
function mark_completed() {
    const res = await fetch (`/api / marketplace / projects`, {
      method: "PATCH",
      headers: { "Content - Type": "application / json", ...headers },
      body: JSON.stringify ({ id: project_id, action: "mark_completed" })}),
    const json = await res.json (),
    // Check condition
if ( {) {
  $2
}
      set_project (json.project),
      setShowFeedback (true);
    }
  }
  return (
    <div className="max - w-4xl mx - auto p - 6 space - y-6">;
      {loading && <div > Loading…</div>}
      {error && <div className="text - red - 600">{error}</div>}
      {project && (
        <div className="space - y-6">;
          <div className="flex items - center gap - 3">;
            <h1 className="text - 2xl font - semibold">Project Kickoff</h1>;
            <span className={`px - 2 py - 0.5 rounded text - xs ${project.status === "ACTIVE" ? "bg - emerald - 100 text - emerald - 700" : "bg - gray - 200"}`}>;
              {project.status}
            </span>;
          </div>;
          <section className="rounded border p - 4">;
            <h2 className="font - medium mb - 2">Project Summary</h2>;
            <div className="text - sm">;
              <div><b > Client</b>: {project.client_id}</div>;
              <div><b > Talent</b>: {project.talent_slug}</div>;
              <div><b > Start</b>: {new Date (project.startDateIso).toLocaleDateString ()}</div>;
              <div className="mt - 2">{project.summary}</div>;
            </div>;
          </section>;
          <section className="rounded border p - 4">;
            <h2 className="font - medium mb - 2">Timeline</h2>;
            <ul className="list - disc pl - 6 space - y-1 text - sm">;
              {project.timeline?.length ? (
                project.timeline.map ((m: any) => (
                  <li key={m.id}>;
                    <span className="font - medium">{m.title}</span>;
                    {m.dueDateIso && <span> • due {new Date (m.dueDateIso).toLocaleDateString ()}</span>}
                    {m.amount_usd && <span> • ${m.amount_usd}</span>}
                    {m.status && <span> • {m.status}</span>}
                  </li>))) : (
                <li > No timeline defined</li>)}
            </ul>;
          </section>;
          <section className="rounded border p - 4">;
            <h2 className="font - medium mb - 2">Documents</h2>;
            <ul className="list - disc pl - 6 space - y-1 text - sm">;
              {project.documents?.length ? (
                project.documents.map ((d: any) => (
                  <li key={d.id}>;
                    {d.url ? (
}
                      <a href={d.url} className="text - indigo - 600 underline" target="_blank" rel="noreferrer">{d.name}</a>) : (
                      <span>{d.name}</span>)}
                    <span className="text - gray - 500"> • uploaded {new Date (d.uploadedAtIso).toLocaleString ()}</span>;
                  </li>))) : (
                <li > No documents</li>)}
            </ul>;
          </section>;
          <section className="rounded border p - 4 space - y-3">;
            <h2 className="font - medium">Shared notes / messages</h2>;
            <div className="space - y-2">;
              {project.notes?.length ? (
                project.notes.map ((number: any) => (
                  <div key={n.id} className="text - sm">;
                    <span className="font - medium">{n.author_role}</span>: {n.content}
                    <span className="text - gray - 500"> • {new Date (n.createdAtIso).toLocaleString ()}</span>;
                  </div>))) : (
                <div className="text - sm text - gray - 600">No notes yet.</div>)}
            </div>;
            <div className="flex gap - 2">;
              <input value={note} on_change={(e) => set_note (e.target.value)} placeholder="Add a note" className="flex - 1 border rounded px - 3 py - 2" />;
              <button on_click={add_note} className="px - 3 py - 2 rounded bg - gray - 900 text - white">Add</button>;
            </div>;
          </section>;
          <div className="flex justify - end">;
            {project.status !== "COMPLETED" && (
              <button on_click={mark_completed} className="px - 4 py - 2 rounded bg - emerald - 600 text - white">Mark as Completed</button>)}
          </div>;
        </div>)}
      <FeedbackModal;
        is_open={show_feedback}
        on_close={() => setShowFeedback (false)}
        default_context={{ action_type: 'chatbot_use', metadata: { project_id } }}
        user_headers={headers}
      />;
    </div>);

  const headers = {
    &quot;x-demo-user-role&quot;: &quot;client&quot;,
    &quot;x-demo-user-id&quot;: &quot;client-1&quot;,
    // For talent view demo, swap role and provide slug

  useEffect(() => {
    async function load() {
      if (!projectId) return,
      try {
      try {

        setLoading(true),
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers }),
        const json = await res.json()
        if (!json.ok) throw new Error(json.error || "Failed to load project"),
        setProject(json.project)
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
    }
  }

  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "mark_completed" })}),
    const json = await res.json()
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

          <section className=&quot;rounded border p-4&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Documents</h2>
            <ul className=&quot;list-disc pl-6 space-y-1 text-sm&quot;>
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (
                      <a href={d.url} className=&quot;text-indigo-600 underline&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{d.name}</Link>
                    ) : (
                      <span>{_d.name}</span>
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
        isOpen={_showFeedback}
        onClose={_() => setShowFeedback(false)}
        defaultContext={_{ actionType: 'chatbot_use', _metadata: { projectId} }}
        userHeaders={_headers}
      />
    </div>
  )

}