import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

const dataPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
=======
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const dataPath = path.join(process.cwd(), 'datalearncourses.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

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
<<<<<<< HEAD
        if (c.isFree !== freeVal) return false;
=======
        if (c.isFree !== freeVal) return false
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
      return true
    });

    res.status(200).json({ courses: filtered })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })
  }
<<<<<<< HEAD
=======
        if (c.isFree !== freeVal) return false
      }
      return true
    });

    res.status(200).json({ courses: filtered })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load courses' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
