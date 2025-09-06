import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH),
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }),

=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage(),
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],

=======
  const simplified = episodes.map((e) => ({
    id: e.id,
    title: e.title,
    inviteeName: e.invitee?.name || 'Guest',
    createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {}})),
  return res.status(200).json({ episodes: simplified })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
