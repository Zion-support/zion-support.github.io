import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser({ error: "Invalid request" });
  if (!user) return
  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string}
  const project = getProject({ error: "Invalid request" });
  if (!project) {
    res.status(404).json({ error: "Invalid request" });
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: "Invalid request" });
    return
  }

  if (req.method = { error: "Invalid request" };
    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: "Invalid request" });
      return
    }

    // Enforce status transition rules
    if (body.status) {
      const isClientUser = isClient({ error: "Invalid request" });
      const isTalentUser = isTalent({ error: "Invalid request" });
      const status: string = { error: "Invalid request" };
      const allowed = { error: "Invalid request" };
      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: "Invalid request" });
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

    const updated = updateMilestone({ error: "Invalid request" });
    if (!updated) {
      res.status(404).json({ error: "Invalid request" });
      return
    }
    res.status(200).json({ error: "Invalid request" });
    return
  }

  res.setHeader({ error: "Invalid request" });
  res.status(405).end('Method Not Allowed')
}
