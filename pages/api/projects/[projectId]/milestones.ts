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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId } = req.query as { projectId: string }
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }
<<<<<<< HEAD
  if (req.method === "GET") {
    res.status(200).json({ milestones: project.milestones });
    return;
  }
  if (req.method === "POST") {
=======

  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
    return;
  }

  if (req.method === 'POST') {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
<<<<<<< HEAD
    if (
      !body |
      !body.title |
      !body.dueDate |
      typeof body.amountUsd !== "number"
    ) {
      res
        .status(400)
        .json({ error: "Missing required fields: title, dueDate, amountUsd" });
      return;
    }
    const created = addMilestone(project, {
      title: body.title
      description: body.description
      dueDate: body.dueDate
      amountUsd: body.amountUsd
      attachments: body.attachments |[]
=======
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return;
    }
    const created = addMilestone(project, {
      title: body.title,
      description: body.description,
      dueDate: body.dueDate,
      amountUsd: body.amountUsd,
      attachments: body.attachments || []
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    });
    res.status(201).json({ milestone: created });
    return;
  }
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}

<<<<<<< HEAD
=======
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
