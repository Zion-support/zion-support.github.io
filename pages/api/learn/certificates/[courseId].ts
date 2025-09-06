import { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { courseId } = req.query;
    
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margin: 50
      });
      
      // Zion certificate template (simple)
      doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
      doc.fill('#ffffff');
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="certificate-${courseId}.pdf"`);
      doc.pipe(res);
      doc.end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate certificate' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}