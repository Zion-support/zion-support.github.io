import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock response
    const data = {
      success: true,
      message: 'API endpoint working',
      timestamp: new Date().toISOString()
    };

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Internal server error'
    });
  }
}