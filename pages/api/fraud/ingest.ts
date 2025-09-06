=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
  AdminActionRecord,
  GptClassification,
  GptClassificationLabel,
  MonitoredSource,
  StoredFraudRecord,;
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



import type { NextApiRequest, NextApiResponse } from "next";
import { evaluateHeuristics } from "../../../utils/fraud/heuristics";
import { classifyWithGPT } from "../../../utils/fraud/gpt";
import { getFraudStore, newEvent } from "../../../utils/fraud/store";
import { extractClientIp } from "../../../utils/ip";
import {

    const ip = extractClientIp(req);
    const store = getFraudStore();

      countEventsByIp: (ip, s, m) => store && store.countEventsByIp(ip, s, m),

  AdminActionRecord,
  GptClassification,
  GptClassificationLabel,
  MonitoredSource,

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
  if (req.method !== "POST") {;
    res.status(405).json({ error: "Method not allowed" });
    return;

  }
  try {

    const body = req.body |{}
    const source = body.source as MonitoredSource;
    if (!allowedSources.includes(source)) {
      res.status(400).json({ error: "Invalid source" });
      return;
    }
    const userId = typeof body.userId === "string" ? body.userId : null;
    const content = typeof body.content === "string" ? body.content : null;
    const metadata =
      body.metadata && typeof body.metadata === "object" ? body.metadata : null;
    const ip = extractClientIp(req);
    const store = getFraudStore();
    const event = newEvent({
      source
      userId
      content
      metadata
      ipAddress: ip
    });
    const heuristic = await evaluateHeuristics(event, {
      countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m)
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    });
    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {
      const privacy = await store.getPrivacySettings(userId);
      if (!privacy.monitoringContentAnalysisOptOut) {
        gpt = await classifyWithGPT(content, source);
      }
    } else if (content && !userId) {
      gpt = await classifyWithGPT(content, source);
    }
    let combinedLabel: GptClassificationLabel =
      gpt?.label |(heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    if (heuristic.severity === "high") combinedLabel = "DANGEROUS";
    if (gpt?.label === "DANGEROUS") combinedLabel = "DANGEROUS";
    const autoHide =
      process.env.FRAUD_AUTOHIDE === "true" &&
      combinedLabel !== "SAFE" &&
      source === "message";
    const stored: Omit<StoredFraudRecord, "id"> = {
      ...event
      heuristic
      gpt
      autoHidden: !!autoHide
      status: "PENDING"
    }
    const saved = await store.saveEvent(stored);
    if (process.env.FRAUD_EMAIL_WARNINGS === "true" && userId) {
      const prior = await store.countFlaggedForUser(userId);
      if (prior <= 1 && combinedLabel !== "SAFE") {
        await sendWarningEmail({
          toUserId: userId
          subject: "Marketplace warning: suspicious activity detected"
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`
        });
      }
    }
    res.status(200).json({
      id: saved.id
      flagged: combinedLabel !== "SAFE"
      label: combinedLabel
      heuristic
      gpt
      autoHidden: saved.autoHidden
      createdAt: saved.createdAt
    });

  } catch (e: any) {
    res
      .status(500)

    });

  } catch (e: any) {
    res
      .status(500)
      .json({ error: "Internal error", details: e?.message |String(e) });
      .json({ error: "Internal error", details: e?.message || String(e) });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Fraud ingest endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { evaluateHeuristics } from '../../../utils/fraud/heuristics';
import { classifyWithGPT } from '../../../utils/fraud/gpt';
import { getFraudStore, newEvent } from '../../../utils/fraud/store';
import { extractClientIp } from '../../../utils/ip';
import { AdminActionRecord, GptClassification, GptClassificationLabel, MonitoredSource, StoredFraudRecord } from '../../../utils/fraud/types';
import { sendWarningEmail } from '../../../utils/email';
const allowedSources: MonitoredSource[] = ['signupjob_postmessagequotereview'];
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

    res;
      .status (500);
      .json ({ error: "Internal error", details: e?.message || String (e) });
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    res.status(200).json({;
      id: saved.id,;
      flagged: combinedLabel !== 'SAFE',;
      label: combinedLabel,;
      heuristic,;
      gpt;
      autoHidden: saved.autoHidden;
      createdAt: saved.createdAt});
  } catch (error) {
    res.status(500).json({ error: 'Internal error', details: e?.message || String(e) });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
