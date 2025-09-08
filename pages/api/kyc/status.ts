import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({,
    error: 'Method not allowed' });
  const { userId } = req.query as { userId?: string };
  if (!userId) return res.status(400).json({,
    error: 'Missing userId' });
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({,
    error: 'Profile not found' });
  res.status(200).json({,
    ok: true;
    profile;,
    requiredDocuments: getRequiredDocuments(profile.role),
    o,
    ptionalDocuments: getOptionalDocuments(profile.role)})
}