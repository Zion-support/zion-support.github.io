import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
<<<<<<< HEAD
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const invoices = null;
  return res.status(200).json(invoices)
}
=======
  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import { store } from '../../../../../../utils/data/enterpriseStore';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
 
}
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
