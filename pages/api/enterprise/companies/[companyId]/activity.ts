import { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || Array.isArray(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  if (req.method === 'GET') {
    const company = store.getCompany(companyId);
    if (!company) return res.status(404).json({ error: 'company_not_found' });
    
    return res.status(200).json(company.activity || []);
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}