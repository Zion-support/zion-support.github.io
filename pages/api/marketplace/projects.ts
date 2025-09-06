

import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

import {
  Project
  ProjectDocument
  ProjectNote
} from "../../../utils/marketplace/types";
<<<<<<< HEAD
=======
function bad(res: NextApiResponse, message: string, code = 400) {
  return res && res.status(code).json({ ok: false, error: message });
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

<<<<<<< HEAD
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {
  Project,
  ProjectDocument,
  ProjectNote,;
} from "../../../utils/marketplace/types";
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

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user && user.role === "client" && user && user.id === project && project.clientId) return true;
  if (user && user.role === "talent" && user && user.talentSlug === project && project.talentSlug)
    return true;
  return false;




  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
<<<<<<< HEAD

}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {


=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD

  try {;

    const user = getDemoUser(req);
    const { id } = (req.method === "GET" ? req.query : req.body) as {
      id?: string;
    }
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);
    if (req.method === "GET") {
      return res.json({ ok: true, project });
    }
    if (req.method === "PATCH") {
      const { action } = req.body as { action: string }
      if (action === "add_note") {
        const { content } = req.body as { content: string }
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {
          id: uuidv4()
          authorId: user.id
          authorRole: user.role
          content
          createdAtIso: new Date().toISOString()
        }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);

<<<<<<< HEAD

    if (req.method === "PATCH") {
      const { action } = req.body as { action: string };
      if (action === "add_note") {
        const { content } = req.body as { content: string };
        if (!content) return bad(res, "Missing content");

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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
      if (action === "add_document") {
        const { name, url } = req.body as { name: string; url?: string }
        if (!name) return bad(res, "Missing name");


        const doc: ProjectDocument = {
          id: uuidv4()
          name
          url
          uploadedAtIso: new Date().toISOString()
        }


        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project });
      }
      if (action === "update_timeline") {
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.isArray(timeline)
          ? timeline
          : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project });
      }
      if (action === "mark_completed") {
        project.status = "COMPLETED";

      if (action === "add_document") {
        const { name, url } = req.body as { name: string, url?: string };
        if (!name) return bad(res, "Missing name");
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString()
        };
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project })
      }

      if (action === "update_timeline") {
        const { timeline } = req.body as { timeline: Project["timeline"] };
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project })
      }
      return bad(res, "Unknown action");
    }
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode |500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message |"Server error" });


      if (action === "mark_completed") {
        project.status = "COMPLETED";
        saveProject(project);
        return res.json({ ok: true, project })
      }

      return bad(res, "Unknown action")
    }



    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
  }



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
