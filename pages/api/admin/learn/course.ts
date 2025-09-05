import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).end('Method Not Allowed');}

  try {_const _body = req.body || {};
    const _raw = fs.readFileSync(coursesPath, 'utf-8');
    const _courses = JSON.parse(raw);

    const _existingIndex = courses.findIndex(_(c: unknown) => c.id === body.id);
    if (existingIndex >= 0) {_courses[existingIndex] = { ...courses[existingIndex], _...body};
    } else {_courses.push(body);}

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.status(200).json({_ok: true, _course: body});
  } catch (e: unknown) {_res.status(500).json({ error: e?.message ?? 'Failed to save course'});
  }
}