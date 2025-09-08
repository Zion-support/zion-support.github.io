import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { name, email, role, country, source } = req.body;

    if (!name || !email || !role || !country) {
      return res.status(400).json({ error: 'Name, email, role, and country are required' });
    }

    // Mock summit registration
    const registration = {
      id: Date.now().toString(),
      name,
      email,
      role,
      country,
      source: source || 'zion-global-2025',
      status: 'registered',
      createdAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      registration
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to register for summit'
    });
  }
}