import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    responseLimit: false
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { companyId, invoiceId } = req.query;
  if (!companyId || typeof companyId !== 'string' || !invoiceId || typeof invoiceId !== 'string') {
    return res.status(400).json({ error: 'Invalid company ID or invoice ID' });
  }

  try {
    // Placeholder for invoice retrieval logic
    const invoice = {
      id: invoiceId,
      companyId,
      amount: 0,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({ success: true, invoice });
  } catch (error) {
    console.error('Invoice error:', error);
    res.status(500).json({ error: 'Failed to fetch invoice' });
  }
}