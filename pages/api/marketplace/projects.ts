<<<<<<< HEAD

=======

import type { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

import {
  Project
  ProjectDocument
  ProjectNote
} from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {
  return res && res.status(code).json({ ok: false, error: message });
}
=======

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

<<<<<<< HEAD
=======
import {
  Project,
  ProjectDocument,
  ProjectNote,;
} from "../../../utils/marketplace/types";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { getDemoUser } from "../../../utils/marketplace/auth",
import { getProjectById, saveProject } from "../../../utils/marketplace/store",
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user && user.role === "client" && user && user.id === project && project.clientId) return true;
  if (user && user.role === "talent" && user && user.talentSlug === project && project.talentSlug)
    return true;
  return false;
<<<<<<< HEAD

=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser(req);

=======
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
<<<<<<< HEAD

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

=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
