import { NextApiRequest, NextApiResponse } from 'next';
import { enterpriseStore } from '../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || Array.isArray(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  if (req.method === 'GET') {
    const company = enterpriseStore.getCompany(companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    // Get usage statistics (placeholder)
    const usage = {
      apiCalls: 1000,
      storageUsed: '2.5GB',
      activeUsers: 25,
      lastUpdated: new Date().toISOString()
    };

    return res.status(200).json(usage);
  }

  res.setHeader('Allow', 'GET');
  return res.status(405).json({ error: 'method_not_allowed' });
}