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
      return;
    }
    const result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({ ok: true, result });
    return;
  }

  res.setHeader(&quot;Allow&quot;, &quot;GET, POST&quot;);
  res.status(405).end(&quot;Method Not Allowed&quot;);
}