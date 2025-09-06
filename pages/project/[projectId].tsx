<<<<<<< HEAD
<<<<<<< HEAD


=======


=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD

import { useEffect, useState } from "react",;
import { useRouter } from "next/router",;
import FeedbackModal from "../../components/ui/FeedbackModal",;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useEffect, useState } from "react",
import { useRouter } from "next/router",
import FeedbackModal from "../../components/ui/FeedbackModal",

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { useEffect, useState } from "react",;
import { useRouter } from "next/router",;
import FeedbackModal from "../../components/ui/FeedbackModal",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect, useState } from "react",
import { useRouter } from "next/router",
import FeedbackModal from "../../components/ui/FeedbackModal",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function ProjectPage() {
  const router = useRouter(),
  const { projectId } = router.query as { projectId?: string },
  const [project, setProject] = useState<any | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [note, setNote] = useState(""),
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const headers = {
    "x-demo-user-role": "client",
    "x-demo-user-id": "client-1",
    // For talent view demo, swap role and provide slug
    // "x-demo-user-role": "talent",
    // "x-demo-talent-slug": "ava-chen"} as Record<string, string>,
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {
    async function load() {
      if (!projectId) return
      try {
<<<<<<< HEAD

<<<<<<< HEAD
=======

        setLoading(true),
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers }),
        const json = await res.json(),
        if (!json.ok) throw new Error(json.error || "Failed to load project"),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
        setLoading(true)
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers })
        const json = await res.json()
        if (!json.ok) throw new Error(json.error |"Failed to load project")
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

        setLoading(false)
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
    load()

<<<<<<< HEAD
=======
  }, [projectId]),
  const [showFeedback, setShowFeedback] = useState(false),
  async function addNote() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "add_note", content: note })}),
    const json = await res.json(),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (json.ok) {
      setProject(json.project)
      setNote("")
      setShowFeedback(true)

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "mark_completed" })}),
    const json = await res.json(),
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (json.ok) {
      setProject(json.project)

      setShowFeedback(true)
<<<<<<< HEAD
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

      {loading && <div>Loading…</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {error && <div className="text-red-600">{error}</div>  } catch (error) {
=======
=======
=======
        set_loading (false);
      }
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
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
=======
=======
        setLoading(true),
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers }),
        const json = await res.json(),
        if (!json.ok) throw new Error(json.error || "Failed to load project"),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        setProject(json.project)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
<<<<<<< HEAD
      }

    }
    load()
  }, [projectId]),

  const [showFeedback, setShowFeedback] = useState(false),

  async function addNote() {
    const res = await fetch(`/api/marketplace/projects`, {
    }
  }

=======
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
    load()
<<<<<<< HEAD
  }, [projectId])
  const [showFeedback, setShowFeedback] = useState(false)
  async function addNote() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH"
      headers: { "Content-Type": "application/json", ...headers }
      body: JSON.stringify({ id: projectId, action: "add_note", content: note })})
    const json = await res.json()
