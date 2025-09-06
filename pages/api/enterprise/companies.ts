import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Mock companies list
      const companies = [
        {
          id: '1',
          name: 'Acme Corp',
          status: 'active',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Tech Solutions Inc',
          status: 'active',
          createdAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        companies
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve companies'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, description } = req.body;

      if (!name) {
        return res.status(400).json({ error: 'Company name is required' });
      }

      // Mock company creation
      const newCompany = {
        id: Date.now().toString(),
        name,
        description: description || '',
        status: 'active',
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        company: newCompany
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to create company'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
}