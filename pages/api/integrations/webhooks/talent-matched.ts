
import type { NextApiRequest, NextApiResponse } from 'next';
import { writeState, readState } from '[^']*';
import { crm } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { match } = req.body as { match?: { talentId: string, jobId: string, summary?: string } },
  if (!match) return res.status(400).json({ error: 'Missing match payload' });
  // record Zapier event
  const eventId = null;
    writeState(s => s.logs.push(log))

  }

res.status(200).json({ ok: true, eventId });
}
