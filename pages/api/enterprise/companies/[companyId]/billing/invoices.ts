import type { NextApiRequest, NextApiResponse } from 'next',
import { store } from '../../../../../../utils/data/enterpriseStore'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const invoices = store.listInvoices(companyId)
  return res.status(200).json(invoices)
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}