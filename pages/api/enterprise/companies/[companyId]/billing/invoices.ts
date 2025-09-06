import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { companyId } = req.query;

      if (!companyId || typeof companyId !== 'string') {
        return res.status(400).json({ error: 'Company ID is required' });
      }

      // Mock invoices data
      const invoices = [
        {
          id: '1',
          companyId,
          amount: 1000,
          status: 'paid',
          dueDate: new Date().toISOString(),
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          companyId,
          amount: 500,
          status: 'pending',
          dueDate: new Date().toISOString(),
          createdAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        companyId,
        invoices
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve invoices'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { companyId } = req.query;
      const { amount, description } = req.body;

      if (!companyId || typeof companyId !== 'string') {
        return res.status(400).json({ error: 'Company ID is required' });
      }

      if (!amount) {
        return res.status(400).json({ error: 'Amount is required' });
      }

      // Mock invoice creation
      const newInvoice = {
        id: Date.now().toString(),
        companyId,
        amount,
        description: description || '',
        status: 'pending',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        invoice: newInvoice
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to create invoice'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
}