import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock source map data
    const sourceMap = {
      version: 3,
      sources: ['pages/index.tsx', 'components/Header.tsx'],
      names: ['React', 'Component'],
      mappings: 'AAAA,OAAO,CAAC,GAAG,CAAC,aAAa,CAAC,CAAC'
    };

    res.status(200).json({
      success: true,
      sourceMap
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to generate source map'
    });
  }
}