<<<<<<< HEAD

const coursesPath = path.join(process.cwd(), 'datalearncourses.json')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).end('Method Not Allowed')

  }

  try {

    if (existingIndex >= 0) {
      courses[existingIndex] = { ...courses[existingIndex], ...body }
    } else {
      courses.push(body)
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2))

    res.status(200).json({ ok: true, course: body })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' })
  };

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Course endpoint' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
