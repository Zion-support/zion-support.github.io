import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
<<<<<<< HEAD
=======
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
ursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
        if (c.isFree !== freeVal) return false;
<<<<<<< HEAD
=======
        if (c.isFree !== freeVal) return false
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }
      return true;
    });

    res.status(200).json({ courses: filtered });
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' });
  }
=======
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })
  }
        if (c.isFree !== freeVal) return false
      }
      return true
    });

    res.status(200).json({ courses: filtered })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })
  }
}
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
