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
  return res.status(200).json(company.activity)
}
=======
  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "company_not_found" });
  return res.status(200).json(company.activity);
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
  return res.status(200).json(company.activity);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
