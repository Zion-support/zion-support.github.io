import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_resume} = req.body as {_resume?: Record<string, _any>};
  if (!resume) return res.status(400).json({_error: 'Missing resume payload'});

  const _state = readState();
  const _crms = state.connections.filter(c => c.providerId === 'salesforce' || c.providerId === 'hubspot' || c.providerId === 'zoho' || c.providerId === 'pipedrive');
  const results: unknown[] = [];
  for (const conn of crms) {_const { log} = await crm.addEmailTouchpoint(conn, {_subject: 'Resume viewed', _resumeId: resume.id});
    writeState(s => s.logs.push(log));
    results.push({_providerId: conn.providerId, _ok: true});
  }
  res.status(200).json({_ok: true, _results});
}