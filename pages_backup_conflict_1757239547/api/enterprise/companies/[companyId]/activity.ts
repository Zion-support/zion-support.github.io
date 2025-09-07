import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "company_not_found" });
  return res.status(200).json(company.activity);
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ activity: [] });
import { store } from '../../../../../utils/data/enterpriseStore';
export default function handler(req, res) {
  try {
    res.status(200).json({ message: 'API endpoint working' })
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!company) return res.status(404).json({ error: "company_not_found" });
  return res.status(200).json(company.activity);
}
