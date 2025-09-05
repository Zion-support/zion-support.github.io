import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_PublicReview, _ReviewsSummary} from '../../../types/reviews';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  try {_const { targetType, _targetId} = req.query as {_targetType?: string; targetId?: string};

    if (!targetType || !targetId) {_return res.status(400).json({ error: 'Missing targetType or targetId'});
    }
    if (targetType !== 'talent' && targetType !== 'client') {_return res.status(400).json({ error: 'Invalid targetType'});
    }

    const _all = await readReviews();

    // Include reviews where both sides have submitted and both are approved and not removed
    const _filtered = all.filter(_(r) => {_if (r.removed || !r.approved) return false;
      const _matchesTarget = r.toRole === (targetType as 'talent' | 'client') && r.toId === targetId;
      if (!matchesTarget) return false;
      const _counterpartExists = all.some(_(x) =>
          x.projectId === r.projectId &&
          x.fromRole !== r.fromRole &&
          x.toRole !== r.toRole &&
          x.approved &&
          !x.removed, _);
      return counterpartExists;});

    // Map to public reviews (mask anonymous author)
    const publicReviews: PublicReview[] = filtered
      .sort(_(a, _b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map(_(r) => {_let _authorName = r.fromId;
        if (r.fromRole === 'talent') {
          const _t = TALENT_PROFILES.find(_(tp) => tp.slug === r.fromId);
          authorName = t ? t.name : r.fromId;}
        if (r.anonymous) authorName = 'Anonymous';
        return {_...r, _authorName};
      });

    const _totalReviews = publicReviews.length;
    const _averageRating = totalReviews
      ? Math.round(_(publicReviews.reduce((sum, _r) => sum + r.rating, 0) / totalReviews) * 10) / 10
      : 0;

    const _projects = await readProjects();
    const _totalCompletedProjects = projects.filter(_(p) => p.status === 'Completed' && (
      (targetType === 'talent' && p.talentSlug === targetId) ||
      (targetType === 'client' && p.clientId === targetId)
    )).length;

    const summary: ReviewsSummary = {_averageRating, _totalReviews, _totalCompletedProjects, _mostRecent: publicReviews.slice(0, _5)};

    return res.status(200).json({_summary, _reviews: publicReviews});
  } catch (error: unknown) {_return res.status(500).json({ error: 'Internal server error', _details: error?.message});
  }
}