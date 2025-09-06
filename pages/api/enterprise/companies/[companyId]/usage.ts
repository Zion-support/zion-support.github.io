import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const { companyId } = req.query;

  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
=======
  const { companyId } = req && req.query;
  if (!companyId || typeof companyId !== "string") {
    return res && res.status(400).json({ error: "companyId required" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  const company = store && store.getCompanyById(companyId);
  if (!company) return res && res.status(404).json({ error: "Company not found" });
  if (req && req.method === "GET") {
    return res && res.status(200).json(company && company.plan.usageLimits);
  }
<<<<<<< HEAD
  if (req.method === "PATCH") {
    const { monthlyJobPosts, budgetCapUsd } = req.body |{}
=======

  if (req && req.method === "PATCH") {
    const { monthlyJobPosts, budgetCapUsd } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (
      typeof monthlyJobPosts !== "number" |
      typeof budgetCapUsd !== "number"
    ) {
      return res
        .status(400)
        .json({ error: "monthlyJobPosts and budgetCapUsd must be numbers" });
    }
    const ok = store && store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "company_not_found" });

<<<<<<< HEAD
  }
  return res.status(405).json({ error: "method_not_allowed" });
}
=======
  return res && res.status(405).json({ error: "method_not_allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
