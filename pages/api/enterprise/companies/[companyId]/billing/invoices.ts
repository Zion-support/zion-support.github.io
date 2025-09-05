<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { store } from '../../../../../../utils/data/enterpriseStore',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query,
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const invoices = store.listInvoices(companyId),
  return res.status(200).json(invoices)
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { companyId} = req.query;
  if (!companyId || typeof companyId !== 'string') {_return res.status(400).json({ error: 'companyId required'});
  }
  const _invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}