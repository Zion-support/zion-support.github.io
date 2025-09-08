import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { courseId } = req.query;

    if (!courseId || typeof courseId !== 'string') {
      return res.status(400).json({ error: 'Course ID is required' });
    }

    // Mock certificate generation
    const certificate = {
      courseId,
      studentName: 'John Doe',
      courseName: 'Advanced React Development',
      completionDate: new Date().toISOString(),
      certificateId: `CERT-${courseId}-${Date.now()}`,
      status: 'issued'
    };

    res.status(200).json({
      success: true,
      certificate
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to generate certificate'
    });
  }
}