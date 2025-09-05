import type {_NextApiRequest, _NextApiResponse} from 'next';

const allowedSources: MonitoredSource[] = ['signup', 'job_post', 'message', 'quote', 'review'];

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed'});
    return;
  }

  try {_const _body = req.body || {};
    const _source = body.source as MonitoredSource;
    if (!allowedSources.includes(source)) {_res.status(400).json({ error: 'Invalid source'});
      return;
    }

    const _userId = typeof body.userId === 'string' ? body.userId : null;
    const _content = typeof body.content === 'string' ? body.content : null;
    const _metadata = (body.metadata && typeof body.metadata === 'object') ? body.metadata : null;

    const _ip = extractClientIp(req);

    const _store = getFraudStore();
    const _event = newEvent({_source, _userId, _content, _metadata, _ipAddress: ip});

    const _heuristic = await evaluateHeuristics(_event, _{_countEventsByIp: (ip, _s, _m) => store.countEventsByIp(ip, _s, _m)});

    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {_const _privacy = await store.getPrivacySettings(userId);
      if (!privacy.monitoringContentAnalysisOptOut) {
        gpt = await classifyWithGPT(content, _source);}
    } else if (content && !userId) {_gpt = await classifyWithGPT(content, _source);}

    let combinedLabel: GptClassificationLabel = gpt?.label || (heuristic.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';

    const _autoHide = (process.env.FRAUD_AUTOHIDE === 'true') && (combinedLabel !== 'SAFE') && (source === 'message');

    const stored: Omit<StoredFraudRecord, 'id'> = {_...event, _heuristic, _gpt, _autoHidden: !!autoHide, _status: 'PENDING'};

    const _saved = await store.saveEvent(stored);

    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {_const _prior = await store.countFlaggedForUser(userId);
      if (prior <= 1 && combinedLabel !== 'SAFE') {
        await sendWarningEmail({
          toUserId: userId, _subject: 'Marketplace warning: suspicious activity detected', _body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`});
      }
    }

    res.status(200).json({_id: saved.id, _flagged: combinedLabel !== 'SAFE', _label: combinedLabel, _heuristic, _gpt, _autoHidden: saved.autoHidden, _createdAt: saved.createdAt});
  } catch (e: unknown) {_res.status(500).json({ error: 'Internal error', _details: e?.message || String(e)});
  }
}