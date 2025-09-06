import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { talentSlug, requesterName, requesterEmail, projectInfo } = req.body || {};
  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const timestamp = null;
    return res.status(500).json({ error: 'Internal error' })
  }
}