import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../../utils/api/auth';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '../../../../utils/api/projects';
import { Milestone } from '../../../../utils/types/milestones';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser($2);
  if (!user) return,

  const { projectId } = req.query as { projectId: string},
  const project = getProject($2);
  if (!project) {
    res.status(404).json($2);
    return
  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json($2);
    return
  }

  if (req.method === 'GET') {
    res.status(200).json($2);
    return
  }

  if (req.method === 'POST') {
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' }),
      return
    }
    const body = $2;
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {
      res.status(400).json($2);
      return
    }
    const created = addMilestone($2);
    res.status(201).json($2);
    return
  }

  res.setHeader($2);
  res.status(405).end('Method Not Allowed')
}