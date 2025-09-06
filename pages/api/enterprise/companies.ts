import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // List companies
      const companies = [
        { id: '1', name: 'Company A', status: 'active' },
        { id: '2', name: 'Company B', status: 'active' }
      ];
      res.status(200).json(companies);
    } else if (req.method === 'POST') {
      // Create company
      const { name, description } = req.body;
      
      if (!name) {
        return res.status(400).json({ error: 'Company name is required' });
      }

      const company = {
        id: Date.now().toString(),
        name,
        description: description || '',
        status: 'active',
        createdAt: new Date().toISOString()
      };

      res.status(201).json(company);
    }
  } catch (error) {
    console.error('Companies error:', error);
    res.status(500).json({ error: 'Failed to process companies' });
  }
}