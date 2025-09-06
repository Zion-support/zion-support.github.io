
import type { NextApiRequest, NextApiResponse } from 'next';

function getAllNotes() {
  return [];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ notes: getAllNotes() });
}