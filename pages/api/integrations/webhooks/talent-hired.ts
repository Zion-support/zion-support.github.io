import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { ats } from '../../../../lib/integrations/connectors';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const { talent } = req.body as { talent?: Record<string, any> };
  if (!talent) return res.status(400).json({ error: 'Missing talent payload' });

  const state = readState();
<<<<<<< HEAD
  const atsProviders = state.connections.filter(
    c =>
      c.providerId === 'greenhouse' ||
      c.providerId === 'lever' ||
      c.providerId === 'workable' ||
      c.providerId === 'bamboohr'
  );
  const results: any[] = [];
   = await ats.updateStatus(conn, {
      applicantId: talent.id,
      status: 'hired',
    });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
  }
  res.status(200).json({ ok: true, results });
=======
  const atsProviders = state.connections.filter(c => c.providerId === 'greenhouse' || c.providerId === 'lever' || c.providerId === 'workable' || c.providerId === 'bamboohr');
  const results: any[] = [];
  for (const conn of atsProviders) {
    const { log } = await ats.updateStatus(conn, { applicantId: talent.id, status: 'hired' });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true })
  }
  res.status(200).json({ ok: true, results })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
