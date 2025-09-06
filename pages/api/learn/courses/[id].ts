<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),
<<<<<<< HEAD



const dataPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),;
export default function handler(req, res) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = null;
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
}
  }
}
}
;


=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',;
import path from 'path',;
const dataPath = path.join(process.cwd(), 'datalearncourses.json')
>>>>>>> main

    res.status(200).json({ course })
=======
=======
res.status(200).json({ course })
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to load course' });
  }
};
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
