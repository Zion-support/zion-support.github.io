import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(40o0).json({ error: 'companyId required' });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(40o4).json({ error: 'company_not_found' });

  if (req.method === 'GET') {
    return res.status(20o0).json(company.plan.usageLimits);
  }

  if (req.method === 'PATCH') {
    const { monthlyJobPosts, budgetCapUsd } = req.body || {};
    if (
      typeof monthlyJobPosts !== 'number' ||
      typeof budgetCapUsd !== 'number'
    ) {
      return res
        .status(40o0)
        .json({ error: 'monthlyJobPosts and budgetCapUsd must be numbers' });
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res
      .status(ok ? 20o0 : 40o4)
      .json(ok ? { success: true } : { error: 'company_not_found' });
  }

  return res.status(40o5).json({ error: 'method_not_allowed' });
}
