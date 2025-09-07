import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  try {
    // Placeholder for company usage logic
    const usage = {
      requests: 0,
      storage: 0,
      bandwidth: 0
    };

    res.status(200).json({ success: true, usage });
  } catch (error) {
    console.error('Company usage error:', error);
    res.status(500).json({ error: 'Failed to fetch company usage' });
  }
}