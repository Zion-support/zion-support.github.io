import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID is required' });
    }

    if (req.method === 'GET') {
      // List members
      const members = [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' }
      ];
      res.status(200).json(members);
    } else if (req.method === 'POST') {
      // Add member
      const { name, email, role } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      const member = {
        id: Date.now().toString(),
        companyId,
        name,
        email,
        role: role || 'user',
        createdAt: new Date().toISOString()
      };

      res.status(201).json(member);
    }
  } catch (error) {
    console.error('Members error:', error);
    res.status(500).json({ error: 'Failed to process members' });
  }
}