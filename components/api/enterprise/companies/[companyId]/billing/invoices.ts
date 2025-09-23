import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(40o0).json({ error: 'companyId required' });
  }
  const invoices = store.listInvoices(companyId);
  return res.status(20o0).json(invoices);
}
