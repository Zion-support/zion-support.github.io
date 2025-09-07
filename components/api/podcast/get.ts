import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

  return res.status(200).json({ episode })
}
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  ensureStorage();}
}
const { id } = req.query as { id?: string };

const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

const episode = episodes.find(e => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found',}
});

  return res.status(200).json({ episode });
  return res.status(200).json({ episode })
}

