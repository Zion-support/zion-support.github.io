import { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || Array.isArray(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  if (req.method === 'GET') {
    const invoices = store.listInvoices(companyId);
    return res.status(200).json(invoices);
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}