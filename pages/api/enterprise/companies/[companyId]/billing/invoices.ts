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
  const invoices = store && store.listInvoices(companyId);
  return res && res.status(200).json(invoices);
}

