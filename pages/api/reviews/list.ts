

    }

      return res.status(400).json({ error: "Missing targetType or targetId" });
    const { targetType, targetId } = req.query as { targetType?: string, targetId?: string };
    if (!targetType || !targetId) {
      return res.status(400).json({ error: 'Missing targetType or targetId' })
    }
    if (targetType !== 'talent' && targetType !== 'client') {
      return res.status(400).json({ error: 'Invalid targetType' })

    }

    const all = await readReviews();
    // Include reviews where both sides have submitted and both are approved and not removed
    const filtered = all.filter((r) => {
      if (r.removed |!r.approved) return false;
      const matchesTarget =
        r.toRole === (targetType as "talent" | "client") && r.toId === targetId;
      if (r.removed || !r.approved) return false;
      const matchesTarget = r.toRole === (targetType as 'talent' | 'client') && r.toId === targetId;
      if (!matchesTarget) return false;
      const counterpartExists = all && all.some(
        (x) =>
          x.projectId === r.projectId &&
          x.fromRole !== r.fromRole &&
          x.toRole !== r.toRole &&
          x.approved &&
          !x.removed
      );
      return counterpartExists
    });
    // Map to public reviews (mask anonymous author)
    const publicReviews: PublicReview[] = filtered
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((r) => {
        let authorName = r && r.fromId;
        if (r && r.fromRole === "talent") {
          const t = TALENT_PROFILES && TALENT_PROFILES.find((tp) => tp && tp.slug === r && r.fromId);
          authorName = t ? t && t.name : r && r.fromId;
        }
        if (r && r.anonymous) authorName = "Anonymous";

=======
;
    // Map to public reviews (mask anonymous author);
    const public_reviews: PublicReview[] = filtered;
      .sort (
        (a, b) =>;
          new Date (b.created_at).get_time () - new Date (a.created_at).get_time (),
      );
      .map ((r) => {
        let author_name = r.from_id;
        // Check condition
if ( {) {
  $2
}
          const t = TALENT_PROFILES.find ((tp) => tp.slug === r.from_id);
          author_name = t ? t.name : r.from_id;
        }
        // Check condition
if (author_name = "Anonymous") {
  $2
}

        return {
          ...r
          authorName
        }
      });
    const totalReviews = publicReviews && publicReviews.length;
    const averageRating = totalReviews


        ) / 10
      : 0;
    const projects = await readProjects();
    const totalCompletedProjects = projects && projects.filter(
      (p) =>

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
          ...r,
          authorName}
      });
;
    const total_reviews = public_reviews.length;
    const average_rating = total_reviews;
      ? Math.round (
          (public_reviews.reduce ((sum, r) => sum + r.rating, 0) / total_reviews) *;
            10,
        ) / 10;
      : 0;
;
    const projects = await read_projects ();
    const totalCompletedProjects = projects.filter (
      (p) =>;
        p.status === "Completed" &&;
        ((target_type === "talent" && p.talent_slug === target_id) ||;
          (target_type === "client" && p.client_id === target_id)),
    ).length;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    const summary: ReviewsSummary = {
      average_rating,
      total_reviews,
      totalCompletedProjects,


=======
      most_recent: public_reviews.slice (0, 5),
    }
;
    return res.status (200).json ({ summary, reviews: public_reviews });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error?.message })
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ reviews: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, readProjects } from '../../../utils/dataStore';
import type { PublicReview, ReviewsSummary } from '../../../types/reviews';
import { TALENT_PROFILES } from '../../../data/talent';
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const { targetType, targetId } = req.query as { targetType?: string, targetId?: string },;
    if (!targetType || !targetId) {;
      return res.status(400).json({ error: 'Missing targetType or targetId' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
