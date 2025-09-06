import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../utils/data/enterpriseStore";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === "GET") {
    const companies = store && store.listCompanies();
    return res && res.status(200).json(companies);
  }

  if (req && req.method === "POST") {
    const { name, slug, logoUrl, brandColor, plan } = req && req.body || {};
    const created = store && store.createCompany({
      name,
      slug,
      logoUrl,
      brandColor,
      plan,
    });
    return res && res.status(201).json(created);
  }

  res && res.setHeader("Allow", "GET,POST");
  return res && res.status(405).end("Method Not Allowed");
}
