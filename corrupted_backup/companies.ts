<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';

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
    const created = store.createCompany({
      name,
      slug,
      logoUrl,
      brandColor,
      plan,
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
