import { NextApiRequest, NextApiResponse } from 'next';

// In-memory demo store per process
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
(global as any).ZION_DID_STORE = store;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { did, data } = req.body;
    store[did] = data;
    res.status(200).json({ message: 'DID linked' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}