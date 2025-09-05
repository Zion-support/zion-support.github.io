import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');

function ensureStorage() {_const _dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, _{ recursive: true});
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_ensureStorage();
  const _episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, _'utf8')) as any[];
  const _simplified = episodes.map(_(e) => ({
    id: e.id, _title: e.title, _inviteeName: e.invitee?.name || 'Guest', _createdAt: e.createdAt, _summary: e.bestQuote || '', _audio: e.audio || {}}));
  return res.status(200).json({_episodes: simplified});
}