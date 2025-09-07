<<<<<<< HEAD:pages/api-disabled/api/marketplace/projects.ts
<<<<<<< HEAD:pages/api/marketplace/projects.ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/marketplace/projects.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import {;
  Project;
  ProjectDocument;
  ProjectNote
} from "../../../utils/marketplace/types";
<<<<<<< HEAD:pages/api/marketplace/projects.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/marketplace/projects.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
<<<<<<< HEAD:pages/api/marketplace/projects.ts
<<<<<<< HEAD
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {
  Project,
  ProjectDocument,
=======
import {;
  Project;
  ProjectDocument;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/marketplace/projects.ts
  ProjectNote,;
} from "../../../utils/marketplace/types";
import type { NextApiRequest, NextApiResponse } from 'next';
function bad(res: NextApiResponse, message: string, code = 400) {;
  return res.status(code).json({;
    ok: false;
    error: message
  });
<<<<<<< HEAD:pages/api/marketplace/projects.ts
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { getDemoUser } from "../../../utils/marketplace/auth",
import { getProjectById, saveProject } from "../../../utils/marketplace/store",
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types",
<<<<<<< HEAD
=======
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function bad(res: NextApiResponse, message: string, code = 400) {
  return res && res.status(code).json({ ok: false, error: message });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug)
    return true;
  return false;
<<<<<<< HEAD
=======





import { v4 as uuidv4 } from "uuid";"
import { getDemoUser } from "../../../utils/marketplace/auth";"
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import {};
  Project;
  ProjectDocument;
  ProjectNote"
} from "../../../utils/marketplace/types";

}

function canAccess() { return null; }
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {};
    const user = getDemoUser(req);"
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };


"
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);"
    if (!project) return bad(res, "Not found", 404);"
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);
"
    if (req && req.method === "PATCH") {}
      const { action } = req && req.body as { action: string };"
      if (action === "add_note") {}
        const { content } = req && req.body as { content: string };"
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {}
          id: uuidv4(),
          authorId: user && user.id,
          authorRole: user && user.role,
          content,
          createdAtIso: new Date().toISOString(),
        };
        project && project.notes.push(note);
        saveProject(project);
        return res && res.json({ ok: true, project });
      }"
      if (action === "add_document") {}
        const { name, url } = req && req.body as { name: string; url?: string };"
        if (!name) return bad(res, "Missing name");
import type { NextApiRequest, NextApiResponse } from './next';'
import { v4 as uuidv4  } from './uuid';'
import { getDemoUser  } from '../../../utils / marketplace / auth';'
import { getProjectById, save_project  } from '../../../utils / marketplace / store';
import {}
  Project,
  ProjectDocument,
  ProjectNote,';
} from '../../../utils / marketplace / types';
/**
 * bad - Function description;
 */
function bad() {}
  return res.status (code).json ({ ok: false, error: message });
}
/**
 * can_access - Function description;
 */
function can_access() {}
  // Check condition;
if (return true) {}
  $2;
}
  // Check condition;
if (
    return true) {}
  $2;
}
  return false;
}
export default /**;
 * handler - Function description;
 */
function handler() {}
  try {}
    const user = getDemoUser (req);"
    const { id } = (req.method === "GET" ? req.query : req.body) as {}
      id?: string;
    }"
    if (return bad (res, "Missing project id")) {}
  $2;
}
    const project = getProjectById (id);"
    if (return bad (res, "Not found", 404)) {}
  $2;
}"
    if () return bad (res, "Forbidden", 403)) {}
  $2;
}
    // Check condition;
if ( {) {}
  $2;
}
      return res.json ({ ok: true, project });
    }
    // Check condition;
if ( {) {}
  $2;
}
      const { action } = req.body as { action: string }
      // Check condition;
if ( {) {}
  $2;
}
        const { content } = req.body as { content: string }"
        if (return bad (res, "Missing content")) {}
  $2;
}
        const note: ProjectNote = {}
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
      // Check condition;
