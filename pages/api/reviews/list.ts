<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, readProjects } from '[^']*';
import type { PublicReview, ReviewsSummary } from '../../../types/reviews';
import { TALENT_PROFILES } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { readReviews, readProjects } from '../../../utils/dataStore';
import type { PublicReview, ReviewsSummary } from '../../../types/reviews';
import { TALENT_PROFILES } from '../../../data/talent';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
  }
  try {
<<<<<<< HEAD
=======
  try {;
    const { targetType, targetId } = req.query as { targetType?: string, targetId?: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

    const { targetType, targetId } = req.query as {
      targetType?: string;
      targetId?: string;
    }
    if (!targetType |!targetId) {

      return res.status(400).json({ error: "Missing targetType or targetId" });
=======
    const { targetType, targetId } = req.query as { targetType?: string, targetId?: string };
    if (!targetType || !targetId) {
      return res.status(400).json({ error: 'Missing targetType or targetId' })
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
    if (targetType !== 'talent' && targetType !== 'client') {
      return res.status(400).json({ error: 'Invalid targetType' })
    }

    const all = await readReviews();
    // Include reviews where both sides have submitted and both are approved and not removed
    const filtered = all.filter((r) => {
<<<<<<< HEAD
      if (r.removed |!r.approved) return false;
      const matchesTarget =
        r.toRole === (targetType as "talent" | "client") && r.toId === targetId;
=======
      if (r.removed || !r.approved) return false;
      const matchesTarget = r.toRole === (targetType as 'talent' | 'client') && r.toId === targetId;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (!matchesTarget) return false;
      const counterpartExists = all.some(
        (x) =>
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, readProjects } from '../../../utils/dataStore';
import type { PublicReview, ReviewsSummary } from '../../../types/reviews';
import { TALENT_PROFILES } from '../../../data/talent';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
 
}

  try {
    const { targetType, targetId } = req.query as {
      targetType?: string;
      targetId?: string;
    };

    if (!targetType || !targetId) {
      return res.status(400).json({ error: 'Missing targetType or targetId' });
   
}
    if (targetType !== 'talent' && targetType !== 'client') {
      return res.status(400).json({ error: 'Invalid targetType' });
   
}

    const all = await readReviews();

    // Include reviews where both sides have submitted and both are approved and not removed
    const filtered = all.filter(r => {
      if (r.removed || !r.approved) return false;
      const matchesTarget =
        r.toRole === (targetType as 'talent' | 'client') && r.toId === targetId;
      if (!matchesTarget) return false;
      const counterpartExists = all.some(
        x =>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      .map((r) => {
        let authorName = r.fromId;
        if (r.fromRole === 'talent') {
          const t = TALENT_PROFILES.find((tp) => tp.slug === r.fromId);
          authorName = t ? t.name : r.fromId
        }
        if (r.anonymous) authorName = 'Anonymous';
        return {
<<<<<<< HEAD
          ...r
          authorName
        }
=======
      .map(r => {
        let authorName = r.fromId;
        if (r.fromRole === 'talent') {
          const t = TALENT_PROFILES.find(tp => tp.slug === r.fromId);
          authorName = t ? t.name : r.fromId;
        }
        if (r.anonymous) authorName = 'Anonymous';
        return {
          ...r,
          authorName,
        };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      });
    const totalReviews = publicReviews.length;
    const averageRating = totalReviews
      ? Math.round(
          (publicReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) *
            10
        ) / 10
      : 0;
    const projects = await readProjects();
    const totalCompletedProjects = projects.filter(
      (p) =>
        p.status === "Completed" &&
        ((targetType === "talent" && p.talentSlug === targetId) |
          (targetType === "client" && p.clientId === targetId))
    ).length;
    const summary: ReviewsSummary = {
      averageRating
      totalReviews
      totalCompletedProjects
      mostRecent: publicReviews.slice(0, 5)
    }
    return res.status(200).json({ summary, reviews: publicReviews });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  } catch (error: any) {
=======
 
} catch (error: any) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
=======
          ...r,
          authorName}
      });
    const totalReviews = publicReviews.length;
    const averageRating = totalReviews
      ? Math.round((publicReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10
      : 0;
    const projects = await readProjects();
    const totalCompletedProjects = projects.filter((p) => p.status === 'Completed' && (
      (targetType === 'talent' && p.talentSlug === targetId) ||
      (targetType === 'client' && p.clientId === targetId)
    )).length;
    const summary: ReviewsSummary = {
      averageRating,
    totalReviews,
      totalCompletedProjects,
      mostRecent: publicReviews.slice(0, 5)
    };
    return res.status(200).json({ summary, reviews: publicReviews })
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error?.message })
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (targetType !== 'talent' && targetType !== 'client') {;
      return res.status(400).json({ error: 'Invalid targetType' });
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
    const all = await readReviews();
    // Include reviews where both sides have submitted and both are approved and not removed;
    const filtered = all.filter((r) => {;
      if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      .map((r) => {;
        let authorName = r.fromId;
        if (r.fromRole === 'talent') {;
          const t = TALENT_PROFILES.find((tp) => tp.slug === r.fromId);
          authorName = t ? t.name : r.fromId;
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
        if (r.anonymous) authorName = 'Anonymous';
        return {;
          ...r,;
          authorName  } catch (error) {
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
      }),;
    const totalReviews = publicReviews.length;
    const averageRating = totalReviews;
      ? Math.round((publicReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10;
      : 0,;
    const projects = await readProjects();
    const totalCompletedProjects = projects.filter((p) => p.status === 'Completed' && (;
      (targetType === 'talent' && p.talentSlug === targetId) ||;
      (targetType === 'client' && p.clientId === targetId);
    )).length;
    const summary: ReviewsSummary = {;
      averageRating;
      totalReviews;
      totalCompletedProjects;
      mostRecent: publicReviews.slice(0, 5)};
    return res.status(200).json({ summary, reviews: publicReviews });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error', details: error?.message });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
