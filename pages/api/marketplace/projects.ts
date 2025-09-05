import type {_NextApiRequest, _NextApiResponse} from "next";

function bad(_res: NextApiResponse, _message: string, _code = 400) {_return res.status(code).json({ ok: false, _error: message});
}

function canAccess(_user: ReturnType<typeof getDemoUser>, _project: Project) {_if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false;}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _user = getDemoUser(req);
    const { id} = (req.method === "GET" ? req.query : req.body) as {_id?: string};
    if (!id) return bad(res, "Missing project id");
    const _project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);

    if (req.method === "GET") {_return res.json({ ok: true, _project});
    }

    if (req.method === "PATCH") {_const { action} = req.body as {_action: string};

      if (action === "add_note") {_const { content} = req.body as {_content: string};
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {_id: uuidv4(), _authorId: user.id, _authorRole: user.role, _content, _createdAtIso: new Date().toISOString()};
        project.notes.push(note);
        saveProject(project);
        return res.json({_ok: true, _project});
      }

      if (action === "add_document") {_const { name, _url} = req.body as {_name: string; url?: string};
        if (!name) return bad(res, "Missing name");
        const doc: ProjectDocument = {_id: uuidv4(), _name, _url, _uploadedAtIso: new Date().toISOString()};
        project.documents.push(doc);
        saveProject(project);
        return res.json({_ok: true, _project});
      }

      if (action === "update_timeline") {_const { timeline} = req.body as {_timeline: Project["timeline"]};
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({_ok: true, _project});
      }

      if (action === "mark_completed") {_project.status = "COMPLETED";
        saveProject(project);
        return res.json({ ok: true, _project});
      }

      return bad(res, "Unknown action");
    }

    return bad(res, "Method not allowed", 405);
  } catch (e: unknown) {_const _status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, _error: e?.message || "Server error"});
  }
}