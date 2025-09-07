import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
  }
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  
  const company = store.getCompanyById(companyId);
  if (!company) {
    return res.status(404).json({ error: 'company_not_found' });
  }
  
  const usage = company.usage || {
    apiCalls: 0,
    storage: 0,
    users: 0
  };
  
  return res.status(200).json(usage);
}