if ( {) {}
  $2;
}
        const { name, url } = req.body as { name: string; url?: string }"
        if (return bad (res, "Missing name")) {}
  $2;
}
        const doc: ProjectDocument = {}
          id: uuidv4 (),
          name,
          url,"
        const { timeline } = req && req.body as { timeline: Project["timeline"] };
        project && project.timeline = Array && Array.isArray(timeline)
          ? timeline;
          : project && project.timeline;
        saveProject(project);
        return res && res.json({ ok: true, project });
      }"
      if (action === "mark_completed") {"
        project && project.status = "COMPLETED";
        saveProject(project);
        return res && res.json({ ok: true, project });
      }"
      return bad(res, "Unknown action");
    }"
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {}
    const status = e?.statusCode |500;
    return res;
      .status(status)"
      .json({ ok: false, error: e?.message |"Server error" });
  }
}"
    if (req.method === "GET") {}
      return res.json({ ok: true, project })
    }"
    if (req.method === "PATCH") {}
      const { action } = req.body as { action: string };"
      if (action === "add_note") {}
        const { content } = req.body as { content: string };"
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {}
          id: uuidv4(), authorId: user.id,
          authorRole: user.role, content,
          createdAtIso: new Date().toISOString()};
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project })
      }"
      if (action === "add_document") {}
        const { name, url } = req.body as { name: string, url?: string };"
        if (!name) return bad(res, "Missing name");
        const doc: ProjectDocument = {}
          id: uuidv4(), name,
          url,
          uploadedAtIso: new Date().toISOString()};
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project })
      }"
      if (action === "update_timeline") {"
        const { timeline } = req.body as { timeline: Project["timeline"] };
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project })
      }"
      if (action === "mark_completed") {"
        project.status = "COMPLETED";
        saveProject(project);
        return res.json({ ok: true, project })
      }"
      return bad(res, "Unknown action")
    }"
    return bad(res, "Method not allowed", 405)
  } catch (e: any) {}
    const status = e?.statusCode || 500;"
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
  }
}
          uploadedAtIso: new Date ().toISOString (),
        }
        project.documents.push (doc);
        save_project (project);
        return res.json ({ ok: true, project });
      }
      // Check condition;
if ( {) {}
  $2;
}"
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.is_array (timeline);
          ? timeline;
          : project.timeline;
        save_project (project);
        return res.json ({ ok: true, project });
      }
      // Check condition;
if ( {) {}
  $2;
}"
        project.status = "COMPLETED";
        save_project (project);
        return res.json ({ ok: true, project });
      }"
      return bad (res, "Unknown action");
    }"
    return bad (res, "Method not allowed", 405);
  } catch (e: any) {}
    const status = e?.status_code || 500;
    return res;
      .status (status);"
      .json ({ ok: false, error: e?.message || "Server error" });

function bad(res: NextApiResponse, message: string, code = 400) {}
  return res.status(code).json({ ok: false, error: message })
}

function canAccess() { return null; }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {}
    const user = getDemoUser(req)"
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string }"
    if (!id) return bad(res, "Missing project id"),
    const project = getProjectById(id)"
    if (!project) return bad(res, "Not found", 404),"
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403),
"
    if (req.method === "GET") {}
      return res.json({ ok: true, project })
    }
"
    if (req.method === "PATCH") {}
      const { action } = req.body as { action: string }
"
      if (action === "add_note") {}
        const { content } = req.body as { content: string }"
        if (!content) return bad(res, "Missing content"),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/marketplace/projects.ts

        const note: ProjectNote = {}
          id: uuidv4(),
          authorId: user.id,
          authorRole: user.role,
          content,
<<<<<<< HEAD:pages/api-disabled/api/marketplace/projects.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        };

<<<<<<< HEAD
=======
          createdAtIso: new Date().toISOString()},
        project.notes.push(note),
        saveProject(project),
        return res.json({ ok: true, project })
      }
"
      if (action === "add_document") {}
        const { name, url } = req.body as { name: string, url?: string },"
        if (!name) return bad(res, "Missing name"),
        const doc: ProjectDocument = {}
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString()},
        project.documents.push(doc),
        saveProject(project),
        return res.json({ ok: true, project })
      }
"
      if (action === "update_timeline") {"
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline,
        saveProject(project),
        return res.json({ ok: true, project })
      }
"
      if (action === "mark_completed") {"
        project.status = "COMPLETED",
        saveProject(project),
        return res.json({ ok: true, project })
      }
"
      return bad(res, "Unknown action")
    }
"
    return bad(res, "Method not allowed", 405)


function bad(res: NextApiResponse, message: string, code = 400) {}
  return res.status(code).json({ ok: false, error: message })
}



function canAccess() { return null; }
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
function canAccess() { return null; }
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function handler() { return null; }
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };"
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);"
    if (!project) return bad(res, "Not found", 404);"
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/marketplace/projects.ts
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project });
      }

<<<<<<< HEAD:pages/api-disabled/api/marketplace/projects.ts
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
=======
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project });
      }"
      if (action === "update_timeline") {"
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.isArray(timeline)
          ? timeline;
          : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project });
      }"
      if (action === "mark_completed") {"
        project.status = "COMPLETED";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/marketplace/projects.ts

        saveProject(project);
        return res.json({ ok: true, project })
      }
