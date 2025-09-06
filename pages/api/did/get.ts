import { NextApiRequest, NextApiResponse } from 'next';

const store: Record<string, any> = (global as any).ZION_DID_STORE || {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ dids: Object.keys(store) });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}