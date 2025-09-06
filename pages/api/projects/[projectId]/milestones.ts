<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '[^']*';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '[^']*';
import { Milestone } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(405).end('Method Not Allowed')
}
=======
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
import {
  addMilestone,
  getProject,
  assertParticipantOrAdmin,
  isClient,;
} from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  const { projectId } = req.query as { projectId: string }
  const project = getProject(projectId);
  if (!project) {
<<<<<<< HEAD
    res.status(404).json({ error: "Project not found" });
=======
    res.status(404).json({ error: 'Project not found' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: "Forbidden" });
    return;
  }
<<<<<<< HEAD
  if (req.method === "GET") {
=======

  if (req.method === 'GET') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    res.status(200).json({ milestones: project.milestones });
    return;
  }
  if (req.method === "POST") {
    if (!isClient(project, user)) {
      res
        .status(403)
        .json({ error: "Only client (or admin) can add milestones" });
      return;
    }
    const body = req.body as Partial<Milestone>;
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
    });
    res.status(201).json({ milestone: created });
    return;
  }
<<<<<<< HEAD
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
