
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from '../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ notes: getAllNotes() })
};

