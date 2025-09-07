import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  try {
    // Placeholder for invoices logic
    const invoices = [];
    res.status(200).json({ success: true, invoices });
  } catch (error) {
    console.error('Invoices error:', error);
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
}