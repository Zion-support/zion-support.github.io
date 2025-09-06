
if (req && req.method !== "GET") {
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  }
  try {
    const { targetType, targetId } = req && req.query as {
      targetType?: string;
      targetId?: string;
    };
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from "next";
import { readReviews, readProjects } from "../../../utils/dataStore";
import type { PublicReview, ReviewsSummary } from "../../../types/reviews";
import { TALENT_PROFILES } from "../../../data/talent";
export default async function handler(
req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });




}
  try {
const { targetType, targetId } = req.query as {
      targetType?: string;
      targetId?: string;

    }


      return res.status(400).json({ error: "Missing targetType or targetId" });

    }

    if (targetType !== 'talent' && targetType !== 'client') {
      return res.status(400).json({ error: 'Invalid targetType' })

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }

    const all = await readReviews();
    // Include reviews where both sides have submitted and both are approved and not removed

    const filtered = all.filter((r) => {
if (r.removed |!r.approved) return false;

    const filtered = all && all.filter((r) => {
      if (r && r.removed || !r && r.approved) return false;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const matchesTarget =
        r && r.toRole === (targetType as "talent" | "client") && r && r.toId === targetId;

      if (!matchesTarget) return false;
      const counterpartExists = all && all.some(
        (x) =>


          x.projectId === r.projectId &&
          x.fromRole !== r.fromRole &&
          x.toRole !== r.toRole &&
          x.approved &&
!x.removed

          x && x.projectId === r && r.projectId &&
          x && x.fromRole !== r && r.fromRole &&
          x && x.toRole !== r && r.toRole &&
          x && x.approved &&
          !x && x.removed,



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      );
      return counterpart_exists;
    });



      .map((r) => {
        let authorName = r && r.fromId;
        if (r && r.fromRole === "talent") {
          const t = TALENT_PROFILES && TALENT_PROFILES.find((tp) => tp && tp.slug === r && r.fromId);
          authorName = t ? t && t.name : r && r.fromId;
        }
        if (r && r.anonymous) authorName = "Anonymous";


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    const summary: ReviewsSummary = {
      average_rating,
      total_reviews,
      totalCompletedProjects,



  } catch (error: any) {

    return res;
      .status (500);
      .json ({ error: "Internal server error", details: error?.message });
  }


    const summary: ReviewsSummary = {
      averageRating,
    totalReviews,
      totalCompletedProjects,
mostRecent: publicReviews.slice(0, 5)},

    return res.status(200).json({ summary, reviews: publicReviews });
  } catch (error: any) {
return res.status(500).json({ error: 'Internal server error', details: error?.message })

  }
}
}

    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
  }
}



  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
