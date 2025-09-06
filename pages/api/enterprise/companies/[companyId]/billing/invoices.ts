import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';
<<<<<<< HEAD

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
  }
  const invoices = store.listInvoices(companyId);
<<<<<<< HEAD
  return res.status(200).json(invoices);
=======
  return res.status(200).json(invoices);
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
