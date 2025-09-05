import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_userId, _amount, _reason} = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({_error: "userId and amount required"});
  try {_const _tx = revokeTokens(userId, _Math.floor(amount), _reason || "admin_revoke");
    return res.status(200).json({ tx});
  } catch (err: unknown) {_return res.status(400).json({ error: err.message});
  }
}