import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });  }
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: 'Company not found' });
  if (req.method === 'GET') {
<<<<<<< HEAD
    return res.status(200).json(company.plan.usageLimits);  }

  if (req.method === 'PATCH') {
    const { monthlyJobPosts, budgetCapUsd } = req.body || {};
    if (
      typeof monthlyJobPosts !== 'number' ||
      typeof budgetCapUsd !== 'number'
    ) {
      return res
        .status(400)
        .json({ error: 'monthlyJobPosts and budgetCapUsd must be numbers' });
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: 'company_not_found' });
  }

  return res.status(405).json({ error: 'method_not_allowed' });
=======
    return res.status(200).json(company.plan.usageLimits)
  }

  if (req.method === 'PATCH') {
    const { monthlyJobPosts, budgetCapUsd } = req.body || {};
    if (typeof monthlyJobPosts !== 'number' || typeof budgetCapUsd !== 'number') {
      return res.status(400).json({ error: 'monthlyJobPosts and budgetCapUsd must be numbers' })
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'company_not_found' })
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
