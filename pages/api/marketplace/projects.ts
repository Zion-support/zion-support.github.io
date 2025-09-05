<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { getDemoUser } from "../../../utils/marketplace/auth",
import { getProjectById, saveProject } from "../../../utils/marketplace/store",
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types",
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;
import { getDemoUser } from &quot;../../../utils/marketplace/auth&quot;;
import { getProjectById, saveProject } from &quot;../../../utils/marketplace/store&quot;;
import { Project, ProjectDocument, ProjectNote } from &quot;../../../utils/marketplace/types&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
<<<<<<< HEAD
  if (user.role === "client" && user.id === project.clientId) return true,
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true,
  return false
=======
  if (user.role === &quot;client&quot; && user.id === project.clientId) return true;
  if (user.role === &quot;talent&quot; && user.talentSlug === project.talentSlug) return true;
  return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
    const user = getDemoUser(req),
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string },
    if (!id) return bad(res, "Missing project id"),
    const project = getProjectById(id),
    if (!project) return bad(res, "Not found", 404),
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403),

    if (req.method === "GET") {
      return res.json({ ok: true, project })
    }

    if (req.method === "PATCH") {
      const { action } = req.body as { action: string },

      if (action === "add_note") {
        const { content } = req.body as { content: string },
        if (!content) return bad(res, "Missing content"),
=======
    const user = getDemoUser(req);
    const { id } = (req.method === &quot;GET&quot; ? req.query : req.body) as { id?: string };
    if (!id) return bad(res, &quot;Missing project id&quot;);
    const project = getProjectById(id);
    if (!project) return bad(res, &quot;Not found&quot;, 404);
    if (!canAccess(user, project)) return bad(res, &quot;Forbidden&quot;, 403);

    if (req.method === &quot;GET&quot;) {
      return res.json({ ok: true, project });
    }

    if (req.method === &quot;PATCH&quot;) {
      const { action } = req.body as { action: string };

      if (action === &quot;add_note&quot;) {
        const { content } = req.body as { content: string };
        if (!content) return bad(res, &quot;Missing content&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        const note: ProjectNote = {
          id: uuidv4(),
          authorId: user.id,
          authorRole: user.role,
          content,
          createdAtIso: new Date().toISOString()},
        project.notes.push(note),
        saveProject(project),
        return res.json({ ok: true, project })
      }

<<<<<<< HEAD
      if (action === "add_document") {
        const { name, url } = req.body as { name: string, url?: string },
        if (!name) return bad(res, "Missing name"),
=======
      if (action === &quot;add_document&quot;) {
        const { name, url } = req.body as { name: string; url?: string };
        if (!name) return bad(res, &quot;Missing name&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString()},
        project.documents.push(doc),
        saveProject(project),
        return res.json({ ok: true, project })
      }

<<<<<<< HEAD
      if (action === "update_timeline") {
        const { timeline } = req.body as { timeline: Project["timeline"] },
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline,
        saveProject(project),
        return res.json({ ok: true, project })
      }

      if (action === "mark_completed") {
        project.status = "COMPLETED",
        saveProject(project),
        return res.json({ ok: true, project })
      }

      return bad(res, "Unknown action")
    }

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500,
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
=======
      if (action === &quot;update_timeline&quot;) {
        const { timeline } = req.body as { timeline: Project[&quot;timeline&quot;] };
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({_ok: true, _project});
      }

<<<<<<< HEAD
      if (action === &quot;mark_completed&quot;) {
        project.status = &quot;COMPLETED&quot;;
=======
      if (action === "mark_completed") {_project.status = "COMPLETED";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        saveProject(project);
        return res.json({ ok: true, _project});
      }

      return bad(res, &quot;Unknown action&quot;);
    }

<<<<<<< HEAD
    return bad(res, &quot;Method not allowed&quot;, 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || &quot;Server error&quot; });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    return bad(res, "Method not allowed", 405);
  } catch (e: unknown) {_const _status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, _error: e?.message || "Server error"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}