<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { requireUser } from '../../../../utils/api/auth',
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects',
import { Milestone } from '../../../../utils/types/milestones',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,

  const { projectId } = req.query as { projectId: string },
  const project = getProject(projectId),
  if (!project) {
    res.status(404).json({ error: 'Project not found' }),
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' }),
    return
  }

  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones }),
    return
  }

  if (req.method === 'POST') {
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' }),
      return
    }
    const body = req.body as Partial<Milestone>,
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' }),
      return
    }
    const created = addMilestone(project, {
      title: body.title,
      description: body.description,
      dueDate: body.dueDate,
      amountUsd: body.amountUsd,
      attachments: body.attachments || []}),
    res.status(201).json({ milestone: created }),
    return
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;

  const { projectId} = req.query as {_projectId: string};
  const _project = getProject(projectId);
  if (!project) {_res.status(404).json({ error: 'Project not found'});
    return;
  }
  if (!assertParticipantOrAdmin(project, user)) {_res.status(403).json({ error: 'Forbidden'});
    return;
  }

  if (req.method === 'GET') {_res.status(200).json({ milestones: project.milestones});
    return;
  }

  if (req.method === 'POST') {_if (!isClient(project, _user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones'});
      return;
    }
    const _body = req.body as Partial<Milestone>;
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {_res.status(400).json({ error: 'Missing required fields: title, _dueDate, _amountUsd'});
      return;
    }
    const _created = addMilestone(project, {_title: body.title, _description: body.description, _dueDate: body.dueDate, _amountUsd: body.amountUsd, _attachments: body.attachments || []});
    res.status(201).json({_milestone: created});
    return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')
}