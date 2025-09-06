import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { name, email, company, website } = req.body;
    
    if (!name || !email || !company) {
      return res.status(400).json({ error: 'Name, email, and company are required' });
    }

    // Mock partner registration
    const partner = {
      id: Date.now().toString(),
      code: `PARTNER${Date.now().toString().slice(-6)}`,
      name,
      email,
      company,
      website: website || '',
      status: 'pending',
      registeredAt: new Date().toISOString()
    };

    res.status(201).json(partner);
  } catch (error) {
    console.error('Partner registration error:', error);
    res.status(500).json({ error: 'Failed to register partner' });
  }
}