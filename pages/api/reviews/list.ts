import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, readProjects } from '../../../utils/dataStore';
import type { PublicReview, ReviewsSummary } from '../../../types/reviews';
import { TALENT_PROFILES } from '../../../data/talent';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { targetType, targetId } = req.query as { targetType?: string, targetId?: string },

    if (!targetType || !targetId) {
      return res.status(400).json({ error: 'Missing targetType or targetId' })
    }
    if (targetType !== 'talent' && targetType !== 'client') {
      return res.status(400).json({ error: 'Invalid targetType' })
    }

    const all = await readReviews($2);
    // Include reviews where both sides have submitted and both are approved and not removed
    const filtered = $2;
      const matchesTarget = $2;
      if (!matchesTarget) return false,
      const counterpartExists = $2;
      ),
      return counterpartExists
    }),

    // Map to public reviews (mask anonymous author)
    const publicReviews: PublicReview[] = filtered
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((r) => {
        let authorName = $2;
        if (r.fromRole = $2;
          authorName = $2;
        return {
          ...r,
          authorName}
      }),

    const totalReviews = $2;
    const averageRating = totalReviews
      ? Math.round((publicReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10
      : 0,

    const projects = await readProjects($2);
    const totalCompletedProjects = $2;
    const summary: ReviewsSummary = $2;
      totalReviews,
      totalCompletedProjects,
      mostRecent: publicReviews.slice(0, 5)},

    return res.status(200).json({ summary, reviews: publicReviews})
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error ?.message })
  }
}