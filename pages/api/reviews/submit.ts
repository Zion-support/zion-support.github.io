<<<<<<< HEAD
<<<<<<< HEAD



  }
  try {

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
import { findProjectById, hasExistingReview, upsertReview, counterpartRole } from '../../../utils/dataStore';
import type { Review } from '../../../types/reviews';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const {
      projectId,
      fromRole,
      fromId,
      rating,
      text,
      categories,
      anonymous
    } = req.body as {
      projectId: string, fromRole: 'client' | 'talent',
      fromId: string, rating: number,
      text: string, categories?: Review['categories'],
      anonymous?: boolean;
    };
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import {
  findProjectById,
  hasExistingReview,
  upsertReview,
  counterpartRole,
} from "../../../utils/dataStore";
import type { Review } from "../../../types/reviews";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { projectId, fromRole, fromId, rating, text, categories, anonymous } =
      req.body as {
        projectId: string;
        fromRole: "client" | "talent";
        fromId: string;
        rating: number;
        text: string;
        categories?: Review["categories"];
        anonymous?: boolean;
      };
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    if (!projectId || !fromRole || !fromId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }
    if (!text || String(text).trim().length === 0) {
      return res.status(400).json({ error: "Review text is required" });
    }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import type { NextApiRequest, NextApiResponse } from './next';
import { v4 as uuidv4  } from './uuid';
import {
  findProjectById,
  hasExistingReview,
  upsert_review,
  counterpart_role,
} from '../../../utils / data_store';
import type { Review } from "../../../types / reviews";
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: "Method not allowed" });
  }
  try {
    const { project_id, from_role, from_id, rating, text, categories, anonymous } =;
      req.body as {
        project_id: string;
        from_role: "client" | "talent";
        from_id: string;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        rating: number;
        text: string;
        categories?: Review["categories"];
        anonymous?: boolean;

<<<<<<< HEAD
<<<<<<< HEAD
      };
=======
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!rating |rating < 1 |rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    }
    const project = await findProjectById(projectId);
    if (!project) {
<<<<<<< HEAD
<<<<<<< HEAD


      });
    }

=======
      return res.status(404).json({ error: 'Project not found' })
    }
    if (project.status !== 'Completed') {
      return res.status(400).json({ error: 'Reviews can only be submitted after project completion' })
=======

    if (project.status !== 'Completed') {
      return res.status(400).json({ error: 'Reviews can only be submitted after project completion' })


    }

    const toRole = counterpartRole(fromRole);
    const toId = toRole === 'talent' ? project.talentSlug : project.clientId;

    const expectedFromId = fromRole === 'client' ? project.clientId : project.talentSlug;
    if (expectedFromId !== fromId) {
      return res.status(403).json({ error: 'Invalid reviewer for this project' })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const existing = await hasExistingReview(projectId, fromRole, fromId);
    if (existing) {


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return res.status(404).json({ error: "Project not found" });
    }
    if (project.status !== "Completed") {
      return res.status(400).json({
        error: "Reviews can only be submitted after project completion",
      });
    }

    const toRole = counterpartRole(fromRole);
    const toId = toRole === "talent" ? project.talentSlug : project.clientId;

    const expectedFromId =
      fromRole === "client" ? project.clientId : project.talentSlug;
    if (expectedFromId !== fromId) {
      return res
        .status(403)
        .json({ error: "Invalid reviewer for this project" });
    }
    const existing = await hasExistingReview(projectId, fromRole, fromId);
    if (existing) {
      return res.status(409).json({
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        error: "You have already submitted a review for this project",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
<<<<<<< HEAD
=======
      return res.status(409).json({ error: 'You have already submitted a review for this project' })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

      return res.status(409).json({ error: 'You have already submitted a review for this project' })

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

      .json({ message: "Review submitted", reviewId: review && review.id });

<<<<<<< HEAD
=======
    }
      .json({ message: "Review submitted", reviewId: review && review.id });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
<<<<<<< HEAD
  }
}
=======
      id: uuidv4(),
      projectId,
      fromRole,
      fromId,
      toRole,
      toId,
=======
    const now = new Date ().toISOString ();
    const review: Review = {
      id: uuidv4 (),
      project_id,
      from_role,
      from_id,
      to_role,
      to_id,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      rating,
      text: String (text).trim (),
      categories,
<<<<<<< HEAD

      reported: false, reports: [],
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      rating,
      text: String (text).trim (),
      categories,

      reported: false, reports: [],
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      approved: false, // requires admin approval;
      reported: false,
      reports: [],
      removed: false,
      created_at: now,
    }
;
    await upsert_review (review);
;
    return res;
      .status (201);
      .json ({ message: "Review submitted", review_id: review.id });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: "Internal server error", details: error?.message });
<<<<<<< HEAD
<<<<<<< HEAD
=======

    return res
      .status(201)
      .json({ message: "Review submitted", reviewId: review.id });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
  }
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
