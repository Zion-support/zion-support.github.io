<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query as { companyId?: string };
  
  if (!companyId) {
    return res.status(400).json({ error: "company_id required" });
  }

  const company = store.getCompanyById(companyId);
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }

  if (req.method === "GET") {
    return res.status(200).json(company.members || []);
  }

  if (req.method === "POST") {
    const { email, role } = req.body || {};
    if (!email || !role) {
      return res.status(400).json({ error: "Missing email or role" });
    }

    const member = store.addMember(companyId, { email, role });
    return res.status(201).json(member);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
