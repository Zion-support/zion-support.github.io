import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    
    if (!name || !slug) {
      return res.status(400).json({ error: 'Name and slug are required' });
    }

    // Placeholder for company creation logic
    const company = {
      id: `company-${Date.now()}`,
      name,
      slug,
      logoUrl: logoUrl || '',
      brandColor: brandColor || '#000000',
      plan: plan || 'basic',
      createdAt: new Date().toISOString()
    };

    res.status(201).json({ success: true, company });
  } catch (error) {
    console.error('Company creation error:', error);
    res.status(500).json({ error: 'Failed to create company' });
  }
}