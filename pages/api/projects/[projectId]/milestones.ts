import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '[^']*';
import { addMilestone, getProject, assertParticipantOrAdmin, isClient } from '[^']*';
import { Milestone } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(405).end('Method Not Allowed')
}
