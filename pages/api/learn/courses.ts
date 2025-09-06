import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
=======

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> cursor/fix-lint-push-and-merge-to-main-6efb

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const courses = JSON.parse(raw);

    const { category, level, isFree } = req.query;

    const filtered = courses.filter((c: any) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (typeof isFree !== 'undefined') {
        const freeVal = isFree === 'true' || isFree === true;
<<<<<<< HEAD
        if (c.isFree !== freeVal) return false;
=======
        if (c.isFree !== freeVal) return false,
        if (c.isFree !== freeVal) return false
ursor/integrate-build-improve-and-re-verify-b76c
      }
      return true
    });

    res.status(200).json({ courses: filtered })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })
  }
        if (c.isFree !== freeVal) return false
>>>>>>> cursor/fix-lint-push-and-merge-to-main-6efb
      }
      return true
    });

    res.status(200).json({ courses: filtered })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })
  }
}
<<<<<<< HEAD
=======
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> cursor/fix-lint-push-and-merge-to-main-6efb
