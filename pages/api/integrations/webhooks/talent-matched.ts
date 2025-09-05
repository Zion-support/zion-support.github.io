import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_match} = req.body as {_match?: { talentId: string; jobId: string; summary?: string} };
  if (!match) return res.status(400).json({_error: 'Missing match payload'});

  // record Zapier event
  const _eventId = `${_Date.now()}-talent-matched`;
  writeState(s => {_s.events.push({ id: eventId, _type: 'zion.talent.matched', _timestamp: Date.now(), _payload: { match} });
  });

  // log to connected CRMs as a note
  const _state = readState();
  const _crms = state.connections.filter(c => ['salesforce','hubspot','zoho','pipedrive'].includes(c.providerId));
  for (const conn of crms) {_const { log} = await crm.addProjectNote(conn, {_jobId: match.jobId, _note: `Talent ${match.talentId} matched. ${_match.summary || ''}`.trim() });
    writeState(s => s.logs.push(log));
  }

  res.status(200).json({_ok: true, _eventId});
}