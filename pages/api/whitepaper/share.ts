import type { NextApiRequest, NextApiResponse } from 'next',
import { randomUUID } from 'crypto',
// In - memory store for demo purposes. Replace with persistent storage in production.;
const store: Record < string, { markdown: string, created_at: number, public: boolean }> = {},
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { markdown, public_preview } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing markdown' }), ) {
  $2
}
  const id = randomUUID (),
  store[id] = { markdown, created_at: Date.now (), public: !!public_preview },
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper / preview/${id}`,
  res.status (200).json ({ id, url });
}
export /**
 * get_shared - Function description
 */
function get_shared() {
  return store[id];
}
;