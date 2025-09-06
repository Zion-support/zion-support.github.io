import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const map = { design: 'map' };
    const tokens = { colors: {}, typography: {} };
    
    res.status(200).json({
      map,
      tokens,
      message: 'Design export completed'
    });
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Export failed'
    });
  }
}