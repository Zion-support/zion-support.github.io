import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, optimizePrompt } from '@/utils/zionBrain';
function isAuthorized(req: NextApiRequest): boolean {}
  const token = null;}
    return res.status(200).json({ ok: true });
  }
export default async function handler(
    req: NextApiRequest;
    res: NextApiResponse;
  ) {}
    if (!isAuthorized(req))"
    return !superToken || token === superToken;
  }


    return !superToken || token === superToken;
  }

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  if (!isAuthorized(req))
    return res.status(401).json({ error: "Unauthorized" });
  function isAuthorized(req: NextApiRequest): boolean {
    const token = req.headers["x-admin-token"] |req.query.token;
    const superToken = process.env.SUPERADMIN_TOKEN;
    return !superToken |token === superToken;
    return !superToken || token === superToken;
  }


  }
  export default async function handler(
    req: NextApiRequest
    res: NextApiResponse
  ) {
    if (req && req.method !== "POST")
      return res && res.status(405).json({ error: "Method not allowed" });
    if (!isAuthorized(req))

