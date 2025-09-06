<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

import {
  Project
  ProjectDocument
  ProjectNote
} from "../../../utils/marketplace/types";
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}
<<<<<<< HEAD
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug)
    return true;
  return false;
=======

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser(req);
<<<<<<< HEAD
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
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);
    if (req.method === "GET") {
      return res.json({ ok: true, project })
    }

    if (req.method === "PATCH") {
      const { action } = req.body as { action: string };
      if (action === "add_note") {
        const { content } = req.body as { content: string };
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {
          id: uuidv4(),
          authorId: user.id,
          authorRole: user.role,
          content,
          createdAtIso: new Date().toISOString()
        };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project });
      }
<<<<<<< HEAD
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
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        saveProject(project);
        return res.json({ ok: true, project })
      }
<<<<<<< HEAD
      return bad(res, "Unknown action");
    }
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode |500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message |"Server error" });

=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}