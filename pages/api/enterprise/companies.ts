import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
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
=======
import { store } from '../../../utils/data/enterpriseStore';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'slug required' });
   
}
    const company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({ error: 'not_found' });
    return res.status(200).json(company);
 
}

  if (req.method === 'POST') {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const created = store.createCompany({
      name
      slug
      logoUrl
      brandColor
      plan
    });
    return res.status(201).json(created);
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
=======
 
}

  return res.status(405).json({ error: 'method_not_allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
