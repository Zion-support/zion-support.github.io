import type { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '[^']*';
import { getProject, updateMilestone, assertParticipantOrAdmin, isClient, isTalent } from '[^']*';
import { isMilestoneStatus } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(405).end('Method Not Allowed')
}