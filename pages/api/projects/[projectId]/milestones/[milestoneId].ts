<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '[^']*';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '[^']*';
import { isMilestoneStatus } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(405).end('Method Not Allowed')
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../../utils/api/auth";
import {
  getProject
  updateMilestone
  assertParticipantOrAdmin
  isClient
  isTalent
} from "../../../../../utils/api/projects";
import { isMilestoneStatus } from "../../../../../utils/types/milestones";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import {
  getProject,
  updateMilestone,
  assertParticipantOrAdmin,
  isClient,
  isTalent,;
} from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const { projectId, milestoneId } = req.query as {
    projectId: string;
    milestoneId: string;
  }
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: "Forbidden" });
    return;
  }
<<<<<<< HEAD
  if (req.method === "PATCH") {
=======

  if (req.method === 'PATCH') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {
<<<<<<< HEAD
      res.status(400).json({ error: "Invalid status" });
=======
      res.status(400).json({ error: 'Invalid status' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      return;
    }
    // Enforce status transition rules
    if (body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body.status;
      const allowed =
<<<<<<< HEAD
        (status === "In Progress" && isClientUser) |
        (status === "Submitted" && isTalentUser) |
        (status === "Approved" && isClientUser) |
        (status === "Paid" && isClientUser);
      if (!allowed && user.role !== "admin") {
        res.status(403).json({ error: "Not allowed to set this status" });
=======
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);

      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        return;
      }
      // Add side-effects
<<<<<<< HEAD
      if (status === "Submitted") {
=======
      if (status === 'Submitted') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        body.submittedByUserId = user.userId;
      }
      if (status === "Approved") {
        body.approvedByUserId = user.userId;
      }
      if (status === "Paid") {
        body.paidAt = new Date().toISOString();
      }
    }
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {
<<<<<<< HEAD
      res.status(404).json({ error: "Milestone not found" });
=======
      res.status(404).json({ error: 'Milestone not found' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      return;
    }
    res.status(200).json({ milestone: updated });
    return;
  }
<<<<<<< HEAD
  res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  res.setHeader('Allow', 'PATCH');
  res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
