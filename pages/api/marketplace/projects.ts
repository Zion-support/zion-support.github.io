import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message})
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role = $2;
  return false
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser($2);
    const { id } = (req.method = $2;
    if (!id) return bad($2);
    const project = getProjectById($2);
    if (!project) return bad($2);
    if (!canAccess(user, project)) return bad($2);
    if (req.method === "GET") {
      return res.json({ ok: true, project })
    }

    if (req.method = $2;
      if (action = $2;
        if (!content) return bad($2);
        const note: ProjectNote = {
          id: uuidv4($2);
          authorId: user.id,
          authorRole: user.role,
          content,
          createdAtIso: new Date().toISOString()},
        project.notes.push($2);
        saveProject($2);
        return res.json({ ok: true, project })
      }

      if (action === "add_document") {
        const { name, url } = req.body as { name: string, url?: string },
        if (!name) return bad($2);
        const doc: ProjectDocument = {
          id: uuidv4($2);
          name,
          url,
          uploadedAtIso: new Date().toISOString()},
        project.documents.push($2);
        saveProject($2);
        return res.json({ ok: true, project })
      }

      if (action = $2;
        project.timeline = $2;
        saveProject($2);
        return res.json({ ok: true, project })
      }

      if (action = $2;
        saveProject($2);
        return res.json({ ok: true, project })
      }

      return bad(res, "Unknown action")
    }

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = $2;
    return res.status(status).json({ ok: false, error: e ?.message || "Server error" })
  }
