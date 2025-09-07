import type { NextApiRequest, NextApiResponse } from 'next';
;
const store:Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const { address } = req.query as { address?:string };
  if (!address) return res.status(400).json({ error:'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data });
}import type { NextApiRequest, NextApiResponse } from 'next';

const store: Record<string, any> = (global as any).ZION_DID_STORE || {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { did } = req.query;

    if (!did || typeof did !== 'string') {
      return res.status(400).json({ error: 'DID parameter is required' });
    }

    const didData = store[did];

    if (!didData) {
      return res.status(404).json({ error: 'DID not found' });
    }

    res.status(200).json({
      success: true,
      did,
      data: didData
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to retrieve DID data' 
    });
  }
}
