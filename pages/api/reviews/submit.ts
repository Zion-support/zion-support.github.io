

  }
  try {


      };


    }
    const project = await findProjectById(projectId);
    if (!project) {


      });
    }

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

  }
  try {

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
}
    if (!projectId |!fromRole |!fromId) {

      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!rating |rating < 1 |rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    if (!text |String(text).trim().length === 0) {
      return res.status(400).json({ error: "Review text is required" });
    const {
      projectId,
    fromRole,
      fromId,
    rating,
      text,
    categories,
      anonymous} = req.body as {
      projectId: string,
      fromRole: 'client' | 'talent',
      fromId: string,
      rating: number,
      text: string,
      categories?: Review['categories'];
      anonymous?: boolean
      categories,
      anonymous
    } = req.body as {
      projectId: string, fromRole: 'client' | 'talent',
      fromId: string, rating: number,
      text: string, categories?: Review['categories'],
      anonymous?: boolean;
    };
    if (!projectId || !fromRole || !fromId) {
      return res && res.status(400).json({ error: "Missing required fields" });
    }
    if (!rating || rating < 1 || rating > 5) {
      return res && res.status(400).json({ error: "Rating must be between 1 and 5" });
    }
    if (!text || String(text).trim().length === 0) {
      return res.status(400).json({ error: 'Review text is required' })
    }
const project = await findProjectById(projectId);
    if (!project) {
    if (project && project.status !== "Completed") {
      return res && res.status(400).json({
      }
;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Missing required fields" });
    }
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Rating must be between 1 and 5" });
    }
    if (.trim ().length === 0) {) {
  $2
}
      return res.status (400).json ({ error: "Review text is required" });
    }
    const project = await findProjectById (project_id);
    // Check condition
if ( {) {
  $2
}
      return res.status (404).json ({ error: "Project not found" });
    }
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({
        error: "Reviews can only be submitted after project completion",
      });
    }
    }
    if (project.status !== 'Completed') {
      return res.status(400).json({ error: 'Reviews can only be submitted after project completion' })

    if (project.status !== 'Completed') {
      return res.status(400).json({ error: 'Reviews can only be submitted after project completion' })


      return res.status(404).json({ error: 'Project not found' })
    }
    if (project.status !== "Completed") {
      return res.status(400).json({
        error: "Reviews can only be submitted after project completion"
      });
    if (project.status !== 'Completed') {
      return res.status(400).json({ error: 'Reviews can only be submitted after project completion' })
    }
    const toRole = counterpartRole(fromRole);
    const toId = toRole === 'talent' ? project.talentSlug : project.clientId;

    const expectedFromId = fromRole === 'client' ? project.clientId : project.talentSlug;
    if (expectedFromId !== fromId) {
      return res.status(403).json({ error: 'Invalid reviewer for this project' })    }
    const existing = await hasExistingReview(projectId, fromRole, fromId);
    if (existing) {
      return res.status(409).json({
        error: "You have already submitted a review for this project"
      });
      return res.status(409).json({ error: 'You have already submitted a review for this project' })
    }
    const now = new Date().toISOString();
    const review: Review = {
      id: uuidv4()
      projectId
      fromRole
      fromId
      toRole
      toId
      rating
      text: String(text).trim()
      categories
      anonymous: Boolean(anonymous)
      approved: false, // requires admin approval
      reported: false
      reports: []
      removed: false
      createdAt: now
    }
    await upsertReview(review);
    return res
      .status(201)
      .json({ message: "Review submitted", reviewId: review.id });

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Internal server error", details: error?.message });
      id: uuidv4(),
      projectId,
const toRole = counterpartRole(fromRole);
    };
    if (!projectId || !fromRole || !fromId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }
    if (!text || String(text).trim().length === 0) {
return res.status(400).json({ error: 'Review text is required' })

    }
    const project = await findProjectById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
if (project.status !== "Completed") {
      return res.status(400).json({
        error: "Reviews can only be submitted after project completion"
      });
    }
    const toRole = counterpartRole(fromRole);

    const toId = toRole === 'talent' ? project.talentSlug : project.clientId;
    const expectedFromId = fromRole === 'client' ? project.clientId : project.talentSlug;
    if (expectedFromId !== fromId) {
      return res
        .status(403)
        .json({ error: "Invalid reviewer for this project" });
    }
    const existing = await hasExistingReview(projectId, fromRole, fromId);
    if (existing) {
return res && res.status(409).json({
    const to_role = counterpart_role (from_role);
    const to_id = to_role === "talent" ? project.talent_slug : project.client_id;
;
    const expectedFromId =;
      from_role === "client" ? project.client_id : project.talent_slug;
    // Check condition
if ( {) {
  $2
}
      return res;
        .status (403);
        .json ({ error: "Invalid reviewer for this project" });
    }
    const existing = await hasExistingReview (project_id, from_role, from_id);
    // Check condition
if ( {) {
  $2
}
      return res.status (409).json ({
        error: "You have already submitted a review for this project",
      });
      return res.status(409).json({ error: 'You have already submitted a review for this project' })

    const toRole = counterpartRole(fromRole);
    const toId = toRole === 'talent' ? project.talentSlug : project.clientId;

    const expectedFromId = fromRole === 'client' ? project.clientId : project.talentSlug;
    if (expectedFromId !== fromId) {
      return res.status(403).json({ error: 'Invalid reviewer for this project' })>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const existing = await hasExistingReview(projectId, fromRole, fromId);
    if (existing) {


        error: "You have already submitted a review for this project",
      });
      return res.status(409).json({ error: 'You have already submitted a review for this project' })

      return res.status(409).json({ error: 'You have already submitted a review for this project' })

    }

      .json({ message: "Review submitted", reviewId: review && review.id });

      reported: false, reports: [],
      rating,
      text: String (text).trim (),
      categories,

      reported: false, reports: [],

      id: uuidv4(),
      projectId,
    fromRole,
      fromId,
    toRole,
      toId,
    rating,
      text: String(text).trim(),
      categories,
      anonymous: Boolean(anonymous),
      approved: false, // requires admin approval
      reported: false,
      reports: [],

      removed: false,
      createdAt: now};

    await upsertReview(review);

    return res.status(201).json({ message: 'Review submitted', reviewId: review.id })
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error?.message })

      anonymous: Boolean (anonymous),
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
  }
}


  }
}
