import type { NextApiRequest, NextApiResponse } from 'next';

type Action = 'approve' | 'remove' | 'edit';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Review moderated' });
}