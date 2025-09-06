import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { companyId, invoiceId } = req.query;
    // PDF generation logic would go here
    const pdfBuffer = Buffer.from('PDF content');
    res.status(200).send(pdfBuffer);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}