<<<<<<< HEAD:pages/api-disabled/api/marketplace/projects.ts
=======
"
      return bad(res, "Unknown action");
    }"
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {}
    const status = e?.statusCode |500;
    return res;
      .status(status)"
      .json({ ok: false, error: e?.message |"Server error" });

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/marketplace/projects.ts

  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
      if (action === "update_timeline") {"
        const { timeline } = req.body as { timeline: Project["timeline"] },
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline,
        saveProject(project),
        return res.json({ ok: true, project })
        } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;"
      if (action === "mark_completed") {;"
        project.status = "COMPLETED";
        saveProject(project);
        return return res.json({ ok: true, project });
        } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;"
      return bad(res, "Unknown action");
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages/api-disabled/api/marketplace/projects.ts
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/marketplace/projects.ts
    return bad(res, "Method not allowed", 405)
  } catch (e: any) {}
    const status = e?.statusCode || 500;"
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
<<<<<<< HEAD:pages/api-disabled/api/marketplace/projects.ts

  }

  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user && user.role === "client" && user && user.id === project && project.clientId) return true;
  if (user && user.role === "talent" && user && user.talentSlug === project && project.talentSlug)
    return true;
  return false;

<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const user = getDemoUser(req);
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {;
  return res.status(code).json({ ok: false, error: message })
}
;
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {;
  if (user && user.role === "client" && user && user.id === project && project.clientId) return true;
  if (user && user.role === "talent" && user && user.talentSlug === project && project.talentSlug);
    return true;
  return false;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/marketplace/projects.ts
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);
=======;
    if (req && req.method === "PATCH") {;
      const { action } = req && req.body as { action: string };
      if (action === "add_note") {;
        const { content } = req && req.body as { content: string };
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {;
          id: uuidv4();
          authorId: user && user.id;
          authorRole: user && user.role;
          content;
          createdAtIso: new Date().toISOString()
        };
        project && project.notes.push(note);
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      if (action === "add_document") {;
        const { name, url } = req && req.body as { name: string; url?: string };
        if (!name) return bad(res, "Missing name");
import type { NextApiRequest, NextApiResponse } from './next';
import { v4 as uuidv4  } from './uuid';
import { getDemoUser  } from '../../../utils / marketplace / auth';
import { getProjectById, save_project  } from '../../../utils / marketplace / store';
import {;
  Project;
  ProjectDocument;
  ProjectNote
} from '../../../utils / marketplace / types';
/**
 * bad - Function description
 */;
function bad() {;
  return res.status (code).json ({ ok: false, error: message });
}
/**
 * can_access - Function description
 */;
function can_access() {
  // Check condition;
if (return true) {
  $2
}
  // Check condition;
if (;
    return true) {
  $2
}
  return false;
}
export default /**
 * handler - Function description
 */;
function handler() {;
  try {;
    const user = getDemoUser (req);
    const { id } = (req.method === "GET" ? req.query : req.body) as {;
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
    // Check condition;
if ( {) {
  $2
}
      return res.json ({ ok: true, project });
    }
    // Check condition;
if ( {) {
  $2
}
      const { action } = req.body as { action: string }
      // Check condition;
if ( {) {
  $2
}
        const { content } = req.body as { content: string }
        if (return bad (res, "Missing content")) {
  $2
}
        const note: ProjectNote = {;
          id: uuidv4 ();
          author_id: user.id;
          author_role: user.role;
          content;
          createdAtIso: new Date ().toISOString ()
        }
<<<<<<< HEAD
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);

=======
        project.notes.push (note);
        save_project (project);
        return res.json ({ ok: true, project });
      }
      // Check condition;
if ( {) {
  $2
}
        const { name, url } = req.body as { name: string; url?: string }
        if (return bad (res, "Missing name")) {
  $2
}
        const doc: ProjectDocument = {;
          id: uuidv4 ();
          name;
          url;
        const { timeline } = req && req.body as { timeline: Project["timeline"] };
        project && project.timeline = Array && Array.isArray(timeline)
          ? timeline
          : project && project.timeline;
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      if (action === "mark_completed") {;
        project && project.status = "COMPLETED";
        saveProject(project);
        return res && res.json({ ok: true, project });
      }
      return bad(res, "Unknown action");
    }
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {;
    const status = e?.statusCode |500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message |"Server error" });
  }
}
    if (req.method === "GET") {;
      return res.json({ ok: true, project })
    }
<<<<<<< HEAD:pages/api/marketplace/projects.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (req.method === "PATCH") {
=======
    if (req.method === "PATCH") {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/marketplace/projects.ts
      const { action } = req.body as { action: string };
      if (action === "add_note") {;
        const { content } = req.body as { content: string };
        if (!content) return bad(res, "Missing content");
        const note: ProjectNote = {;
          id: uuidv4(), authorId: user.id;
          authorRole: user.role, content;
          createdAtIso: new Date().toISOString()};
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project });
      }
      if (action === "add_document") {;
        const { name, url } = req.body as { name: string, url?: string };
        if (!name) return bad(res, "Missing name");
        const doc: ProjectDocument = {;
          id: uuidv4();
          name;
          url;
          uploadedAtIso: new Date().toISOString()};
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project })
      }
      if (action === "update_timeline") {;
        const { timeline } = req.body as { timeline: Project["timeline"] };
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project })
      }
      if (action === "mark_completed") {;
        project.status = "COMPLETED";
        saveProject(project);
        return res.json({ ok: true, project })
      }
      return bad(res, "Unknown action")
    }
    return bad(res, "Method not allowed", 405)
  } catch (e: any) {;
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })

  }

  }
}

  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          uploadedAtIso: new Date ().toISOString ()
        }
        project.documents.push (doc);
        save_project (project);
        return res.json ({ ok: true, project });
      }
      // Check condition;
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
      // Check condition;
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
  } catch (e: any) {;
    const status = e?.status_code || 500;
    return res;
      .status (status);
      .json ({ ok: false, error: e?.message || "Server error" });
;
function bad(res: NextApiResponse, message: string, code = 400) {;
  return res.status(code).json({ ok: false, error: message })
}
;
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {;
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false

}
;
export default function handler($2) {;
  try {;
    const user = getDemoUser(req);
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string }
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);

    if (req.method === "GET") {;
      return res.json({ ok: true, project })
    }
;
    if (req.method === "PATCH") {;
      const { action } = req.body as { action: string }
;
      if (action === "add_note") {;
        const { content } = req.body as { content: string }
        if (!content) return bad(res, "Missing content");

        const note: ProjectNote = {;
          id: uuidv4();
          authorId: user.id;
          authorRole: user.role;
          content;
          createdAtIso: new Date().toISOString()}
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project })
      }
