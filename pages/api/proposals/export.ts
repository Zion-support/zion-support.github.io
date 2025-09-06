import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, format = 'pdf' } = req.query;
    
    if (!proposalId || typeof proposalId !== 'string') {
      return res.status(400).json({ error: 'Proposal ID required' });
    }

    // Mock proposal data
    const proposal = {
      id: proposalId,
      title: 'Sample Proposal',
      content: 'This is a sample proposal content...',
      author: 'John Doe',
      createdAt: '2024-01-01',
      status: 'draft'
    };

    if (format === 'pdf') {
      // Mock PDF generation
      const pdfBuffer = Buffer.from('Mock PDF content');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="proposal-${proposalId}.pdf"`);
      res.status(200).send(pdfBuffer);
    } else if (format === 'docx') {
      // Mock DOCX generation
      const docxBuffer = Buffer.from('Mock DOCX content');
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.setHeader('Content-Disposition', `attachment; filename="proposal-${proposalId}.docx"`);
      res.status(200).send(docxBuffer);
    } else {
      // Return JSON
      res.status(200).json({
        success: true,
        proposal
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Export failed' });
  }
}