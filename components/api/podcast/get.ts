import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');

function ensureStorage() {_const _dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, _{ recursive: true});
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_ensureStorage();
  const { id} = req.query as {_id?: string};
  const _episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const _episode = episodes.find(_(e) => e.id === id);
  if (!episode) return res.status(404).json({_error: 'Not found'});
  return res.status(200).json({_episode});
}