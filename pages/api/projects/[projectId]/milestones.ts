import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
<<<<<<< HEAD
import {
  addMilestone,
  getProject,
  assertParticipantOrAdmin,
  isClient,;
} from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';

=======
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId } = req.query as { projectId: string };
  const project = getProject(projectId);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
<<<<<<< HEAD
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
=======
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
<<<<<<< HEAD
    return;
=======
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'POST') {
    if (!isClient(project, user)) {
<<<<<<< HEAD
      res
        .status(403)
        .json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
    if (
      !body ||
      !body.title ||
      !body.dueDate ||
      typeof body.amountUsd !== 'number'
    ) {
      res
        .status(400)
        .json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return;
    }
    const created = addMilestone(project, {
      title: body.title,
      description: body.description,
      dueDate: body.dueDate,
      amountUsd: body.amountUsd,
      attachments: body.attachments || [],
    });
    res.status(201).json({ milestone: created });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
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

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
