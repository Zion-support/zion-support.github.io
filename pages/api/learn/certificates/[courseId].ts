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
    const certificateData = {
      courseId,
      studentName: 'John Doe',
      courseName: 'Zion OS Fundamentals',
      completionDate: new Date().toISOString(),
      certificateId: `ZION-${Date.now()}`,
      grade: 'A+'
    };

    // Mock PDF generation
    const pdfContent = `Certificate of Completion
Course: ${certificateData.courseName}
Student: ${certificateData.studentName}
Date: ${certificateData.completionDate}
Grade: ${certificateData.grade}
Certificate ID: ${certificateData.certificateId}`;

    const pdfBuffer = Buffer.from(pdfContent, 'utf8');
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="certificate-${courseId}.pdf"`);
    res.status(200).send(pdfBuffer);
  } catch (error) {
    console.error('Certificate generation error:', error);
    res.status(500).json({ error: 'Failed to generate certificate' });
  }
}