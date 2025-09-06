import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '[^']*';
import { parseUserFromRequest } from '[^']*';
import { DisputeCase, DisputeReason } from '[^']*';
import { generateCaseId } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  return res.status(405).end('Method Not Allowed')
}
