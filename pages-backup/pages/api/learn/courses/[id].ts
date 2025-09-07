<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/learn/courses/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),
<<<<<<< HEAD:pages_backup/api/learn/courses/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = null;
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
origin/cursor/automate-test-improve-and-merge-code-2533
  }
}
  }
}
}
;

import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
<<<<<<< HEAD:pages_backup/api/learn/courses/[id].ts
const dataPath = path.join(process.cwd(), 'datalearncourses.json')

    res.status(200).json({ course })
res.status(200).json({ course })
main
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),

=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = path.join(process.cwd(), 'datalearncourses.json')
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    res.status(200).json({ course })

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
  { error: "Invalid request" }
}

    res.status (200).json ({ course });
<<<<<<< HEAD:pages_backup/api/learn/courses/[id].ts
origin/cursor/expand-services-advertise-and-build-project-c28b

  } catch (e: any) {
    res.status(500).json({ error: e ?.message ?? 'Failed to load course' })
  }
};
<<<<<<< HEAD:pages_backup/api/learn/courses/[id].ts
main

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
