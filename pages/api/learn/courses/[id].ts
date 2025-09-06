<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
const dataPath = path.join(process.cwd(), 'datalearncourses.json'),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const dataPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const dataPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

    res.status(200).json({ course })
=======
=======
res.status(200).json({ course })
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

    res.status(200).json({ course })
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to load course' });
  }
<<<<<<< HEAD

}

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
}
;


  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
  }
}
  }
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