;
      if (action === "add_document") {;
        const { name, url } = req.body as { name: string, url?: string }
        if (!name) return bad(res, "Missing name");
        const doc: ProjectDocument = {;
          id: uuidv4();
          name;
          url;
          uploadedAtIso: new Date().toISOString()}
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project })
      }
;
      if (action === "update_timeline") {;
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project })
      }
;
      if (action === "mark_completed") {;
        project.status = "COMPLETED";
        saveProject(project);
        return res.json({ ok: true, project })
      }
;
      return bad(res, "Unknown action")
    }
;
    return bad(res, "Method not allowed", 405);

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
;
import {;
  Project;
  ProjectDocument;
  ProjectNote
} from "../../../utils/marketplace/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
import {;
  Project;
  ProjectDocument;
  ProjectNote,;
} from "../../../utils/marketplace/types";
import type { NextApiRequest, NextApiResponse } from 'next';
function bad(res: NextApiResponse, message: string, code = 400) {;
  return res.status(code).json({;
    ok: false;
    error: message
  });
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {;
  return res.status(code).json({ ok: false, error: message })
}
;
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {;
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug);
    return true;
  return false;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {;
  if (user.role === "client" && user.id === project.clientId) return true;
  if (user.role === "talent" && user.talentSlug === project.talentSlug) return true;
  return false
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function handler($2) {;
    const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string };
    if (!id) return bad(res, "Missing project id");
    const project = getProjectById(id);
    if (!project) return bad(res, "Not found", 404);
    if (!canAccess(user, project)) return bad(res, "Forbidden", 403);
;
        project.notes.push(note);
        saveProject(project);
        return res.json({ ok: true, project });
      }
        project.documents.push(doc);
        saveProject(project);
        return res.json({ ok: true, project });
      }
      if (action === "update_timeline") {;
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.isArray(timeline)
          ? timeline
          : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project });
      }
      if (action === "mark_completed") {;
        project.status = "COMPLETED";
;
        saveProject(project);
        return res.json({ ok: true, project })
      }
;
      return bad(res, "Unknown action");
    }
    return bad(res, "Method not allowed", 405);
  } catch (e: any) {;
    const status = e?.statusCode |500;
    return res
      .status(status)
      .json({ ok: false, error: e?.message |"Server error" });


  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      if (action === "update_timeline") {;
        const { timeline } = req.body as { timeline: Project["timeline"] }
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({ ok: true, project })
        } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      if (action === "mark_completed") {;
        project.status = "COMPLETED";
        saveProject(project);
        return return res.json({ ok: true, project });
        } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      return bad(res, "Unknown action");
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return bad(res, "Method not allowed", 405)
  } catch (e: any) {;
    const status = e?.statusCode || 500;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
  }
<<<<<<< HEAD:pages/api/marketplace/projects.ts
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/marketplace/projects.ts

  }



}

  }
}

<<<<<<< HEAD:pages/api-disabled/api/marketplace/projects.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/marketplace/projects.ts
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/marketplace/projects.ts
