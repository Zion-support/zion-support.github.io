
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function ProjectPage() {
  const router = useRouter(),
  const { projectId } = router.query as { projectId?: string },
  const [project, setProject] = useState<any | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [note, setNote] = useState(""),

  const headers = {
    "x-demo-user-role": "client",
    "x-demo-user-id": "client-1",
    // For talent view demo, swap role and provide slug
    // "x-demo-user-role": "talent",
    // "x-demo-talent-slug": "ava-chen"} as Record<string, string>,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  useEffect(() => {
    async function load() {
      if (!projectId) return
      try {

        setProject(json.project)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)

    if (json.ok) {
      setProject(json.project)
      setNote("")
      setShowFeedback(true)

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

    if (json.ok) {
      setProject(json.project)

      setShowFeedback(true)
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

      {project && (

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Project Kickoff</h1>
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === "ACTIVE" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200"}`}>

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (json.ok) {
      setProject(json.project)

      setShowFeedback(true)
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                project.timeline.map((m: any) => (
                  <li key={m.id}>
                    <span className="font-medium">{m.title}</span>

            </ul>
          </section>

            </ul>
          </section>
          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Documents</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
=======
                  </li>))) : (
                <li > No timeline defined</li>)}
            </ul>;
          </section>;
          <section className="rounded border p - 4">;
            <h2 className="font - medium mb - 2">Documents</h2>;
            <ul className="list - disc pl - 6 space - y-1 text - sm">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (

                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>

                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    <span className="text-gray-500"> • {new Date(n.createdAtIso).toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-600">No notes yet.</div>

=======

              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            </div>
            <div className="flex gap-2">
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />
              <button onClick={addNote} className="px-3 py-2 rounded bg-gray-900 text-white">Add</button>
            </div>
          </section>
          <div className="flex justify-end">
            {project.status !== "COMPLETED" && (
              <button onClick={markCompleted} className="px-4 py-2 rounded bg-emerald-600 text-white">Mark as Completed</button>

      />
    </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  );
};

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

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
