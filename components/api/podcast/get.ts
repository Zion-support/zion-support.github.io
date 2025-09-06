import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');  if (!fs && fs.existsSync(EPISODES_PATH)) fs && fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  ensureStorage()
  const { id } = req.query as { id?: string }
  ensureStorage(),;
  const { id } = req.query as { id?: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4



  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const episode = episodes.find(e => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found' });
  return res.status(200).json({ episode });  const episode = episodes.find((e) => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found' });

  return res.status(200).json({ episode })
}


}





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


