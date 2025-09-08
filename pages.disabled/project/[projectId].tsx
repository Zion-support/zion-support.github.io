







import { useEffect, useState } from "react",
import { useRouter } from "next/router",
import FeedbackModal from "../../components/ui/FeedbackModal",





export default function ProjectPage() {

  const router = useRouter(),
  const { projectId } = router.query as { projectId?: string },
  const [project, setProject] = useState<any | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),"
  const [note, setNote] = useState(""),

  const headers = {
    "x-demo-user-role": "client",

    "x-demo-user-id": "client-1",
    // For talent view demo, swap role and provide slug"
    // "x-demo-user-role": "talent","
    // "x-demo-talent-slug": "ava-chen"} as Record<string, string>,





  useEffect(() => {
    async function load() {
      if (!projectId) return
      try {



        setLoading(true),
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers }),
        const json = await res.json(),
        if (!json.ok) throw new Error(json.error || "Failed to load project"),




  }, [projectId]),
  const [showFeedback, setShowFeedback] = useState(false),
  async function addNote() {}
    const res = await fetch(`/api/marketplace/projects`, {"
      method: "PATCH","
      headers: { "Content-Type": "application/json", ...headers },"
      body: JSON.stringify({ id: projectId, action: "add_note", content: note })}),
    const json = await res.json(),

    if (json.ok) {
      setProject(json.project)
      setNote("")
      setShowFeedback(true)





      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

      } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });

  }
}
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },

      body: JSON.stringify({ id: projectId, action: "mark_completed" })}),

    const json = await res.json(),

    if (json.ok) {
      setProject(json.project)

      setShowFeedback(true)


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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              {project.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




            </div>
          </section>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Timeline</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">


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


            </ul>
          </section>

            </ul>
          </section>"
          <section className="rounded border p-4">"
            <h2 className="font-medium mb-2">Documents</h2>"
            <ul className="list-disc pl-6 space-y-1 text-sm">

                  </li>))) : (
                <li > No timeline defined</li>)}
            </ul>;
          </section>;
          <section className="rounded border p - 4">;
            <h2 className="font - medium mb - 2">Documents</h2>;
            <ul className="list - disc pl - 6 space - y-1 text - sm">;



              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (



                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>

                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>

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

          <section className="rounded border p-4 space-y-3">
            <h2 className="font-medium">Shared notes/messages</h2>

            <div className="space-y-2">
              {project.notes?.length ? (
                project.notes.map((n: any) => ("
                  <div key={n.id} className="text-sm">



                    <span className="font-medium">{n.authorRole}</span>: {n.content  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




                    <span className="text-gray-500"> • {new Date(n.createdAtIso).toLocaleString()}</span>
                  </div>
                ))
              ) : ("
                <div className="text-sm text-gray-600">No notes yet.</div>



              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




            </div>
            <div className="flex gap-2">
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />

              <button onClick={addNote} className="px-3 py-2 rounded bg-gray-900 text-white">Add</button>
            </div>
          </section>"
          <div className="flex justify-end">"
            {project.status !== "COMPLETED" && ("
              <button onClick={markCompleted} className="px-4 py-2 rounded bg-emerald-600 text-white">Mark as Completed</button>





  );
};

            )  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
});
};

            )  } catch (error) {
    console.error("Error:", error);

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





