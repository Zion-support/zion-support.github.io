import type { NextApiRequest, NextApiResponse } from 'next';
import { evaluateHeuristics } from '../../../utils/fraud/heuristics';
import { classifyWithGPT } from '../../../utils/fraud/gpt';
import { getFraudStore, newEvent } from '../../../utils/fraud/store';
import { extractClientIp } from '../../../utils/ip';
<<<<<<< HEAD
import {
  AdminActionRecord,
  GptClassification,
  GptClassificationLabel,
  MonitoredSource,
  StoredFraudRecord,;
} from '../../../utils/fraud/types';
import { sendWarningEmail } from '../../../utils/email';

const allowedSources: MonitoredSource[] = [
  'signup',
  'job_post',
  'message',
  'quote',
  'review',
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;  }
=======
import { AdminActionRecord, GptClassification, GptClassificationLabel, MonitoredSource, StoredFraudRecord } from '../../../utils/fraud/types';
import { sendWarningEmail } from '../../../utils/email';
const allowedSources: MonitoredSource[] = ['signupjob_postmessagequotereview'];
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  try {
    const body = req.body || {};
    const source = body.source as MonitoredSource;
    if (!allowedSources.includes(source)) {
      res.status(400).json({ error: 'Invalid source' });
<<<<<<< HEAD
      return;    }

    const userId = typeof body.userId === 'string' ? body.userId : null;
    const content = typeof body.content === 'string' ? body.content : null;
    const metadata =
      body.metadata && typeof body.metadata === 'object' ? body.metadata : null;
=======
      return;
    }

    const userId = typeof body.userId === 'string' ? body.userId : null;
    const content = typeof body.content === 'string' ? body.content : null;
    const metadata = (body.metadata && typeof body.metadata === 'object') ? body.metadata : null;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const ip = extractClientIp(req);
    const store = getFraudStore();
<<<<<<< HEAD
    const event = newEvent({
      source,
      userId,
      content,
      metadata,
      ipAddress: ip,
    });

    const heuristic = await evaluateHeuristics(event, {
      countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m),
    });
=======
    const event = newEvent({ source, userId, content, metadata, ipAddress: ip });
    const heuristic = await evaluateHeuristics(event, { countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m) });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {
      const privacy = await store.getPrivacySettings(userId);
      if (!privacy.monitoringContentAnalysisOptOut) {
<<<<<<< HEAD
        gpt = await classifyWithGPT(content, source);
      }
    } else if (content && !userId) {
      gpt = await classifyWithGPT(content, source);
    }

    let combinedLabel: GptClassificationLabel =
      gpt?.label || (heuristic.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';

    const autoHide =
      process.env.FRAUD_AUTOHIDE === 'true' &&
      combinedLabel !== 'SAFE' &&
      source === 'message';
=======
        gpt = await classifyWithGPT(content, source)
      }
    } else if (content && !userId) {
      gpt = await classifyWithGPT(content, source)
    }

    let combinedLabel: GptClassificationLabel = gpt?.label || (heuristic.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';
    const autoHide = (process.env.FRAUD_AUTOHIDE === 'true') && (combinedLabel !== 'SAFE') && (source === 'message');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const stored: Omit<StoredFraudRecord, 'id'> = {
      ...event,
      heuristic,
      gpt,
      autoHidden: !!autoHide,
<<<<<<< HEAD
      status: 'PENDING',
=======
      status: 'PENDING'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };
    const saved = await store.saveEvent(stored);
    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {
      const prior = await store.countFlaggedForUser(userId);
      if (prior <= 1 && combinedLabel !== 'SAFE') {
        await sendWarningEmail({
          toUserId: userId,
          subject: 'Marketplace warning: suspicious activity detected',
<<<<<<< HEAD
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`,
        });      }
=======
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`})
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }

    res.status(200).json({
      id: saved.id,
      flagged: combinedLabel !== 'SAFE',
      label: combinedLabel,
      heuristic,
<<<<<<< HEAD
      gpt,
      autoHidden: saved.autoHidden,
      createdAt: saved.createdAt,
    });
  } catch (e: any) {
    res
      .status(500)
      .json({ error: 'Internal error', details: e?.message || String(e) });
  }
=======
    gpt,
      autoHidden: saved.autoHidden,
      createdAt: saved.createdAt})
  } catch (e: any) {
    res.status(500).json({ error: 'Internal error', details: e?.message || String(e) })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
