import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId, invoiceId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID is required' });
    }

    if (!invoiceId || typeof invoiceId !== 'string') {
      return res.status(400).json({ error: 'Invoice ID is required' });
    }

    // Mock PDF generation
    const pdfContent = `Invoice ${invoiceId} for Company ${companyId}`;
    const pdfBuffer = Buffer.from(pdfContent, 'utf8');
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="invoice-${invoiceId}.pdf"`);
    res.status(200).send(pdfBuffer);
  } catch (error) {
    console.error('Invoice PDF error:', error);
    res.status(500).json({ error: 'Failed to generate invoice PDF' });
  }
}