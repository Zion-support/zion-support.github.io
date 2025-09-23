import { NextApiRequest, NextApiResponse } from 'next';

function getAllNotes() {
  // Mock implementation - replace with actual notes retrieval
  return [];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });
  return res.status(200).json({ notes: getAllNotes() });
}