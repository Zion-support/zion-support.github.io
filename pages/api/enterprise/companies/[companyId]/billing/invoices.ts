import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID is required' });
    }

    if (req.method === 'GET') {
      // List invoices
      const invoices = [
        { id: '1', amount: 1000, status: 'paid', date: '2024-01-01' },
        { id: '2', amount: 1500, status: 'pending', date: '2024-02-01' }
      ];
      res.status(200).json(invoices);
    } else if (req.method === 'POST') {
      // Create invoice
      const { amount, description } = req.body;
      
      if (!amount) {
        return res.status(400).json({ error: 'Amount is required' });
      }

      const invoice = {
        id: Date.now().toString(),
        companyId,
        amount,
        description: description || '',
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      res.status(201).json(invoice);
    }
  } catch (error) {
    console.error('Invoices error:', error);
    res.status(500).json({ error: 'Failed to process invoices' });
  }
}