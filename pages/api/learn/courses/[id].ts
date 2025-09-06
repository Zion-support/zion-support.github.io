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
    const { id } = req.query;
    const course = courses.find((c: any) => c.id === id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(200).json({ course });
=======
    res.status(200).json({ course })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
  }
<<<<<<< HEAD
=======
    res.status(200).json({ course })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to load course' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
