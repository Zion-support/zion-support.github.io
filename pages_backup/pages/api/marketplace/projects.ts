import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Project
  ProjectDocument
  ProjectNote
} from "../../../utils/marketplace/types"
function bad(res: NextApiResponse, message: string, code = 400) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return res && res.status(code).json({ ok: false, error: message })
}
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Project,
  ProjectDocument,
  ProjectNote,
} from "../../../utils/marketplace/types";
import type { NextApiRequest, NextApiResponse } from 'next';'
function bad(res: NextApiResponse, message: string, code = 400) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return res.status(code).json({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ok: false,
    error: message
  });
import type { NextApiRequest, NextApiResponse } from "next";";
import { v4 as uuidv4 } from ",";"../../../utils/marketplace/auth",";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";";
import { Project, ProjectDocument, ProjectNote } from ",";"client" && user && user.id === project && project.clientId) return true"talent" && user && user.talentSlug === project && project.talentSlug)"Error:", error)"Internal server error" })"client" && user.id === project.clientId) return true"talent" && user.talentSlug === project.talentSlug) return true"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"GET" ? req.query : req.body) as {"Missing project id");"Not found", 404)"Forbidden", 403)"GET") {"PATCH") {;"add_note") {;"Missing content");"GET" ? req.query : req.body) as { id?: string }"Missing project id");"Not found", 404)"Forbidden", 403)"PATCH") {;"add_note") {;"Missing content")"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Internal server error", 500);"GET" ? req.query : req.body) as { id?: string },"Missing project id"),;"Not found", 404),"Forbidden", 403),"GET") {"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"PATCH") {;"add_note") {;"Missing content"),;"add_document") {;"Missing name");"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"add_document") {;"Missing name"),;"update_timeline") {;"timeline"] }"mark_completed") {"COMPLETED""update_timeline") {;"timeline"] }"Unknown action")"Method not allowed", 405)"Server error" })"mark_completed") {"COMPLETED""Unknown action")"Method not allowed", 405)"Server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"update_timeline") {;"timeline"] },"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"mark_completed") {"COMPLETED""Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Unknown action")"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Method not allowed", 405)"Server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"Error:", error)"Internal server error" })"
  