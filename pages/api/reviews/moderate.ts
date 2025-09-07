<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, writeReviews } from '../../../utils/dataStore';
const ADMIN_KEY = $2;
type Action = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const key = $2;
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const { action, reviewId, updates } = req.body as {
      action: Action,
      reviewId: string,
      updates?: { rating?: number, text?: string }
    },

    const reviews = await readReviews($2);
    const idx = $2;
    if (idx < 0) return res.status(404).json($2);
    if (action === 'approve') {
      reviews[idx].approved = true
    } else if (action === 'remove') {
      reviews[idx].removed = true
    } else if (action === 'edit') {
      if (!updates) return res.status(400).json($2);
      if (typeof updates.rating === 'number') {
        if (updates.rating < 1 || updates.rating > 5) {
          return res.status(400).json({ error: 'Rating must be 1-5' })
        }
        reviews[idx].rating = updates.rating
      }
      if (typeof updates.text === 'string') {
        reviews[idx].text = updates.text.trim()
      }
    } else {
      return res.status(400).json({ error: 'Invalid action' })
    }

    await writeReviews($2);
    return res.status(200).json({ message: 'OK' })
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error ?.message })
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}