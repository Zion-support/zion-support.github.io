import type { NextApiRequest, NextApiResponse } from 'next';
import { readState, writeState } from '../../../../lib/integrations/fileStore';
import { ats } from '../../../../lib/integrations/connectors';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { talent } = req.body as { talent?: Record<string, any> };
  if (!talent) return res.status(400).json({ error: 'Missing talent payload' });

  const state = readState();
  const atsProviders = state.connections.filter(
    c =>
      c.providerId === 'greenhouse' ||
      c.providerId === 'lever' ||
      c.providerId === 'workable' ||
      c.providerId === 'bamboohr'
  );
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { talent } = req.body as { talent?: Record<string, any> };
  if (!talent) return res.status(400).json({ error: 'talent is required' });
  const state = readState();
  const atsProviders = state.connections.filter(c => c.providerId === 'greenhouse' || c.providerId === 'lever' || c.providerId === 'workable' || c.providerId === 'bamboohr');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const results: any[] = [];
   = await ats.updateStatus(conn, {
      applicantId: talent.id,
      status: 'hired',
    });
    writeState(s => s.logs.push(log));
    results.push({ providerId: conn.providerId, ok: true });
  }
<<<<<<< HEAD
  res.status(200).json({ ok: true, results });
=======
  res.status(200).json({ ok: true, results });
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