=======
  }, [projectId]),
  const [showFeedback, setShowFeedback] = useState(false),
  async function addNote() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "add_note", content: note })}),
    const json = await res.json(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (json.ok) {
      setProject(json.project)
      setNote("")
      setShowFeedback(true)
<<<<<<< HEAD
    }
<<<<<<< HEAD
  }
  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH"
      headers: { "Content-Type": "application/json", ...headers }
      body: JSON.stringify({ id: projectId, action: "mark_completed" })})
    const json = await res.json()
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "mark_completed" })}),
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


}
    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      {project && (
=======
      {_loading && <div>Loading…</div>}
      {_error && <div className="text-red-600">{error}</div>}
      {_project && (
=======
    const json = await res.json(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (json.ok) {
      setProject(json.project)

      setShowFeedback(true)
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}
=======
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {loading && <div>Loading…</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {error && <div className="text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {project && (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Project Kickoff</h1>
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === "ACTIVE" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200"}`}>
<<<<<<< HEAD

<<<<<<< HEAD
=======
              {project.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              {_project.status}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </span>
          </div>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Project Summary</h2>
            <div className="text-sm">
<<<<<<< HEAD
              <div><b>Client</b>: {project.clientId}</div>
              <div><b>Talent</b>: {project.talentSlug}</div>
              <div><b>Start</b>: {new Date(project.startDateIso).toLocaleDateString()}</div>
              <div className="mt-2">{project.summary}</div>
=======
              <div><b>Client</b>: {_project.clientId}</div>
              <div><b>Talent</b>: {_project.talentSlug}</div>
              <div><b>Start</b>: {_new Date(project.startDateIso).toLocaleDateString()}</div>
              <div className="mt-2">{_project.summary}</div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </section>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Timeline</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              {project.timeline?.length ? (

                project.timeline.map((m: any) => (
                  <li key={m.id}>
                    <span className="font-medium">{m.title}</span>

<<<<<<< HEAD
=======
              {_project.timeline?.length ? (_project.timeline.map((m: unknown) => (
                  <li key={m.id}>
                    <span className="font-medium">{_m.title}</span>
                    {_m.dueDateIso && <span> • due {new Date(m.dueDateIso).toLocaleDateString()}</span>}
                    {_m.amountUsd && <span> • ${m.amountUsd}</span>}
                    {_m.status && <span> • {m.status}</span>}

=======
<<<<<<< HEAD
              {project.status}
=======
              {project.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </span>
          </div>
          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Project Summary</h2>
            <div className="text-sm">
              <div><b>Client</b>: {project.clientId}</div>
              <div><b>Talent</b>: {project.talentSlug}</div>
              <div><b>Start</b>: {new Date(project.startDateIso).toLocaleDateString()}</div>
              <div className="mt-2">{project.summary}</div>
            </div>
          </section>
          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Timeline</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {project.timeline?.length ? (
                project.timeline.map((m: any) => (
                  <li key={m.id}>
                    <span className="font-medium">{m.title}</span>
<<<<<<< HEAD
                    {m.dueDateIso && <span> • due {new Date(m.dueDateIso).toLocaleDateString()}</span>}
                    {m.amountUsd && <span> • ${m.amountUsd}</span>}
                    {m.status && <span> • {m.status}</span>}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </li>
                ))
              ) : (
                <li>No timeline defined</li>
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FeedbackModal from "../../components/ui/FeedbackModal";
export default function ProjectPage(req, res) {
  try {
  const router = useRouter();
  const { projectId } = router.query as { projectId?: string };
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const headers = {;
    "x-demo-user-role": "client";
    "x-demo-user-id": "client-1";
    // For talent view demo, swap role and provide slug;
    // "x-demo-user-role": "talent",;
    // "x-demo-talent-slug": "ava-chen"} as Record<string, string>,;
  useEffect(() => {;
    async function load() {;
      if (!projectId) return,;
      try {
        setLoading(true);
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers });
        const json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load project");
        setProject(json.project);
      } catch (error) {
        setError(e.message);
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
    load();
  }, [projectId]),;
  const [showFeedback, setShowFeedback] = useState(false);
  async function addNote() {;
    const res = await fetch(`/api/marketplace/projects`, {;
      method: "PATCH",;
      headers: { "Content-Type": "application/json", ...headers },;
      body: JSON.stringify({ id: projectId, action: "add_note", content: note })}),;
    const json = await res.json();
    if (json.ok) {;
      setProject(json.project);
      setNote("");
      setShowFeedback(true);
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
;
  async function markCompleted() {;
    const res = await fetch(`/api/marketplace/projects`, {;
      method: "PATCH",;
      headers: { "Content-Type": "application/json", ...headers },;
      body: JSON.stringify({ id: projectId, action: "mark_completed" })}),;
    const json = await res.json();
    if (json.ok) {;
      setProject(json.project);
      setShowFeedback(true);
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
;
  return (;
    <div className="max-w-4xl mx-auto p-6 space-y-6">;
      {loading && <div>Loading…</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {error && <div className="text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {project && (;
        <div className="space-y-6">;
          <div className="flex items-center gap-3">;
            <h1 className="text-2xl font-semibold">Project Kickoff</h1>;
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === "ACTIVE" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200"}`}>;
              {project.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </span>;
          </div>;
          <section className="rounded border p-4">;
            <h2 className="font-medium mb-2">Project Summary</h2>;
            <div className="text-sm">;
              <div><b>Client</b>: {project.clientId}</div>;
              <div><b>Talent</b>: {project.talentSlug}</div>;
              <div><b>Start</b>: {new Date(project.startDateIso).toLocaleDateString()}</div>;
              <div className="mt-2">{project.summary}</div>;
            </div>;
          </section>;
          <section className="rounded border p-4">;
            <h2 className="font-medium mb-2">Timeline</h2>;
            <ul className="list-disc pl-6 space-y-1 text-sm">;
              {project.timeline?.length ? (;
                project.timeline.map((m: any) => (;
                  <li key={m.id}>;
                    <span className="font-medium">{m.title}</span>;
                    {m.dueDateIso && <span> • due {new Date(m.dueDateIso).toLocaleDateString()}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {m.amountUsd && <span> • ${m.amountUsd}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {m.status && <span> • {m.status}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </li>;
                ));
              ) : (;
                <li>No timeline defined</li>;
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </ul>
          </section>
          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Documents</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
<<<<<<< HEAD
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (

=======
=======
                  </li>))) : (
                <li > No timeline defined</li>)}
            </ul>;
          </section>;
          <section className="rounded border p - 4">;
            <h2 className="font - medium mb - 2">Documents</h2>;
            <ul className="list - disc pl - 6 space - y-1 text - sm">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </ul>
          </section>
<<<<<<< HEAD

          <section className=&quot;rounded border p-4&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Documents</h2>
            <ul className=&quot;list-disc pl-6 space-y-1 text-sm&quot;>
=======
          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Documents</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (
<<<<<<< HEAD


                      <a href={d.url} className="text-indigo-600 underline" target="_blank" rel="noreferrer">{d.name}</Link>
                    ) : (
                      <span>{d.name}</span>
=======
<<<<<<< HEAD
                      <a href={d.url} className=&quot;text-indigo-600 underline&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{d.name}</Link>
                    ) : (
                      <span>{_d.name}</span>
                    )}
                    <span className=&quot;text-gray-500&quot;> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
=======
<<<<<<< HEAD
                      <a href={d.url} className="text-indigo-600 underline" target="_blank" rel="noreferrer">{d.name}</a>
                    ) : (
                      <span>{d.name}</span>
                    )}
=======
                      <a href={d.url} className="text-indigo-600 underline" target="_blank" rel="noreferrer">{d.name}</Link>
                    ) : (
                      <span>{d.name}</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </li>
                ))
              ) : (
                <li>No documents</li>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>
          </section>
<<<<<<< HEAD
=======
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <section className="rounded border p-4 space-y-3">
            <h2 className="font-medium">Shared notes/messages</h2>
            <div className="space-y-2">
              {project.notes?.length ? (
                project.notes.map((n: any) => (
                  <div key={n.id} className="text-sm">
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
                    <span className="font-medium">{n.authorRole}</span>: {n.content}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <span className="font-medium">{n.authorRole}</span>: {n.content  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <span className="text-gray-500"> • {new Date(n.createdAtIso).toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-600">No notes yet.</div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
              )}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
            <div className="flex gap-2">
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />
              <button onClick={addNote} className="px-3 py-2 rounded bg-gray-900 text-white">Add</button>
            </div>
          </section>
          <div className="flex justify-end">
            {project.status !== "COMPLETED" && (
              <button onClick={markCompleted} className="px-4 py-2 rounded bg-emerald-600 text-white">Mark as Completed</button>
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
}

=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            )}
          </div>
        </div>
      )}
      <FeedbackModal
<<<<<<< HEAD
        isOpen={_showFeedback}
        onClose={_() => setShowFeedback(false)}
        defaultContext={_{ actionType: 'chatbot_use', _metadata: { projectId} }}
        userHeaders={_headers}
=======
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        defaultContext={{ actionType: 'chatbot_use', metadata: { projectId } }}
        userHeaders={headers}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      />
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD

}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  );
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <FeedbackModal;
        isOpen={showFeedback  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        onClose={() => setShowFeedback(false)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        defaultContext={{ actionType: 'chatbot_use', metadata: { projectId } }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        userHeaders={headers  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
