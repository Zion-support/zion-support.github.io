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
  if (!company) return res && res.status(404).json({ error: "company_not_found" });
  return res && res.status(200).json(company && company.activity);
}

