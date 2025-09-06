<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../../utils/api/auth";
import {
  addMilestone
  getProject
  assertParticipantOrAdmin
  isClient
} from "../../../../utils/api/projects";
import { Milestone } from "../../../../utils/types/milestones";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
<<<<<<< HEAD
  const { projectId } = req.query as { projectId: string }
=======
  const { projectId } = req && req.query as { projectId: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const project = getProject(projectId);
  if (!project) {
<<<<<<< HEAD
    res && res.status(404).json({ error: "Project not found" });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res && res.status(403).json({ error: "Forbidden" });
    return;
  }
<<<<<<< HEAD
  if (req.method === "GET") {
    res.status(200).json({ milestones: project.milestones });
    return;
  }
  if (req.method === "POST") {
=======

  if (req && req.method === "GET") {
    res && res.status(200).json({ milestones: project && project.milestones });
    return;
=======
    res.status(404).json({ error: 'Project not found' });
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return
  }

  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
    return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }

  if (req && req.method === "POST") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!isClient(project, user)) {
<<<<<<< HEAD
      res
        .status(403)
        .json({ error: "Only client (or admin) can add milestones" });
      return;
    }
    const body = req && req.body as Partial<Milestone>;
    if (
<<<<<<< HEAD
      !body |
      !body.title |
      !body.dueDate |
      typeof body.amountUsd !== "number"
=======
      !body ||
      !body && body.title ||
      !body && body.dueDate ||
      typeof body && body.amountUsd !== "number"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ) {
      res
        .status(400)
        .json({ error: "Missing required fields: title, dueDate, amountUsd" });
      return;
    }
    const created = addMilestone(project, {
<<<<<<< HEAD
      title: body.title
      description: body.description
      dueDate: body.dueDate
      amountUsd: body.amountUsd
      attachments: body.attachments |[]
=======
      title: body && body.title,
      description: body && body.description,
      dueDate: body && body.dueDate,
      amountUsd: body && body.amountUsd,
      attachments: body && body.attachments || [],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    res && res.status(201).json({ milestone: created });
    return;
  }
<<<<<<< HEAD
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
=======
=======
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return
    }
    const body = req.body as Partial<Milestone>;
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return
    }
    const created = addMilestone(project, {
      title: body.title, description: body.description,
      dueDate: body.dueDate, amountUsd: body.amountUsd,
      attachments: body.attachments || []});
    res.status(201).json({ milestone: created });
    return
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
