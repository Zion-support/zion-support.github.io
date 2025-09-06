import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const courses_path = path.join (process.cwd (), 'datalearncourses.json'),
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('AllowPOST'),
    return res.status (405).end ('Method Not Allowed');
  }
  try {
    const body = req.body || {},
    const raw = fs.readFileSync (courses_path, 'utf - 8'),
    const courses = JSON.parse (raw),
    const existing_index = courses.find_index ((c: any) => c.id === body.id),
    // Check condition
if ( {) {
  $2
}
      courses[existing_index] = { ...courses[existing_index], ...body }
    } else {
      courses.push (body);
    }
    fs.writeFileSync (courses_path, JSON.stringify (courses, null, 2)),
    res.status (200).json ({ ok: true, course: body });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to save course' });
  }
}
;