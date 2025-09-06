<<<<<<< HEAD
<<<<<<< HEAD:pages/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


<<<<<<< HEAD:pages_backup/project/[projectId].tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
=======
import { useEffect, useState } from "react";"
import { useRouter } from "next/router";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
import FeedbackModal from "../../components/ui/FeedbackModal";
export default function ProjectPage() {}
  const router = useRouter()
  const { projectId } = router.query as { projectId?: string }
  const [project, setProject] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)"
  const [note, setNote] = useState("")
  const headers = {"
    "x-demo-user-role": "client""
    "x-demo-user-id": "client-1"
    // For talent view demo, swap role and provide slug"
    // "x-demo-user-role": "talent""
    // "x-demo-talent-slug": "ava-chen"} as Record<string, string>
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======

import { useEffect, useState } from "react",;
import { useRouter } from "next/router",;
import FeedbackModal from "../../components/ui/FeedbackModal",;

=======
import { useEffect, useState } from "react",
import { useRouter } from "next/router",
import FeedbackModal from "../../components/ui/FeedbackModal",


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function ProjectPage() {
=======


export default function ProjectPage() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
  const router = useRouter(),
  const { projectId } = router.query as { projectId?: string },
  const [project, setProject] = useState<any | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),"
  const [note, setNote] = useState(""),

<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const headers = {
    "x-demo-user-role": "client",
=======
  const headers = {"
    "x-demo-user-role": "client","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
    "x-demo-user-id": "client-1",
    // For talent view demo, swap role and provide slug"
    // "x-demo-user-role": "talent","
    // "x-demo-talent-slug": "ava-chen"} as Record<string, string>,
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {
    async function load() {
      if (!projectId) return
      try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


        setLoading(true),
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers }),
        const json = await res.json(),
        if (!json.ok) throw new Error(json.error || "Failed to load project"),


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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      } catch (e: any) {
        set_error (e.message);
      } finally {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        setProject(json.project)
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
<<<<<<< HEAD

=======
=======
      } catch (e: any) {
        set_error (e.message);
      } finally {

        setLoading(false)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        } catch (error) {
    console.error("Error:", error);
=======


  useEffect(() => {}
    async function load() {};
      if (!projectId) return;
      try {}
      } catch (e: any) {}
        set_error (e.message);
      } finally {}
        setLoading(false)
        } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    load()
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
  }, [projectId]),
  const [showFeedback, setShowFeedback] = useState(false),
  async function addNote() {}
    const res = await fetch(`/api/marketplace/projects`, {"
      method: "PATCH","
      headers: { "Content-Type": "application/json", ...headers },"
      body: JSON.stringify({ id: projectId, action: "add_note", content: note })}),
    const json = await res.json(),
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    if (json.ok) {
      setProject(json.project)
      setNote("")
      setShowFeedback(true)
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH"
      headers: { "Content-Type": "application/json", ...headers }
      body: JSON.stringify({ id: projectId, action: "mark_completed" })})
    const json = await res.json()
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      } catch (error) {
    console.error("Error:", error);
=======

    if (json.ok) {}
      setProject(json.project)"
      setNote("")
      setShowFeedback(true)

      } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
    return res.status(500).json({ error: "Internal server error" });



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
}
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
=======
  async function markCompleted() {}`
    const res = await fetch(`/api/marketplace/projects`, {"
      method: "PATCH","
      headers: { "Content-Type": "application/json", ...headers },"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
      body: JSON.stringify({ id: projectId, action: "mark_completed" })}),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    const json = await res.json(),
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (json.ok) {
      setProject(json.project)

      setShowFeedback(true)
<<<<<<< HEAD
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    const json = await res.json(),
    if (json.ok) {
      setProject(json.project)

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/project/[projectId].tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useEffect, useState } from "react",
import { useRouter } from "next/router";
import FeedbackModal from "../../components/ui/FeedbackModal";
export default function ProjectPage() {
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
      setShowFeedback(true)
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {loading && <div>Loading…</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {error && <div className="text-red-600">{error}</div>  } catch (error) {
<<<<<<< HEAD
=======
=======
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


}
    } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
    if (json.ok) {
      setProject(json.project)

      setShowFeedback(true)
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {project && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Project Kickoff</h1>
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === "ACTIVE" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200"}`}>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {project.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



    if (json.ok) {}
      setProject(json.project)

      setShowFeedback(true)
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


      {project && ("
        <div className="space-y-6">"
          <div className="flex items-center gap-3">"
            <h1 className="text-2xl font-semibold">Project Kickoff</h1>"`
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === "ACTIVE" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200"}`}>

              {project.status  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
            </span>
          </div>"
          <section className="rounded border p-4">"
            <h2 className="font-medium mb-2">Project Summary</h2>"
            <div className="text-sm">
              <div><b>Client</b>: {project.clientId}</div>
              <div><b>Talent</b>: {project.talentSlug}</div>
              <div><b>Start</b>: {new Date(project.startDateIso).toLocaleDateString()}</div>"
              <div className="mt-2">{project.summary}</div>
            </div>
          </section>"
          <section className="rounded border p-4">"
            <h2 className="font-medium mb-2">Timeline</h2>"
            <ul className="list-disc pl-6 space-y-1 text-sm">
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
            </span>;
          </div>;"
          <section className="rounded border p - 4">;"
            <h2 className="font - medium mb - 2">Project Summary</h2>;"
            <div className="text - sm">;
              <div><b > Client</b>: {project.client_id}</div>;
              <div><b > Talent</b>: {project.talent_slug}</div>;
              <div><b > Start</b>: {new Date (project.startDateIso).toLocaleDateString ()}</div>;"
              <div className="mt - 2">{project.summary}</div>;
            </div>;
          </section>;"
          <section className="rounded border p - 4">;"
            <h2 className="font - medium mb - 2">Timeline</h2>;"
            <ul className="list - disc pl - 6 space - y-1 text - sm">;
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {project.timeline?.length ? (
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                project.timeline.map((m: any) => (
                  <li key={m.id}>
                    <span className="font-medium">{m.title}</span>
<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              {project.timeline?.length ? (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              {project.timeline?.length ? (
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
                    <span className="font-medium">{m.title}</span>;
                    {m.dueDateIso && <span> • due {new Date(m.dueDateIso).toLocaleDateString()}</span>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {m.amountUsd && <span> • ${m.amountUsd}</span>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {m.status && <span> • {m.status}</span>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </li>;
                ));
              ) : (;
                <li>No timeline defined</li>;
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx

            </ul>
          </section>

<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
            </ul>
          </section>"
          <section className="rounded border p-4">"
            <h2 className="font-medium mb-2">Documents</h2>"
            <ul className="list-disc pl-6 space-y-1 text-sm">
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
              {project.documents?.length ? (
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (

"
                      <a href={d.url} className="text-indigo-600 underline" target="_blank" rel="noreferrer">{d.name}</Link>
                    ) : (
                      <span>{d.name}</span>
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              {project.documents?.length ? (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

                    )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>

                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </li>
                ))
              ) : (
                <li>No documents</li>
              )}
            </ul>
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
          </section>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <section className="rounded border p-4 space-y-3">
            <h2 className="font-medium">Shared notes/messages</h2>
=======
          </section>"
          <section className="rounded border p-4 space-y-3">"
            <h2 className="font-medium">Shared notes/messages</h2>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
            <div className="space-y-2">
              {project.notes?.length ? (
                project.notes.map((n: any) => ("
                  <div key={n.id} className="text-sm">
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


                    <span className="font-medium">{n.authorRole}</span>: {n.content  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
                    <span className="text-gray-500"> • {new Date(n.createdAtIso).toLocaleString()}</span>
                  </div>
                ))
              ) : ("
                <div className="text-sm text-gray-600">No notes yet.</div>
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:pages_backup/project/[projectId].tsx
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>
            <div className="flex gap-2">
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />
=======
            </div>"
            <div className="flex gap-2">"
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
              <button onClick={addNote} className="px-3 py-2 rounded bg-gray-900 text-white">Add</button>
            </div>
          </section>"
          <div className="flex justify-end">"
            {project.status !== "COMPLETED" && ("
              <button onClick={markCompleted} className="px-4 py-2 rounded bg-emerald-600 text-white">Mark as Completed</button>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD:pages/project/[projectId].tsx
<<<<<<< HEAD

<<<<<<< HEAD
      />
    </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx


            )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}





  );
};

<<<<<<< HEAD:pages_backup/project/[projectId].tsx
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
};

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            )  } catch (error) {
    console.error("Error:", error);
=======

            )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <FeedbackModal;
        isOpen={showFeedback  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        onClose={() => setShowFeedback(false)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        defaultContext={{ actionType: 'chatbot_use', metadata: { projectId } }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        userHeaders={headers  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />;
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/project/[projectId].tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx


<<<<<<< HEAD:pages_backup/project/[projectId].tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/project/[projectId].tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/project/[projectId].tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/project/[projectId].tsx
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/project/[projectId].tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
