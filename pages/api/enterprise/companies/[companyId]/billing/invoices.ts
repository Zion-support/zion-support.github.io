import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../utils/data/enterpriseStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req && req.query;
  if (!companyId || typeof companyId !== "string") {
    return res && res.status(400).json({ error: "companyId required" });
  }
  const invoices = store && store.listInvoices(companyId);
  return res && res.status(200).json(invoices);
}
