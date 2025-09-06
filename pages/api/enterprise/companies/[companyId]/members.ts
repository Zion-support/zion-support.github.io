import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { companyId } = req.query;

      if (!companyId || typeof companyId !== 'string') {
        return res.status(400).json({ error: 'Company ID is required' });
      }

      // Mock members data
      const members = [
        {
          id: '1',
          companyId,
          name: 'John Doe',
          email: 'john@example.com',
          role: 'admin',
          status: 'active',
          joinedAt: new Date().toISOString()
        },
        {
          id: '2',
          companyId,
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: 'member',
          status: 'active',
          joinedAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        companyId,
        members
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve members'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { companyId } = req.query;
      const { name, email, role } = req.body;

      if (!companyId || typeof companyId !== 'string') {
        return res.status(400).json({ error: 'Company ID is required' });
      }

      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      // Mock member creation
      const newMember = {
        id: Date.now().toString(),
        companyId,
        name,
        email,
        role: role || 'member',
        status: 'active',
        joinedAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        member: newMember
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to add member'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end('Method Not Allowed');
  }
}