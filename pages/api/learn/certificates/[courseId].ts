import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  const { courseId, userId = 'demo-user' } = req.query as {
    courseId: string;
    userId?: string;
  };

  try {
    const doc = new PDFDocument({
      size: 'A4',
      margin: 50
    });

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="certificate-${courseId}.pdf"`);

    // Pipe PDF to response
    doc.pipe(res);

    // Certificate content
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
    doc.fill('#ffffff');
    
    doc.fontSize(24)
       .text('Certificate of Completion', 50, 100, { align: 'center' });
    
    doc.fontSize(16)
       .text(`Course: ${courseId}`, 50, 150, { align: 'center' });
    
    doc.fontSize(14)
       .text(`Student: ${userId}`, 50, 200, { align: 'center' });
    
    doc.fontSize(12)
       .text('This certifies that the above student has successfully completed the course.', 50, 250, { align: 'center' });
    
    doc.text('Date: ' + new Date().toLocaleDateString(), 50, 300, { align: 'center' });

    doc.end();
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to generate certificate' });
  }
}