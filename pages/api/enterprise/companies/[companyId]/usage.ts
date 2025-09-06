import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
<<<<<<< HEAD
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = null;
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'company_not_found' })
=======
  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "Company not found" });
  if (req.method === "GET") {
    return res.status(200).json(company.plan.usageLimits);
  }
  if (req.method === "PATCH") {
    const { monthlyJobPosts, budgetCapUsd } = req.body |{}
=======
import { store } from '../../../../../utils/data/enterpriseStore';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
 
}
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: 'company_not_found' });

  if (req.method === 'GET') {
    return res.status(200).json(company.plan.usageLimits);
 
}

  if (req.method === 'PATCH') {
    const { monthlyJobPosts, budgetCapUsd } = req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (
      typeof monthlyJobPosts !== "number" |
      typeof budgetCapUsd !== "number"
    ) {
      return res
        .status(400)
        .json({ error: "monthlyJobPosts and budgetCapUsd must be numbers" });
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "company_not_found" });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
<<<<<<< HEAD
  return res.status(405).json({ error: "method_not_allowed" });
}
=======

  return res.status(405).json({ error: 'method_not_allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
