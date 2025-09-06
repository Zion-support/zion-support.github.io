import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: 'company_not_found' });

  if (req.method === 'GET') {
<<<<<<< HEAD
    return res.status(200).json(company.plan.usageLimits);
=======
    return res.status(200).json(company.plan.usageLimits)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'PATCH') {
    const { monthlyJobPosts, budgetCapUsd } = req.body || {};
<<<<<<< HEAD
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
    if (typeof monthlyJobPosts !== 'number' || typeof budgetCapUsd !== 'number') {
      return res.status(400).json({ error: 'monthlyJobPosts and budgetCapUsd must be numbers' })
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'company_not_found' })
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
