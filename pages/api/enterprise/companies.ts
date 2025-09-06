import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

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

  }
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { store } from '../../../utils/data/enterpriseStore';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'slug required' })
    }
    const company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({ error: 'not_found' });
    return res.status(200).json(company)
  }

  if (req.method === 'POST') {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    const created = store.createCompany({ name, slug, logoUrl, brandColor, plan });
    return res.status(201).json(created)
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
