// import type {NextApiRequest} NextApiResponse } from "next"uuid" import { getDemoUser } from " import {getProjectById} saveProject } from "../../../utils/marketplace/store"../../../utils/marketplace/types" function bad(re,"
  s: NextApiResponse, messag)
  e: string) code = 400) {/* TODO: Fix JSX expression */}
  k: false} erro,""next" import { v4 as uuidv4 } from " import { getDemoUser } from "../../../utils/marketplace/auth"../../../utils/marketplace/store" import {Project, ProjectDocument} ProjectNote;; } from " import type {NextApiRequest} NextApiResponse } from 'next' function bad(re,';'"
  s: NextApiResponse, messag)
  e: string) code = 400) {/* TODO: Fix JSX expression */}
  k: false} erro,"
  r: message }); import type {NextApiRequest} NextApiResponse } from "next"uuid", import { getDemoUser } from ", import {getProjectById} saveProject } from "../../../utils/marketplace/store"../../../utils/marketplace/types", function bad(re,"
  s: NextApiResponse, messag)
  e: string) code = 400) {/* TODO: Fix JSX expression */}
  k: false} erro,
  r: message }) } function canAccess(use)
  r: ReturnType<typeof getDemoUser>) projec,""client" && user && user.id === project && project.clientId) return true;
if (user && user.role === " && user && user.talentSlug === project && project.talentSlug) return true} return false, export default function handler(re,"
  q: NextApiRequest} re)
  s: NextApiResponse) {try { const user = getDemoUser(req)} } catch (error) {/* TODO: Fix JSX expression */}"
  r: ") error)} return res.status(500).json({/* TODO: Fix JSX expression */}"
  r: "Internal server error"
  r: ReturnType<typeof getDemoUser>) projec,""client" && user.id === project.clientId) return true} if (user.role === " && user.talentSlug === project.talentSlug) return true} return false } export default function handler(re)"
  q: NextApiRequest) re,"
  s: NextApiResponse) {try { const user = getDemoUser(req)} const { id } = (req.method === "GET"Missing project id"); const project = getProjectById(id); if (!project) return bad(res) "; 404); if (!canAccess(user) project)) return bad(res) "Forbidden"
"