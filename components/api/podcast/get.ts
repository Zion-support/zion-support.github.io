<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
;
const EPISODES_PATH = path.join(process.cwd(), 'datapodcast', 'episodes.json'),;
;
function ensureStorage() {;
  const dir = path.dirname(EPISODES_PATH),;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive:true }),;
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8'),;
}
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  ensureStorage(),;
  const { id } = req.query as { id?:string },;
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],;
  const episode = episodes.find((e) => e.id === id),;
  if (!episode) return res.status(404).json({ error:'Not found' }),;
  return res.status(200).json({ episode }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'),

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH),
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }),
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage(),
  const { id } = req.query as { id?: string },
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],
  const episode = episodes.find((e) => e.id === id),
  if (!episode) return res.status(404).json({ error: 'Not found' }),
  return res.status(200).json({ episode })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
