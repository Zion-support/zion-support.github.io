<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readState, writeState } from '../../../../lib/integrations/fileStore',
import { ats } from '../../../../lib/integrations/connectors',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { talent } = req.body as { talent?: Record<string any> },
  if (!talent) return res.status(400).json({ error: 'Missing talent payload' }),

  const state = readState(),
  const atsProviders = state.connections.filter(c => c.providerId === 'greenhouse' || c.providerId === 'lever' || c.providerId === 'workable' || c.providerId === 'bamboohr'),
  const results: any[] = [],
  for (const conn of atsProviders) {
    const { log } = await ats.updateStatus(conn, { applicantId: talent.id, status: 'hired' }),
    writeState(s => s.logs.push(log)),
    results.push({ providerId: conn.providerId, ok: true })
  }
  res.status(200).json({ ok: true, results })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_talent} = req.body as {_talent?: Record<string, _any>};
  if (!talent) return res.status(400).json({_error: 'Missing talent payload'});

  const _state = readState();
  const _atsProviders = state.connections.filter(c => c.providerId === 'greenhouse' || c.providerId === 'lever' || c.providerId === 'workable' || c.providerId === 'bamboohr');
  const results: unknown[] = [];
  for (const conn of atsProviders) {_const { log} = await ats.updateStatus(conn, {_applicantId: talent.id, _status: 'hired'});
    writeState(s => s.logs.push(log));
    results.push({_providerId: conn.providerId, _ok: true});
  }
  res.status(200).json({_ok: true, _results});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}