import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { v4 as uuidv4 } from &quot;uuid&quot;;
import { getDemoUser } from &quot;../../../utils/marketplace/auth&quot;;
import { getProjectById, saveProject } from &quot;../../../utils/marketplace/store&quot;;
import { Project, ProjectDocument, ProjectNote } from &quot;../../../utils/marketplace/types&quot;;

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message });
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === &quot;client&quot; && user.id === project.clientId) return true;
  if (user.role === &quot;talent&quot; && user.talentSlug === project.talentSlug) return true;
  return false;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
        const note: ProjectNote = {
          id: uuidv4(),
          authorId: user.id,
          authorRole: user.role,
          content,
          createdAtIso: new Date().toISOString()};
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project });
      }

      if (action === &quot;add_document&quot;) {
        const { name, url } = req.body as { name: string; url?: string };
        if (!name) return bad(res, &quot;Missing name&quot;);
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString()};
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project });
      }

      if (action === &quot;update_timeline&quot;) {
        const { timeline } = req.body as { timeline: Project[&quot;timeline&quot;] };
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project });
      }

      if (action === &quot;mark_completed&quot;) {
        project.status = &quot;COMPLETED&quot;;
        saveProject(project);
        return res.json({ ok: true, project });
      }

      return bad(res, &quot;Unknown action&quot;);
    }

    return bad(res, &quot;Method not allowed&quot;, 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || &quot;Server error&quot; });
  }
}