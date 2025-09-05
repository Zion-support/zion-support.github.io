<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { store } from '../../../../../../utils/data/enterpriseStore',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const { companyId } = req.query,;
  if (!companyId || typeof companyId !== 'string') {;
    return res.status(400).json({ error:'companyId required' }),;
  }
  const invoices = store.listInvoices(companyId),;
  return res.status(200).json(invoices),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { store } from '../../../../../../utils/data/enterpriseStore',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query,
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const invoices = store.listInvoices(companyId),
  return res.status(200).json(invoices)}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
