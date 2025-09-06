import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyName, contactEmail, contactName, businessType } = req.body;

    if (!companyName || !contactEmail || !contactName) {
      return res.status(400).json({ error: 'Company name, contact email, and contact name are required' });
    }

    // Mock partner registration
    const partner = {
      id: Date.now().toString(),
      code: `PARTNER${Date.now()}`,
      companyName,
      contactEmail,
      contactName,
      businessType: businessType || 'technology',
      status: 'pending',
      registeredAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      partner
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to register partner'
    });
  }
}