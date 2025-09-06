<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextApiRequest, NextApiResponse } from "next",
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
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
<<<<<<< HEAD
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user && user.role === "client" && user && user.id === project && project.clientId) return true;
  if (user && user.role === "talent" && user && user.talentSlug === project && project.talentSlug)
    return true;
  return false;
<<<<<<< HEAD
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser(req);
    const { id } = (req && req.method === "GET" ? req && req.query : req && req.body) as {
      id?: string;
    }
    const { id } = (req && req.method === "GET" ? req && req.query : req && req.body) as {
      id?: string;
    };
=======
=======
<<<<<<< HEAD

=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
<<<<<<< HEAD
  try {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);
<<<<<<< HEAD
    if (req && req.method === "GET") {
      return res && res.json({ ok: true, project });
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
        project.notes.push(note);
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      if (action === "add_document") {
        const { name, url } = req.body as { name: string; url?: string }
        if (!name) return bad(res, "Missing name");
=======

    if (req.method === "PATCH") {
      const { action } = req.body as { action: string };
      if (action === "add_note") {
        const { content } = req.body as { content: string };
        if (!content) return bad(res, "Missing content");
<<<<<<< HEAD
=======
=======
  try {
    if (req.method === 'GET') {
      res.status(200).json({ projects: [] });
    } else if (req.method === 'POST') {
      const project = {
        id: 'project-id',
        title: 'New Project',
        description: 'Project description',
        status: 'active',
        createdAtIso: new Date().toISOString()
      };
      res.status(201).json({
        ok: true,
        project
      });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end('Method Not Allowed');
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
  } catch (error) {
    return bad(res, "Internal server error", 500);
    const user = getDemoUser(req),
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string },
    if (!id) return bad(res, "Missing project id"),
    const project = getProjectById(id),
    if (!project) return bad(res, "Not found", 404),
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403),
    if (req.method === "GET") {
      return res.json({ ok: true, project })
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
    if (req.method === "PATCH") {
      const { action } = req.body as { action: string },
      if (action === "add_note") {
        const { content } = req.body as { content: string },
        if (!content) return bad(res, "Missing content"),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        const note: ProjectNote = {
          id: uuidv4(),
          authorId: user.id,
          authorRole: user.role,
          content,
<<<<<<< HEAD
          createdAtIso: new Date().toISOString()
=======
<<<<<<< HEAD
          createdAtIso: new Date().toISOString(),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        const doc: ProjectDocument = {
          id: uuidv4()
          name
          url
          uploadedAtIso: new Date().toISOString()
        }
<<<<<<< HEAD
        project.documents.push(doc);
        const doc: ProjectDocument = {
          id: uuidv4 (),
          name,
          url,
          uploadedAtIso: new Date().toISOString(),
        };
        project && project.documents.push(doc);
        saveProject(project);
        return res && res.json({ ok: true, project });
=======
=======
=======
          createdAtIso: new Date().toISOString()},
        project.notes.push(note),
        saveProject(project),
        return res.json({ ok: true, project })
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
      if (action === "add_document") {
        const { name, url } = req.body as { name: string, url?: string },
        if (!name) return bad(res, "Missing name"),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
<<<<<<< HEAD
          uploadedAtIso: new Date().toISOString(),
        };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project });
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      }
      if (action === "update_timeline") {
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.isArray(timeline)
          ? timeline
<<<<<<< HEAD
          : project && project.timeline;
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      if (action === "mark_completed") {
        project && project.status = "COMPLETED";
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      return bad(res, "Unknown action");
    }
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode |500;
    return res
      .status(status)
<<<<<<< HEAD
      .json({ ok: false, error: e?.message || "Server error" });
  }
}
          uploadedAtIso: new Date ().toISOString (),
        }
        project.documents.push (doc);
        save_project (project);
        return res.json ({ ok: true, project });
      }
      // Check condition
if ( {) {
  $2
}
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.is_array (timeline);
          ? timeline;
          : project.timeline;
        save_project (project);
        return res.json ({ ok: true, project });
      }
      // Check condition
if ( {) {
  $2
}
        project.status = "COMPLETED";
        save_project (project);
        return res.json ({ ok: true, project });
      }
      return bad (res, "Unknown action");
    }
    return bad (res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.status_code || 500;
    return res;
      .status (status);
      .json ({ ok: false, error: e?.message || "Server error" });
  }
}
=======
      .json({ ok: false, error: e?.message |"Server error" });

=======

      if (action === "mark_completed") {
        project.status = "COMPLETED";
        saveProject(project);
        return res.json({ ok: true, project })
      }

      return bad(res, "Unknown action")
    }

<<<<<<< HEAD
=======
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message || "Server error" });
=======
          uploadedAtIso: new Date().toISOString()},
        project.documents.push(doc),
        saveProject(project),
        return res.json({ ok: true, project })
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
      if (action === "update_timeline") {
        const { timeline } = req.body as { timeline: Project["timeline"] },
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline,
        saveProject(project),
        return res.json({ ok: true, project })
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
;
      if (action === "mark_completed") {;
        project.status = "COMPLETED";
        saveProject(project);
        return return res.json({ ok: true, project });
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
;
      return bad(res, "Unknown action");
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
<<<<<<< HEAD
}
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
