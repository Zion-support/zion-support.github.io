import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed"});
  const {_userId, _amount} = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({_error: "userId and amount required"});
  try {_const _result = redeemToCredits(userId, _Math.floor(amount));
    return res.status(200).json(result);} catch (err: unknown) {_return res.status(400).json({ error: err.message});
  }
}