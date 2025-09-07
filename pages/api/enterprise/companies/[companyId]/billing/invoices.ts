<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../utils/data/enterpriseStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { companyId } = req.query as { companyId?: string };
  if (!companyId) {
    return res.status(400).json({ error: 'Missing company ID' });
  }

  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices || []);
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
