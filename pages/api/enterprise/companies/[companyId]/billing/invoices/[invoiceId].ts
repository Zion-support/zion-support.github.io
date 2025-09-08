import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { companyId, invoiceId } = req.query;

      if (!companyId || typeof companyId !== 'string') {
        return res.status(400).json({ error: 'Company ID is required' });
      }

      if (!invoiceId || typeof invoiceId !== 'string') {
        return res.status(400).json({ error: 'Invoice ID is required' });
      }

      // Mock invoice data
      const invoice = {
        id: invoiceId,
        companyId,
        amount: 1000,
        status: 'paid',
        dueDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        items: [
          {
            description: 'Service fee',
            amount: 1000,
            quantity: 1
          }
        ]
      };

      res.status(200).json({
        success: true,
        invoice
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve invoice'
      });
    }
  } else if (req.method === 'PUT') {
    try {
      const { companyId, invoiceId } = req.query;
      const { status, amount } = req.body;

      if (!companyId || typeof companyId !== 'string') {
        return res.status(400).json({ error: 'Company ID is required' });
      }

      if (!invoiceId || typeof invoiceId !== 'string') {
        return res.status(400).json({ error: 'Invoice ID is required' });
      }

      // Mock invoice update
      const updatedInvoice = {
        id: invoiceId,
        companyId,
        amount: amount || 1000,
        status: status || 'pending',
        updatedAt: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        invoice: updatedInvoice
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to update invoice'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    return res.status(405).end('Method Not Allowed');
  }
}