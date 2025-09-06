<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { evaluateHeuristics } from "../../../utils/fraud/heuristics";
import { classifyWithGPT } from "../../../utils/fraud/gpt";
import { getFraudStore, newEvent } from "../../../utils/fraud/store";
import { extractClientIp } from "../../../utils/ip";
import {
  AdminActionRecord
  GptClassification
  GptClassificationLabel
  MonitoredSource
  StoredFraudRecord
} from "../../../utils/fraud/types";
import { sendWarningEmail } from "../../../utils/email";
const allowedSources: MonitoredSource[] = [
  "signup"
  "job_post"
  "message"
  "quote"
  "review"
];
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") {
    res && res.status(405).json({ error: "Method not allowed" });
    return;

=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { evaluateHeuristics } from '../../../utils/fraud/heuristics';
import { classifyWithGPT } from '../../../utils/fraud/gpt';
import { getFraudStore, newEvent } from '../../../utils/fraud/store';
import { extractClientIp } from '../../../utils/ip';
import { AdminActionRecord, GptClassification, GptClassificationLabel, MonitoredSource, StoredFraudRecord } from '../../../utils/fraud/types';
import { sendWarningEmail } from '../../../utils/email';
const allowedSources: MonitoredSource[] = ['signup', 'job_post', 'message', 'quote', 'review'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
  try {
<<<<<<< HEAD

    const body = req.body |{}
    const source = body.source as MonitoredSource;
    if (!allowedSources.includes(source)) {
<<<<<<< HEAD
      res.status(400).json({ error: "Invalid source" });
      return;
    }
    const userId = typeof body.userId === "string" ? body.userId : null;
    const content = typeof body.content === "string" ? body.content : null;
=======
    const body = req && req.body || {};
    const source = body && body.source as MonitoredSource;
    if (!allowedSources && allowedSources.includes(source)) {
      res && res.status(400).json({ error: "Invalid source" });
      return;
    }

    const userId = typeof body && body.userId === "string" ? body && body.userId : null;
    const content = typeof body && body.content === "string" ? body && body.content : null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const metadata =
      body && body.metadata && typeof body && body.metadata === "object" ? body && body.metadata : null;
=======
      res.status(400).json({ error: 'Invalid source' });
      return
    }

    const userId = typeof body.userId === 'string' ? body.userId : null;
    const content = typeof body.content === 'string' ? body.content : null;
    const metadata = (body.metadata && typeof body.metadata === 'object') ? body.metadata : null;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    const ip = extractClientIp(req);
    const store = getFraudStore();
<<<<<<< HEAD
    const event = newEvent({
      source
      userId
      content
      metadata
      ipAddress: ip
    });
    const heuristic = await evaluateHeuristics(event, {
<<<<<<< HEAD
      countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m)
=======
      countEventsByIp: (ip, s, m) => store && store.countEventsByIp(ip, s, m),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {
      const privacy = await store && store.getPrivacySettings(userId);
      if (!privacy && privacy.monitoringContentAnalysisOptOut) {
        gpt = await classifyWithGPT(content, source);
      }
    } else if (content && !userId) {
      gpt = await classifyWithGPT(content, source);
    }
    let combinedLabel: GptClassificationLabel =
<<<<<<< HEAD
      gpt?.label |(heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    if (heuristic.severity === "high") combinedLabel = "DANGEROUS";
=======
      gpt?.label || (heuristic && heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    if (heuristic && heuristic.severity === "high") combinedLabel = "DANGEROUS";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (gpt?.label === "DANGEROUS") combinedLabel = "DANGEROUS";
    const autoHide =
      process && process.env.FRAUD_AUTOHIDE === "true" &&
      combinedLabel !== "SAFE" &&
      source === "message";
    const stored: Omit<StoredFraudRecord, "id"> = {
<<<<<<< HEAD
      ...event
      heuristic
      gpt
      autoHidden: !!autoHide
      status: "PENDING"
    }
    const saved = await store.saveEvent(stored);
    if (process.env.FRAUD_EMAIL_WARNINGS === "true" && userId) {
      const prior = await store.countFlaggedForUser(userId);
=======
=======
    const event = newEvent({ source, userId, content, metadata, ipAddress: ip });

    const heuristic = await evaluateHeuristics(event, { countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m) });

    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {
      const privacy = await store.getPrivacySettings(userId);
      if (!privacy.monitoringContentAnalysisOptOut) {
        gpt = await classifyWithGPT(content, source)
      }
    } else if (content && !userId) {
      gpt = await classifyWithGPT(content, source)
    }

    let combinedLabel: GptClassificationLabel = gpt?.label || (heuristic.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';

    const autoHide = (process.env.FRAUD_AUTOHIDE === 'true') && (combinedLabel !== 'SAFE') && (source === 'message');

    const stored: Omit<StoredFraudRecord, 'id'> = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      ...event,
      heuristic,
      gpt,
      autoHidden: !!autoHide,
<<<<<<< HEAD
      status: "PENDING",
    };
    const saved = await store && store.saveEvent(stored);
    if (process && process.env.FRAUD_EMAIL_WARNINGS === "true" && userId) {
      const prior = await store && store.countFlaggedForUser(userId);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (prior <= 1 && combinedLabel !== "SAFE") {
        await sendWarningEmail({
          toUserId: userId
          subject: "Marketplace warning: suspicious activity detected"
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`
        });
      }
    }
<<<<<<< HEAD
    res.status(200).json({
      id: saved.id
      flagged: combinedLabel !== "SAFE"
      label: combinedLabel
      heuristic
      gpt
      autoHidden: saved.autoHidden
      createdAt: saved.createdAt
=======

    res && res.status(200).json({
      id: saved && saved.id,
      flagged: combinedLabel !== "SAFE",
      label: combinedLabel,
      heuristic,
      gpt,
      autoHidden: saved && saved.autoHidden,
      createdAt: saved && saved.createdAt,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });

  } catch (e: any) {
    res
      .status(500)
      .json({ error: "Internal error", details: e?.message |String(e) });
  }
}
=======
      status: 'PENDING'};

    const saved = await store.saveEvent(stored);

    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {
      const prior = await store.countFlaggedForUser(userId);
      if (prior <= 1 && combinedLabel !== 'SAFE') {
        await sendWarningEmail({
          toUserId: userId, subject: 'Marketplace warning: suspicious activity detected',
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`})
      }
    }

    res.status(200).json({
      id: saved.id, flagged: combinedLabel !== 'SAFE',
      label: combinedLabel, heuristic,
      gpt,
      autoHidden: saved.autoHidden,
      createdAt: saved.createdAt})
  } catch (e: any) {
    res.status(500).json({ error: 'Internal error', details: e?.message || String(e) })
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
