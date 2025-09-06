import fs from 'fs';
import path from 'path';
  }
  try {

    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (existingIndex >= 0) {
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    
    res.status(200).json({ ok: true, course: newCourse });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  }
}
