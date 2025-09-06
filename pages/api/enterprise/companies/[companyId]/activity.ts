import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
<<<<<<< HEAD

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
  }
  const company = store.getCompanyById(companyId);
<<<<<<< HEAD
  if (!company) return res.status(404).json({ error: 'company_not_found' });
  return res.status(200).json(company.activity);
=======
  if (!company) return res.status(404).json({ error: 'Company not found' });
  return res.status(200).json(company.activity)
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
