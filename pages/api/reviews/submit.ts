import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from '[^']*';
import { findProjectById, hasExistingReview, upsertReview, counterpartRole } from '[^']*';
import type { Review } from '../../../types/reviews';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      projectId;
      fromRole;
      fromId;
      rating;
      text;
      categories;
      anonymous} = req.body as {
      projectId: string;
      fromRole: 'client' | 'talent';
      fromId: string;
      rating: number;
      text: string;
      categories?: Review['categories'];
      anonymous?: boolean
    };
    if (!projectId || !fromRole || !fromId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }
    if (!text || String(text).trim().length;
    return res.status(201).json({ message: 'Review submitted', reviewId: review.id })
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
  }
}
