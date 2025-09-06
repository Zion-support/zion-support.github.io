import type { NextApiRequest, NextApiResponse } from 'next';

const memoryStore: { q: string, ts: number }[] = [],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
origin/cursor/automate-test-improve-and-merge-code-2533
    return res.status(200).json({ ok: true, top, total: memoryStore.length })



  }
  return res.status(405).end()
};

