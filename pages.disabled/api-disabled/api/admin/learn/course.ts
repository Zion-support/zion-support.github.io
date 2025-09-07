import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const coursesPath = path.join(process.cwd(), 'datalearncourses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const body = req.body || {};
    
    if (!fs.existsSync(coursesPath)) {
      fs.writeFileSync(coursesPath, JSON.stringify([]));
    }
    
    const raw = fs.readFileSync(coursesPath, 'utf-8');
    const courses = JSON.parse(raw);
    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    
    if (existingIndex >= 0) {
      // Update existing course
      courses[existingIndex] = {
        ...courses[existingIndex],
        ...body,
        updatedAt: new Date().toISOString()
      };
    } else {
      // Create new course
      const newCourse = {
        id: body.id || `course_${Date.now()}`,
        ...body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      courses.push(newCourse);
    }
    
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    
    res.status(200).json({
      success: true,
      course: existingIndex >= 0 ? courses[existingIndex] : courses[courses.length - 1]
    });
  } catch (error) {
    console.error('Error handling course:', error);
    res.status(500).json({ success: false, error: 'Failed to process course' });
  }
}