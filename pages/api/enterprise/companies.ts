import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method;
    return res.status(201).json(created)
=======
  if (req.method === "GET") {
    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }
  if (req.method === "POST") {
    const { name, slug, logoUrl, brandColor, plan } = req.body |{}
    const created = store.createCompany({
      name
      slug
      logoUrl
      brandColor
      plan
    });
    return res.status(201).json(created);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}