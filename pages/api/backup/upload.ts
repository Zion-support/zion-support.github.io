import type { NextApiRequest, NextApiResponse } from 'next';
import { Web3Storage, File } from 'web3.storage';
const TOKEN = $2;
export const config = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end($2);
  if (!TOKEN) return res.status(400).json($2);
  try {
    const data = $2;
    const client = new Web3Storage($2);
    const files = [new File([JSON.stringify(data, null, 2)], 'profile.json', { type: 'application/json' })],
    const cid = await client.put($2);
    return res.status(200).json({ cid })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message || 'Backup failed' })
  }
}