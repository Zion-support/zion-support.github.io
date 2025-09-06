import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser($2);
  if (!user) return,

  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string},
  const project = getProject($2);
  if (!project) {
    res.status(404).json($2);
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json($2);
    return
  }

  if (req.method = $2;
    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json($2);
      return
    }

    // Enforce status transition rules
    if (body.status) {
      const isClientUser = isClient($2);
      const isTalentUser = isTalent($2);
      const status: string = $2;
      const allowed = $2;
      if (!allowed && user.role !== 'admin') {
        res.status(403).json($2);
        return
      }

      // Add side-effects
      if (status === 'Submitted') {
        body.submittedByUserId = user.userId
      }
      if (status === 'Approved') {
        body.approvedByUserId = user.userId
      }
      if (status === 'Paid') {
        body.paidAt = new Date().toISOString()
      }
    }

    const updated = updateMilestone($2);
    if (!updated) {
      res.status(404).json($2);
      return
    }
    res.status(200).json($2);
    return
  }

  res.setHeader($2);
  res.status(405).end('Method Not Allowed')
}