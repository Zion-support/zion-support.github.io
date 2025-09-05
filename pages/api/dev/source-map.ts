<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
import { getSourceMapWithExistence, deployBasicTemplateForPath } from "../../../utils/sourceMap",
import { getGitStatus, requireRoles } from "../../../utils/devAccess",

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, ["admin", "maintainer"]),
  if (!identity) return,

  if (req.method === "GET") {
    const nodes = getSourceMapWithExistence(),
    const git = getGitStatus(),
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } }),
    return
  }

  if (req.method === "POST") {
    const { path: repoRelativePath } = req.body || {},
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {
      res.status(400).json({ error: "Invalid path" }),
      return
=======
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import { getSourceMapWithExistence, deployBasicTemplateForPath } from &quot;../../../utils/sourceMap&quot;;
import { getGitStatus, requireRoles } from &quot;../../../utils/devAccess&quot;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const identity = requireRoles(req, res, [&quot;admin&quot;, &quot;maintainer&quot;]);
  if (!identity) return;

  if (req.method === &quot;GET&quot;) {
    const nodes = getSourceMapWithExistence();
    const git = getGitStatus();
    res.status(200).json({ nodes, status: { gitConnected: git.connected, gitBranch: git.branch } });
    return;
  }

  if (req.method === &quot;POST&quot;) {
    const { path: repoRelativePath } = req.body || {};
    if (typeof repoRelativePath !== &quot;string&quot; || !repoRelativePath.startsWith(&quot;/&quot;)) {
      res.status(400).json({ error: &quot;Invalid path&quot; });
=======
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _identity = requireRoles(req, _res, _["admin", _"maintainer"]);
  if (!identity) return;

  if (req.method === "GET") {
    const _nodes = getSourceMapWithExistence();
    const _git = getGitStatus();
    res.status(200).json({ nodes, _status: { gitConnected: git.connected, _gitBranch: git.branch} });
    return;
  }

  if (req.method === "POST") {_const { path: repoRelativePath} = req.body || {};
    if (typeof repoRelativePath !== "string" || !repoRelativePath.startsWith("/")) {_res.status(400).json({ error: "Invalid path"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
<<<<<<< HEAD
    const result = deployBasicTemplateForPath(repoRelativePath),
    res.status(200).json({ ok: true, result }),
    return
=======
    const _result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({_ok: true, _result});
    return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

<<<<<<< HEAD
  res.setHeader("Allow", "GET, POST"),
  res.status(405).end("Method Not Allowed")
=======
  res.setHeader(&quot;Allow&quot;, &quot;GET, POST&quot;);
  res.status(405).end(&quot;Method Not Allowed&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}