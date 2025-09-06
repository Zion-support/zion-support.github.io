import type { NextApiRequest, NextApiResponse } from 'next';

interface MultiverseState {
  universes: Array<{
    id: string;
    name: string;
    status: 'active' | 'inactive';
    createdAt: string;
  }>;
  currentUniverse: string | null;
}

function readState(): MultiverseState {
  return {
    universes: [
      {
        id: '1',
        name: 'Primary Universe',
        status: 'active',
        createdAt: new Date().toISOString()
      }
    ],
    currentUniverse: '1'
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const state = readState();
    
    res.status(200).json({
      state,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Multiverse hub error:', error);
    res.status(500).json({ error: 'Failed to get multiverse state' });
  }
}