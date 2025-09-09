
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Placeholder: return empty list until moderationDb is implemented
  return res.status(200).json({ notes: [] });
}

