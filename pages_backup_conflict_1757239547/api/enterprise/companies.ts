import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../utils/data/enterpriseStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }
  
  if (req.method === "POST") {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    const created = store.createCompany({
      name,
      slug,
      logoUrl,
      brandColor,
      plan
    });
    return res.status(201).json(created);
  }
  
  res.setHeader("Allow", "GET, POST");
  return res.status(405).end("Method Not Allowed");
}