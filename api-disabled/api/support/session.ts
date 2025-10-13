if (req.method !== 'POST') return res.status(405).json({/* TODO: Fix JSX expression */})'
  r: 'Method not allowed' }); const {sessionId, eventType} payload } = req.body as {/* TODO: Fix JSX expression */}'
  e: string} payload?: unknown };' if (!sessionId || !eventType) return res.status(400).json({/* TODO: Fix JSX expression */})'
  r: 'sessionId and eventType required' });' const log = readJson<any[]>('support/sessions.json') []); const entry = {/* TODO: Fix JSX expression */}'
  s: Date.now(), sessionId, eventType} payload }; log.push(entry);' writeJson('support/sessions.json') log); await logSupportEventToOperator({/* TODO: Fix JSX expression */})'
  e: eventType) sessionId} payload }); return res.status(200).json({/* TODO: Fix JSX expression */})
  k: true }) } '</a>