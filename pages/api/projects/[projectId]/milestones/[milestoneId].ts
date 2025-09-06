import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,;
} from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';

=======
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

<<<<<<< HEAD
<<<<<<< HEAD
  const { projectId, milestoneId } = req.query as {
    projectId: string;
    milestoneId: string;
  };
=======
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
<<<<<<< HEAD
    return;
=======
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string };
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'PATCH') {
    const body = req.body as any;

    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: 'Invalid status' });
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    // Enforce status transition rules
    if (body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body.status;
      const allowed =
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);

      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
<<<<<<< HEAD
<<<<<<< HEAD
        return;
=======
        return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }

      // Add side-effects
      if (status === 'Submitted') {
<<<<<<< HEAD
<<<<<<< HEAD
        body.submittedByUserId = user.userId;
=======
        body.submittedByUserId = user.userId
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
      if (status === 'Approved') {
        body.approvedByUserId = user.userId
      }
      if (status === 'Paid') {
<<<<<<< HEAD
        body.paidAt = new Date().toISOString();
=======
        body.submittedByUserId = user.userId
      }
      if (status === 'Approved') {
        body.approvedByUserId = user.userId
      }
      if (status === 'Paid') {
        body.paidAt = new Date().toISOString()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        body.paidAt = new Date().toISOString()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }

    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {
      res.status(404).json({ error: 'Milestone not found' });
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    res.status(200).json({ milestone: updated });
    return
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'PATCH');
  res.status(405).end('Method Not Allowed');
=======
      return
    }
    res.status(200).json({ milestone: updated });
    return
  }

  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('AllowPATCH');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
