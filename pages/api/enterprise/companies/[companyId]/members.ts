import { NextApiRequest, NextApiResponse } from 'next';
import { enterpriseStore } from '../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || Array.isArray(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  if (req.method === 'GET') {
    const company = enterpriseStore.getCompany(companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    // Get company members (placeholder)
    const members = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
        joinedAt: new Date().toISOString()
      }
    ];

    return res.status(200).json(members);
  }

  if (req.method === 'POST') {
    const { email, role } = req.body;
    
    if (!email || !role) {
      return res.status(400).json({ error: 'Email and role are required' });
    }

    // Add member logic (placeholder)
    const member = {
      id: Date.now().toString(),
      email,
      role,
      joinedAt: new Date().toISOString()
    };

    return res.status(201).json(member);
  }

  if (req.method === 'PUT') {
    const { memberId } = req.query;
    const { role } = req.body;

    if (!memberId || Array.isArray(memberId)) {
      return res.status(400).json({ error: 'Invalid member ID' });
    }

    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }

    // Update member role (placeholder)
    return res.status(200).json({ 
      success: true, 
      memberId, 
      role 
    });
  }

  if (req.method === "DELETE") {
    const { memberId } = req.query;

    if (!memberId || Array.isArray(memberId)) {
      return res.status(400).json({ error: 'Invalid member ID' });
    }

    // Remove member logic (placeholder)
    return res.status(200).json({ 
      success: true, 
      memberId 
    });
  }

  res.setHeader('Allow', 'GET, POST, PUT, DELETE');
  return res.status(405).json({ error: 'method_not_allowed' });
}