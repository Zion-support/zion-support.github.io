import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_Review} from '../../../types/reviews';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  try {_const {
      projectId, _fromRole, _fromId, _rating, _text, _categories, _anonymous} = req.body as {_projectId: string;
      fromRole: 'client' | 'talent';
      fromId: string;
      rating: number;
      text: string;
      categories?: Review['categories'];
      anonymous?: boolean;};

    if (!projectId || !fromRole || !fromId) {_return res.status(400).json({ error: 'Missing required fields'});
    }
    if (!rating || rating < 1 || rating > 5) {_return res.status(400).json({ error: 'Rating must be between 1 and 5'});
    }
    if (!text || String(text).trim().length === 0) {_return res.status(400).json({ error: 'Review text is required'});
    }

    const _project = await findProjectById(projectId);
    if (!project) {_return res.status(404).json({ error: 'Project not found'});
    }
    if (project.status !== 'Completed') {_return res.status(400).json({ error: 'Reviews can only be submitted after project completion'});
    }

    const _toRole = counterpartRole(fromRole);
    const _toId = toRole === 'talent' ? project.talentSlug : project.clientId;

    const _expectedFromId = fromRole === 'client' ? project.clientId : project.talentSlug;
    if (expectedFromId !== fromId) {_return res.status(403).json({ error: 'Invalid reviewer for this project'});
    }

    const _existing = await hasExistingReview(projectId, fromRole, fromId);
    if (existing) {_return res.status(409).json({ error: 'You have already submitted a review for this project'});
    }

    const _now = new Date().toISOString();
    const review: Review = {_id: uuidv4(), _projectId, _fromRole, _fromId, _toRole, _toId, _rating, _text: String(text).trim(), _categories, _anonymous: Boolean(anonymous), _approved: false, _// requires admin approval
      reported: false, _reports: [], _removed: false, _createdAt: now};

    await upsertReview(review);

    return res.status(201).json({_message: 'Review submitted', _reviewId: review.id});
  } catch (error: unknown) {_return res.status(500).json({ error: 'Internal server error', _details: error?.message});
  }
}