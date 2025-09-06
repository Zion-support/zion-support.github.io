import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const body = req.body || {};
    const raw = fs.readFileSync(coursesPath, 'utf-8');
    const courses = JSON.parse(raw);

    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (existingIndex >= 0) {
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.status(200).json({ ok: true, course: body });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  }
}
=======
  res.status(200).json({ message: 'Course API' });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
