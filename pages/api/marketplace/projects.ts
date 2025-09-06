
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug)
    return true;
  return false;

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false

}
export default function handler(req: NextApiRequest, res: NextApiResponse) {

        const note: ProjectNote = {
          id: uuidv4(),
          authorId: user.id,
          authorRole: user.role,
          content,

        };

        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project });
      }

        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,

        saveProject(project);
        return res.json({ ok: true, project })
      }

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })

  }

  }
}

