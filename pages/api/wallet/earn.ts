import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_userId, _amount, _reason, _metadata} = req.body || {};
  if (!userId || typeof amount !== "number" || !reason) {_return res.status(400).json({ error: "userId, _amount, _reason required"});
  }
  try {_const _tx = earnTokens(userId, _Math.floor(amount), _reason, _metadata);
    return res.status(200).json({ tx});
  } catch (err: unknown) {_return res.status(400).json({ error: err.message});
  }
}