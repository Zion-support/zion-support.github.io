import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

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
