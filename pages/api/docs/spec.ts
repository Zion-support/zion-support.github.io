import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for API spec
    const spec = {
      name: 'Zion Tech Group API',
      version: '1.0.0',
      description: 'API specification for Zion Tech Group services',
      endpoints: []
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(spec);
  } catch (error) {
    console.error('API spec error:', error);
    res.status(500).json({ error: 'Failed to generate API spec' });
  }
}