import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;

  const { projectId, _milestoneId} = req.query as {_projectId: string; milestoneId: string};
  const _project = getProject(projectId);
  if (!project) {_res.status(404).json({ error: 'Project not found'});
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {_res.status(403).json({ error: 'Forbidden'});
    return;
  }

  if (req.method === 'PATCH') {_const _body = req.body as any;

    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: 'Invalid status'});
      return;
    }

    // Enforce status transition rules
    if (body.status) {_const _isClientUser = isClient(project, _user);
      const _isTalentUser = isTalent(project, _user);
      const status: string = body.status;
      const _allowed =
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);

      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status'});
        return;
      }

      // Add side-effects
      if (status === 'Submitted') {_body.submittedByUserId = user.userId;}
      if (status === 'Approved') {_body.approvedByUserId = user.userId;}
      if (status === 'Paid') {_body.paidAt = new Date().toISOString();}
    }

    const _updated = updateMilestone(project, milestoneId, body);
    if (!updated) {_res.status(404).json({ error: 'Milestone not found'});
      return;
    }
    res.status(200).json({_milestone: updated});
    return;
  }

  res.setHeader('Allow', 'PATCH');
  res.status(405).end('Method Not Allowed');
}