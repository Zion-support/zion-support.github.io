<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message})
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role = { error: "Invalid request" };
  if (user.role = { error: "Invalid request" };
  return false
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser({ error: "Invalid request" });
    const { id } = (req.method = { error: "Invalid request" };
    if (!id) return bad({ error: "Invalid request" });
    const project = getProjectById({ error: "Invalid request" });
    if (!project) return bad({ error: "Invalid request" });
    if (!canAccess(user, project)) return bad({ error: "Invalid request" });
    if (req.method === "GET") {
      return res.json({ ok: true, project })
    }

    if (req.method = { error: "Invalid request" };
      if (action = { error: "Invalid request" };
        if (!content) return bad({ error: "Invalid request" });
        const note: ProjectNote = {
          id: uuidv4({ error: "Invalid request" });
          authorId: user.id
          authorRole: user.role
          content
          createdAtIso: new Date().toISOString()}
        project.notes.push({ error: "Invalid request" });
        saveProject({ error: "Invalid request" });
        return res.json({ ok: true, project })
      }

      if (action === "add_document") {
        const { name, url } = req.body as { name: string, url?: string }
        if (!name) return bad({ error: "Invalid request" });
        const doc: ProjectDocument = {
          id: uuidv4({ error: "Invalid request" });
          name
          url
          uploadedAtIso: new Date().toISOString()}
        project.documents.push({ error: "Invalid request" });
        saveProject({ error: "Invalid request" });
        return res.json({ ok: true, project })
      }

      if (action = { error: "Invalid request" };
        project.timeline = { error: "Invalid request" };
        saveProject({ error: "Invalid request" });
        return res.json({ ok: true, project })
      }

      if (action = { error: "Invalid request" };
        saveProject({ error: "Invalid request" });
        return res.json({ ok: true, project })
      }

      return bad(res, "Unknown action")
    }

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = { error: "Invalid request" };
    return res.status(status).json({ ok: false, error: e ?.message || "Server error" })
  }
}
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
