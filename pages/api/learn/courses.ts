import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { category, level } = req.query;

    // Mock courses data
    const courses = [
      {
        id: '1',
        title: 'Advanced React Development',
        description: 'Master React with hooks, context, and performance optimization',
        category: 'frontend',
        level: 'intermediate',
        duration: '8 weeks',
        instructor: 'Sarah Johnson',
        rating: 4.8
      },
      {
        id: '2',
        title: 'Node.js Backend Development',
        description: 'Build scalable backend applications with Node.js',
        category: 'backend',
        level: 'beginner',
        duration: '6 weeks',
        instructor: 'Mike Chen',
        rating: 4.7
      }
    ];

    let filteredCourses = courses;

    if (category) {
      filteredCourses = filteredCourses.filter(course => course.category === category);
    }

    if (level) {
      filteredCourses = filteredCourses.filter(course => course.level === level);
    }

    res.status(200).json({
      success: true,
      courses: filteredCourses
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to retrieve courses'
    });
  }
}