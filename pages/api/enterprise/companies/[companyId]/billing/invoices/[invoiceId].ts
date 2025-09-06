import { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query;
  
  if (!companyId || Array.isArray(companyId) || !invoiceId || Array.isArray(invoiceId)) {
    return res.status(400).json({ error: 'Invalid company ID or invoice ID' });
  }

  if (req.method === 'GET') {
    const invoice = store.getInvoice(companyId, invoiceId);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    
    return res.status(200).json(invoice);
  }

  if (req.method === 'POST' && req.query.action === 'download') {
    const invoice = store.getInvoice(companyId, invoiceId);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    // Generate PDF buffer (placeholder)
    const pdfBuffer = Buffer.from('PDF content placeholder');
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="invoice-' + invoiceId + '.pdf"');
    res.status(200).send(pdfBuffer);
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}