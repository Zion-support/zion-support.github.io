import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { category, level, limit = '20' } = req.query;
    
    // Mock courses data
    const courses = [
      {
        id: 'course-1',
        title: 'Introduction to React',
        description: 'Learn the basics of React development',
        category: 'frontend',
        level: 'beginner',
        duration: '4 hours',
        rating: 4.8,
        students: 1250
      },
      {
        id: 'course-2',
        title: 'Advanced TypeScript',
        description: 'Master TypeScript for enterprise applications',
        category: 'programming',
        level: 'advanced',
        duration: '8 hours',
        rating: 4.9,
        students: 890
      }
    ];

    // Filter courses
    let filteredCourses = courses;
    if (category) {
      filteredCourses = filteredCourses.filter(course => course.category === category);
    }
    if (level) {
      filteredCourses = filteredCourses.filter(course => course.level === level);
    }

    const limitNum = parseInt(limit as string, 10);
    filteredCourses = filteredCourses.slice(0, limitNum);

    res.status(200).json({
      success: true,
      courses: filteredCourses,
      total: courses.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve courses' });
  }
}