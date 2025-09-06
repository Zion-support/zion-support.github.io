import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    
    if (!name || !slug) {
      return res.status(400).json({ error: 'Name and slug are required' });
    }

    const company = store.createCompany({
      name,
      slug,
      logoUrl,
      brandColor,
      plan: plan || 'basic'
    });

    return res.status(201).json(company);
  }

  if (req.method === 'GET') {
    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}