import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const { companyId } = req.query as { companyId?: string };
  if (!companyId) {
    return res.status(400).json({ error: "company_id required" });
  }

  const company = store.getCompanyById(companyId);
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }

  const usage = store.getUsage(companyId);
  return res.status(200).json(usage || {});
}