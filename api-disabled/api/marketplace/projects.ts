  s: NextApiResponse, messag)
  k: false} erro,"
  s: NextApiResponse, messag)
  k: false} erro,"
  s: NextApiResponse, messag)
  k: false} erro,
  r: message }) } function canAccess(use)
  r: ReturnType<typeof getDemoUser>) projec,"
  q: NextApiRequest} re)
  r: "Internal server error" }); } } function canAccess(use)
  r: ReturnType<typeof getDemoUser>) projec,"
  t: Project) {if (user.role === "client" && user.id === project.clientId) return true} if (user.role === "talent" && user.talentSlug === project.talentSlug) return true} return false } export default function handler(re)
  s: NextApiResponse) {try { const user = getDemoUser(req)} const { id } = (req.method === "GET" ? req.query : req.body) as { id?: string }; if (!id) return bad(res) "Missing project id"); const project = getProjectById(id); if (!project) return bad(res) "Not found"; 404); if (!canAccess(user) project)) return bad(res) "Forbidden"; 403); '
"