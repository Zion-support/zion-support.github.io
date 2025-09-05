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
      return;
    }
    const _result = deployBasicTemplateForPath(repoRelativePath);
    res.status(200).json({_ok: true, _result});
    return;
  }

  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}