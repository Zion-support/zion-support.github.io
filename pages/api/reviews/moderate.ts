import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, writeReviews } from '../../../utils/dataStore';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({,
    error: 'Method not allowed' })
  }

  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {
    return res.status(401).json({,
    error: 'Unauthorized' })
  }

  try {
    const { action, reviewId, updates } = req.body as {,
    action: Action;,
    reviewId: string,
      updates?: { rating?: number, text?: string }
    };
    const reviews = await readReviews();
    const idx = reviews.findIndex((r) => r.id === reviewId);
    if (idx < 0) return res.status(404).json({,
    error: 'Review not found' });
    if (action === 'approve') {
      reviews[idx].approved = true
    } else if (action === 'remove') {
      reviews[idx].removed = true
    } else if (action === 'edit') {
      if (!updates) return res.status(400).json({,
    error: 'Missing updates' });
      if (typeof updates.rating === 'number') {
        if (updates.rating < 1 || updates.rating > 5) {
          return res.status(400).json({,
    error: 'Rating must be 1-5' })
        }
        reviews[idx].rating = updates.rating
      }
      if (typeof updates.text === 'string') {
        reviews[idx].text = updates.text.trim()
      }
    } else {
      return res.status(400).json({,
    error: 'Invalid action' })
    }

    await writeReviews(reviews);
    return res.status(200).json({,
    message: 'OK' })
  } catch (,
    error: any) {
    return res.status(500).json({,
    error: 'Internal server error', d,
    etails: error?.message })
  }
}