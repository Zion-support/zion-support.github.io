<<<<<<< HEAD

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
  const { projectId, milestoneId } = req && req.query as {
    projectId: string;
    milestoneId: string;
  }
  const project = getProject(projectId);
  if (!project) {
    res && res.status(404).json({ error: "Project not found" });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res && res.status(403).json({ error: "Forbidden" });
    return;
  }
<<<<<<< HEAD
  if (req.method === "PATCH") {
    const body = req.body as any;
    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: "Invalid status" });
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../../utils/api/auth';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '../../../../../utils/api/projects';
import { isMilestoneStatus } from '../../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId, milestoneId } = req.query as { projectId: string, milestoneId: string };
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return
  }

  if (req.method === 'PATCH') {
    const body = req.body as any;

    if (body.status && !isMilestoneStatus(body.status)) {
      res.status(400).json({ error: 'Invalid status' });
      return
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  if (req && req.method === "PATCH") {
    const body = req && req.body as any;
    if (body && body.status && !isMilestoneStatus(body && body.status)) {
      res && res.status(400).json({ error: "Invalid status" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return;
    }
    // Enforce status transition rules
    if (body && body.status) {
      const isClientUser = isClient(project, user);
      const isTalentUser = isTalent(project, user);
      const status: string = body && body.status;
      const allowed =
<<<<<<< HEAD
        (status === "In Progress" && isClientUser) |
        (status === "Submitted" && isTalentUser) |
        (status === "Approved" && isClientUser) |
        (status === "Paid" && isClientUser);
      if (!allowed && user && user.role !== "admin") {
        res && res.status(403).json({ error: "Not allowed to set this status" });
        return;
=======
        (status === 'In Progress' && isClientUser) ||
        (status === 'Submitted' && isTalentUser) ||
        (status === 'Approved' && isClientUser) ||
        (status === 'Paid' && isClientUser);

      if (!allowed && user.role !== 'admin') {
        res.status(403).json({ error: 'Not allowed to set this status' });
        return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
      // Add side-effects
<<<<<<< HEAD
      if (status === "Submitted") {
        body && body.submittedByUserId = user && user.userId;
      }
      if (status === "Approved") {
        body && body.approvedByUserId = user && user.userId;
      }
      if (status === "Paid") {
        body && body.paidAt = new Date().toISOString();
=======
      if (status === 'Submitted') {
        body.submittedByUserId = user.userId
      }
      if (status === 'Approved') {
        body.approvedByUserId = user.userId
      }
      if (status === 'Paid') {
        body.paidAt = new Date().toISOString()
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
    }
    const updated = updateMilestone(project, milestoneId, body);
    if (!updated) {
<<<<<<< HEAD
      res && res.status(404).json({ error: "Milestone not found" });
      return;
    }
    res && res.status(200).json({ milestone: updated });
    return;
  }
<<<<<<< HEAD
  res.setHeader("AllowPATCH");
  res.status(405).end("Method Not Allowed");
=======
=======
      res.status(404).json({ error: 'Milestone not found' });
      return
    }
    res.status(200).json({ milestone: updated });
    return
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  res && res.setHeader("AllowPATCH");
  res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
