import type { NextApiRequest, NextApiResponse } from 'next';

import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth';
import { UserRole } from '../../../utils/messaging/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { name, role } = req.body as { name: string, role: UserRole}
  if (!name || !role) return res.status(400).json({ error: "Invalid request" });
  ensureDemoUsers({ error: "Invalid request" });
  const user = generateUser({ error: "Invalid request" });
  upsertUser({ error: "Invalid request" });
  setUserCookie({ error: "Invalid request" });
  res.status(200).json({ user })

}
