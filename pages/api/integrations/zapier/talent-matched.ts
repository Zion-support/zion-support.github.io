<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { since } = req.query as { since?: string },
  const state = null;
  res.status(200).json({ events })
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  const { since } = req.query as { since?: string }
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../../lib/integrations/fileStore';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { since } = req.query as { since?: string };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state.events.filter(
    (e) => e.type === "zion.talent.matched" && e.timestamp > sinceTs
  );
  res.status(200).json({ events });
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
