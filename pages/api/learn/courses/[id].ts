<<<<<<< HEAD

    res.status(200).json({ course })
res.status(200).json({ course })
=======

import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),

    res.status(200).json({ course })

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const data_path = path.join (process.cwd (), 'datalearncourses.json')
export default /**
 * handler - Function description
 */
function handler() {
  try {
    const raw = fs.readFileSync (data_path, 'utf - 8')
    const courses = JSON.parse (raw)
    const { id } = req.query
    const course = courses.find ((c: any) => c.id === id)
    if (return res.status (404).json ({ error: 'Course not found' }), ) {
  $2
}

    res.status (200).json ({ course });

  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to load course' });
  }
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
