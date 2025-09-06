
import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, readProjects } from '[^']*';
import type { PublicReview, ReviewsSummary } from '../../../types/reviews';
import { TALENT_PROFILES } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { targetType, targetId } = req.query as { targetType?: string, targetId?: string };

    if (!targetType || !targetId) {
      return res.status(400).json({ error: "Missing targetType or targetId" });
    }
    if (targetType !== "talent" && targetType !== "client") {
      return res.status(400).json({ error: "Invalid targetType" });
    }


    const all = null;
    return res.status(200).json({ summary, reviews: publicReviews })

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
  }
}
