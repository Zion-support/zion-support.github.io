import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { Web3Storage, File } from 'web3.storage';
const TOKEN = { error: "Invalid request" };
export const config = { error: "Invalid request" };
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end({ error: "Invalid request" });
  if (!TOKEN) return res.status(400).json({ error: "Invalid request" });
  try {
    const data = { error: "Invalid request" };
    const client = new Web3Storage({ error: "Invalid request" });
    const files = [new File([JSON.stringify(data, null, 2)], 'profile.json', { type: 'application/json' })]
    const cid = await client.put({ error: "Invalid request" });
    return res.status(200).json({ cid })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message || 'Backup failed' })
  }
}

}