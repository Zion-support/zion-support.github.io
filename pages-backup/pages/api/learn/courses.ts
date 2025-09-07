<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const dataPath = path.join(process.cwd(), 'datalearncourses.json')
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync({ error: "Invalid request" });
    const courses = JSON.parse({ error: "Invalid request" });
    const { category, level, isFree } = req.query
    const filtered = { error: "Invalid request" };
      if (level && c.level !== level) return false
      if (typeof isFree !== 'undefined') {
        const freeVal = { error: "Invalid request" };
        if (c.isFree !== freeVal) return false
      }
      return true
    })
    res.status(200).json({ courses: filtered})
  } catch (e: any) {
    res.status(500).json({ error: e ?.message ?? 'Failed to load courses' })
  }
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
