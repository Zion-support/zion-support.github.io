
import type { NextApiRequest, NextApiResponse } from "next";

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
=======
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

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

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user && user.role === "client" && user && user.id === project && project.clientId) return true;
  if (user && user.role === "talent" && user && user.talentSlug === project && project.talentSlug)
    return true;
  return false;

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser(req);

<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
<<<<<<< HEAD
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser(req);
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);
<<<<<<< HEAD
<<<<<<< HEAD
    if (req && req.method === "PATCH") {
      const { action } = req && req.body as { action: string };
      if (action === "add_note") {
        const { content } = req && req.body as { content: string };
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {
          id: uuidv4(),
          authorId: user && user.id,
          authorRole: user && user.role,
          content,
          createdAtIso: new Date().toISOString(),
        };
        project && project.notes.push(note);
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      if (action === "add_document") {
        const { name, url } = req && req.body as { name: string; url?: string };
        if (!name) return bad(res, "Missing name");
import type { NextApiRequest, NextApiResponse } from './next';
import { v4 as uuidv4  } from './uuid';
import { getDemoUser  } from '../../../utils / marketplace / auth';
import { getProjectById, save_project  } from '../../../utils / marketplace / store';
import {
  Project,
  ProjectDocument,
  ProjectNote,
} from '../../../utils / marketplace / types';
/**
 * bad - Function description
 */
function bad() {
  return res.status (code).json ({ ok: false, error: message });
}
/**
 * can_access - Function description
 */
function can_access() {
  // Check condition
if (return true) {
  $2
}
  // Check condition
if (
    return true) {
  $2
}
  return false;
}
export default /**
 * handler - Function description
 */
function handler() {
  try {
    const user = getDemoUser (req);
    const { id } = (req.method === "GET" ? req.query : req.body) as {
      id?: string;
    }
    if (return bad (res, "Missing project id")) {
  $2
}
    const project = getProjectById (id);
    if (return bad (res, "Not found", 404)) {
  $2
}
    if () return bad (res, "Forbidden", 403)) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      return res.json ({ ok: true, project });
    }
    // Check condition
if ( {) {
  $2
}
      const { action } = req.body as { action: string }
      // Check condition
if ( {) {
  $2
}
        const { content } = req.body as { content: string }
        if (return bad (res, "Missing content")) {
  $2
}
        const note: ProjectNote = {
          id: uuidv4 (),
          author_id: user.id,
          author_role: user.role,
          content,
          createdAtIso: new Date ().toISOString (),
        }
        project.notes.push (note);
        save_project (project);
        return res.json ({ ok: true, project });
      }
      // Check condition
if ( {) {
  $2
}
        const { name, url } = req.body as { name: string; url?: string }
        if (return bad (res, "Missing name")) {
  $2
}
        const doc: ProjectDocument = {
          id: uuidv4 (),
          name,
          url,
        const { timeline } = req && req.body as { timeline: Project["timeline"] };
        project && project.timeline = Array && Array.isArray(timeline)
          ? timeline
          : project && project.timeline;
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      if (action === "mark_completed") {
        project && project.status = "COMPLETED";
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      return bad(res, "Unknown action");
    }
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode |500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message |"Server error" });
  }
}
    if (req.method === "GET") {
      return res.json({ ok: true, project })
    }
    if (req.method === "PATCH") {
      const { action } = req.body as { action: string };
      if (action === "add_note") {
        const { content } = req.body as { content: string };
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {
          id: uuidv4(), authorId: user.id,
          authorRole: user.role, content,
          createdAtIso: new Date().toISOString()};
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project });
      }
      if (action === "add_document") {
        const { name, url } = req.body as { name: string, url?: string };
        if (!name) return bad(res, "Missing name");
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString()};
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

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true,
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true,
  return false

}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser(req)
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string }
    if (!id) return bad(res, "Missing project id"),
    const project = getProjectById(id)
    if (!project) return bad(res, "Not found", 404),
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403),

    if (req.method === "GET") {
      return res.json({ ok: true, project })
    }

    if (req.method === "PATCH") {
      const { action } = req.body as { action: string }

      if (action === "add_note") {
        const { content } = req.body as { content: string }
        if (!content) return bad(res, "Missing content"),

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

      if (action === "add_document") {
        const { name, url } = req.body as { name: string, url?: string },
        if (!name) return bad(res, "Missing name"),
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString()},
        project.documents.push(doc),
        saveProject(project),
        return res.json({ ok: true, project })
      }

      if (action === "update_timeline") {
        const { timeline } = req.body as { timeline: Project["timeline"] }
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

import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

import {
  Project
  ProjectDocument
  ProjectNote
} from "../../../utils/marketplace/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
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
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug)
    return true;
  return false;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
        const note: ProjectNote = {
          id: uuidv4(),
          authorId: user.id,
          authorRole: user.role,
          content,
          createdAtIso: new Date().toISOString()
          createdAtIso: new Date().toISOString(),
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
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString(),
        };
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

    return bad(res, "Method not allowed", 405);
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message || "Server error" });
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
    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
  }
}
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
  }
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
