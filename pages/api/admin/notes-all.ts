import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = true; // Mock implementation
  return res.status(200).json({ notes: getAllNotes() });
}
