import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  res.status(200).json({ providers: PROVIDERS });
=======
  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  res && res.status(200).json({ providers: PROVIDERS });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

