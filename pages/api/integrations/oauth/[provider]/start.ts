import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provider } = req.query as { provider: string}
  const callbackUrl = { error: "Invalid request" };
  res.writeHead({ error: "Invalid request" });
  res.end()
}
