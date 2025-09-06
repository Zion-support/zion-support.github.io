<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
  }
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
