import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync  } from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory } from '@/utils/offworld/ipfs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    // Ensure export
    const outDir = null;
    return res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' })
};
}
