


const dataPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    res.status(200).json({ course })
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const data_path = path.join (process.cwd (), 'datalearncourses.json'),
export default /**
 * handler - Function description
 */
function handler() {
  try {
    const raw = fs.readFileSync (data_path, 'utf - 8'),
    const courses = JSON.parse (raw),
    const { id } = req.query,
    const course = courses.find ((c: any) => c.id === id),
    if (return res.status (404).json ({ error: 'Course not found' }), ) {
  $2
}

    res.status (200).json ({ course });

  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to load course' });
  }

}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
