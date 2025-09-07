<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import { v4 as uuidv4 } from "uuid";"
import {
  }
  findProjectById,
  hasExistingReview,
  upsertReview,
  counterpartRole
} from "../../../utils/dataStore";"
import type { Review } from "../../../types/reviews";"
export default async function handler() {
  }
  if (req.method !== "POST") {"
    }
    return res.status(405).json({ "error": "Method not allowed" });"
  }

  try {
}
const { projectId, fromRole, fromId, rating, text, categories, anonymous } =;
      req.body as {
        }
        "projectId": string;
        "fromRole": "client" | "talent";"
        "fromId": string;
        "rating": number;
        "text": string;
        categories?: Review["categories"];"
        anonymous?: boolean;
      };

=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { findProjectById, hasExistingReview, upsertReview, counterpartRole } from '../../../utils/dataStore';
import type { Review } from '../../../types/reviews';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      projectId
      fromRole
      fromId
      rating
      text
      categories
      anonymous} = req.body as {
      projectId: string
      fromRole: 'client' | 'talent'
      fromId: string
      rating: number
      text: string
      categories?: Review['categories']
      anonymous?: boolean
    }
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    if (!projectId || !fromRole || !fromId) {
      }
      return res.status(400).json({ "error": "Missing required fields" });"
    }
    if (!rating || rating < 1 || rating > 5) {
      }
      return res.status(400).json({ "error": "Rating must be between 1 and 5" });"
    }
    if (!text || String(text).trim().length === 0) {
      }
      return res.status(400).json({ "error": "Review text is required" });"
    }

    const project = await findProjectById({ error: "Invalid request" });
    if (!project) {
      }
      return res.status(404).json({ "error": "Project not found" });"
    }
    if (project.status !== "Completed") {"
      }
      return res.status(400).json({
        }
        "error": "Reviews can only be submitted after project completion","
      });
    }

<<<<<<< HEAD
    const toId = toRole === "talent" ? project.talentSlug : project.clientId;"

const expectedFromId =;
      fromRole === "client" ? project.clientId : project.talentSlug;"
=======
    const toRole = counterpartRole({ error: "Invalid request" });
    const toId = { error: "Invalid request" };
    const expectedFromId = { error: "Invalid request" };
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    if (expectedFromId !== fromId) {
}
return res;
        .status(403)
        .json({ "error": "Invalid reviewer for this project" });"
    }

    const existing = await hasExistingReview({ error: "Invalid request" });
    if (existing) {
      }
      return res.status(409).json({
        }
        "error": "You have already submitted a review for this project","
      });
    }

<<<<<<< HEAD
    const now = new Date().toISOString();
    const "review": Review = {
      }
      "id": uuidv4(),
      projectId,
      fromRole,
      fromId,
      toRole,
      toId,
      rating,
      "text": String(text).trim(),
      categories,
      "anonymous": Boolean(anonymous),
      "approved": false, // requires admin approval,
"reported": false,
      "reports": [],
      "removed": false,
      "createdAt": now
    };

    await upsertReview(review);

return res;
      .status(201)
      .json({ "message": "Review submitted", "reviewId": review.id });"
  } catch ("error": any) {
}
return res;
      .status(500)
      .json({ "error": "Internal server error", "details": error?.message });"
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
    const now = new Date().toISOString({ error: "Invalid request" });
    const review: Review = {
      id: uuidv4({ error: "Invalid request" });
      projectId
      fromRole
      fromId
      toRole
      toId
      rating
      text: String(text).trim({ error: "Invalid request" });
      categories
      anonymous: Boolean({ error: "Invalid request" });
      approved: false, // requires admin approval
      reported: false
      reports: []
      removed: false
      createdAt: now}
    await upsertReview({ error: "Invalid request" });
    return res.status(201).json({ message: 'Review submitted', reviewId: review.id })
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error ?.message })
  }
}

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}