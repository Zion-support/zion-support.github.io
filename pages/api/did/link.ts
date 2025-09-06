
import type { NextApiRequest, NextApiResponse } from 'next';


// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__;
  return res.status(200).json({ ok: true })
};