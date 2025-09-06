import type { NextApiRequest, NextApiResponse } from 'next',;'
import { getAllNotes } from './notes',;
export default function handler() { return null; }
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
  return res.status(200).json({ notes: getAllNotes() });
};'