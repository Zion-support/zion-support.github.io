import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({,
    error: 'slug required' })
    }
    const company = store.getCompanyBySlug(slug);
    if (!company) return res.status(404).json({,
    error: 'not_found' });
    return res.status(200).json(company)
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ message: 'Companies endpoint' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

  return res.status(405).json({,
    error: 'method_not_allowed' })
}