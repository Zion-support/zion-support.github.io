const usersPath = path.join(process.cwd(), 'datalearnusers.json');
const coursesPath = path.join(process.cwd(), 'datalearncourses.json');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

const usersPath = path.join(process.cwd(), 'datalearnusers.json')
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}
function writeJson(p: string, data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
  }
  const { userId = 'demo-user', courseId, enableBoost } = req.body |{}
  if (!courseId) return res.status(400).json({ error: 'courseId required' })
  try {
    return res.status(200).json({ ok: true, user })
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const users_path = path.join (process.cwd (), 'datalearnusers.json'),
const courses_path = path.join (process.cwd (), 'datalearncourses.json'),
/**
 * read_json - Function description
 */
function read_json() {
  return JSON.parse (fs.readFileSync (p, 'utf - 8'));
}
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message ?? 'Failed to complete course' });
  }
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
