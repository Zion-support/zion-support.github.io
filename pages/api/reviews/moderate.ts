import type {_NextApiRequest, _NextApiResponse} from 'next';

const _ADMIN_KEY = process.env.ADMIN_KEY || 'dev-admin-key';

type Action = 'approve' | 'remove' | 'edit';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const _key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {_return res.status(401).json({ error: 'Unauthorized'});
  }

  try {_const { action, _reviewId, _updates} = req.body as {_action: Action;
      reviewId: string;
      updates?: { rating?: number; text?: string};
    };

    const _reviews = await readReviews();
    const _idx = reviews.findIndex(_(r) => r.id === reviewId);
    if (idx < 0) return res.status(404).json({_error: 'Review not found'});

    if (action === 'approve') {_reviews[idx].approved = true;} else if (action === 'remove') {_reviews[idx].removed = true;} else if (action === 'edit') {_if (!updates) return res.status(400).json({ error: 'Missing updates'});
      if (typeof updates.rating === 'number') {_if (updates.rating < 1 || updates.rating > 5) {
          return res.status(400).json({ error: 'Rating must be 1-5'});
        }
        reviews[idx].rating = updates.rating;
      }
      if (typeof updates.text === 'string') {_reviews[idx].text = updates.text.trim();}
    } else {_return res.status(400).json({ error: 'Invalid action'});
    }

    await writeReviews(reviews);
    return res.status(200).json({_message: 'OK'});
  } catch (error: unknown) {_return res.status(500).json({ error: 'Internal server error', _details: error?.message});
  }
}