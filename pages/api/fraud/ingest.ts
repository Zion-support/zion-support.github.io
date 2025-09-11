<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from "next";
import { evaluateHeuristics } from "../../../utils/fraud/heuristics";
import { classifyWithGPT } from "../../../utils/fraud/gpt";
import { getFraudStore, newEvent } from "../../../utils/fraud/store";
import { extractClientIp } from "../../../utils/ip";
import {


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


<<<<<<< HEAD
<<<<<<< HEAD
  }
  try {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { evaluateHeuristics } from '../../../utils/fraud/heuristics';
import { classifyWithGPT } from '../../../utils/fraud/gpt';
import { getFraudStore, newEvent } from '../../../utils/fraud/store';
import { extractClientIp } from '../../../utils/ip';
import { AdminActionRecord, GptClassification, GptClassificationLabel, MonitoredSource, StoredFraudRecord } from '../../../utils/fraud/types';
import { sendWarningEmail } from '../../../utils/email';
const allowedSources: MonitoredSource[] = ['signup', 'job_post', 'message', 'quote', 'review'];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return

  }
  try {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const body = req && req.body || {};
    const source = body && body.source as MonitoredSource;
    if (!allowedSources && allowedSources.includes(source)) {
      res && res.status(400).json({ error: "Invalid source" });
      return;
    }
<<<<<<< HEAD
    const userId = typeof body && body.userId === "string" ? body && body.userId : null;
    const content = typeof body && body.content === "string" ? body && body.content : null;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const metadata =
      body && body.metadata && typeof body && body.metadata === "object" ? body && body.metadata : null;
      res.status(400).json({ error: 'Invalid source' });
      return
    }
    const userId = typeof body.userId === 'string' ? body.userId : null;
    const content = typeof body.content === 'string' ? body.content : null;
    const metadata = (body.metadata && typeof body.metadata === 'object') ? body.metadata : null;
    const ip = extractClientIp(req);
    const store = getFraudStore();
<<<<<<< HEAD
      countEventsByIp: (ip, s, m) => store && store.countEventsByIp(ip, s, m),
=======
=======

    const userId = typeof body && body.userId === "string" ? body && body.userId : null;
    const content = typeof body && body.content === "string" ? body && body.content : null;


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      countEventsByIp: (ip, s, m) => store && store.countEventsByIp(ip, s, m),

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import { evaluate_heuristics  } from '../../../utils / fraud / heuristics';
import { classifyWithGPT  } from '../../../utils / fraud / gpt';
import { getFraudStore, new_event  } from '../../../utils / fraud / store';
import { extractClientIp  } from '../../../utils / ip';
import {
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  AdminActionRecord,
  GptClassification,
  GptClassificationLabel,
  MonitoredSource,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  StoredFraudRecord,
} from '../../../utils / fraud / types';
import { sendWarningEmail  } from '../../../utils / email';
;
const allowed_sources: MonitoredSource[] = [;
  "signup",
  "job_post",
  "message",
  "quote",
  "review",
];
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: "Method not allowed" });
    return;
  }
  try {
    const body = req.body || {}
    const source = body.source as MonitoredSource;
    if () {) {
  $2
}
      res.status (400).json ({ error: "Invalid source" });
      return;
    }
    const user_id = typeof body.user_id === "string" ? body.user_id : null;
    const content = typeof body.content === "string" ? body.content : null;
    const metadata =;
      body.metadata && typeof body.metadata === "object" ? body.metadata : null;
    const ip = extractClientIp (req);
    const store = getFraudStore ();
    const event = new_event ({
      source,
      user_id,
      content,
      metadata,
      ip_address: ip,
    });
;
    const heuristic = await evaluate_heuristics (event, {
      countEventsByIp: (ip, s, m) => store.countEventsByIp (ip, s, m),
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    // Privacy opt - out check for content analysis;
    let gpt: GptClassification | undefined = undefined;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Check condition
if ( {) {
  $2
}
      const privacy = await store.getPrivacySettings (user_id);
      // Check condition
if ( {) {
  $2
}
        gpt = await classifyWithGPT (content, source);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } else // Check condition
if ( {) {
  $2
}
      gpt = await classifyWithGPT (content, source);
    }
<<<<<<< HEAD
<<<<<<< HEAD
      gpt?.label || (heuristic && heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    if (heuristic && heuristic.severity === "high") combinedLabel = "DANGEROUS";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      gpt?.label || (heuristic && heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    if (heuristic && heuristic.severity === "high") combinedLabel = "DANGEROUS";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (gpt?.label === "DANGEROUS") combinedLabel = "DANGEROUS";
    const autoHide =
      process && process.env.FRAUD_AUTOHIDE === "true" &&
      combinedLabel !== "SAFE" &&
      source === "message";
    const stored: Omit<StoredFraudRecord, "id"> = {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ...event,
      heuristic,
      gpt,
      autoHidden: !!autoHide,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      if (prior <= 1 && combinedLabel !== "SAFE") {
        await sendWarningEmail({
          toUserId: userId
          subject: "Marketplace warning: suspicious activity detected"
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`
        });
      }
    }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res && res.status(200).json({
      id: saved && saved.id,
      flagged: combinedLabel !== "SAFE",
      label: combinedLabel,
      heuristic,
      gpt,
      autoHidden: saved && saved.autoHidden,
      createdAt: saved && saved.createdAt,
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let combined_label: GptClassificationLabel =;
      gpt?.label || (heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    // Check condition
if (combined_label = "DANGEROUS") {
  $2
}
    // Check condition
if (combined_label = "DANGEROUS") {
  $2
}
    const auto_hide =;
      process.env.FRAUD_AUTOHIDE === "true" &&;
      combined_label !== "SAFE" &&;
      source === "message";
    const stored: Omit < StoredFraudRecord, "id"> = {
      ...event,
      heuristic,
      gpt,
      auto_hidden: !!auto_hide,
      status: "PENDING",
    }
    const saved = await store.save_event (stored);
    // Check condition
if ( {) {
  $2
}
      const prior = await store.countFlaggedForUser (user_id);
      // Check condition
if ( {) {
  $2
}
        await sendWarningEmail ({
          toUserId: user_id,
          subject: "Marketplace warning: suspicious activity detected",
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on - platform and avoid sharing personal contact info.`,
        });
      }
    }
    res.status (200).json ({
      id: saved.id,
      flagged: combined_label !== "SAFE",
      label: combined_label,
      heuristic,
      gpt,
      auto_hidden: saved.auto_hidden,
      created_at: saved.created_at,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (e: any) {


      .json({ error: "Internal error", details: e?.message || String(e) });


<<<<<<< HEAD
      .json({ error: "Internal error", details: e?.message |String(e) });
  }
}
<<<<<<< HEAD
      status: 'PENDING'};

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      status: 'PENDING'};
    const saved = await store.saveEvent(stored);
=======
=======
      .json({ error: "Internal error", details: e?.message |String(e) });
  }
}
=======
    res
      .status(500)
      .json({ error: "Internal error", details: e?.message || String(e) });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      status: 'PENDING'};

    const saved = await store.saveEvent(stored);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {
      const prior = await store.countFlaggedForUser(userId);
      if (prior <= 1 && combinedLabel !== 'SAFE') {
        await sendWarningEmail({
          toUserId: userId, subject: 'Marketplace warning: suspicious activity detected',
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`})
      }
    }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    res;
      .status (500);
      .json ({ error: "Internal error", details: e?.message || String (e) });


  }
}
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const body = req.body || {};
    const source = body.source as MonitoredSource;
    if (!allowedSources.includes(source)) {;
      res.status(400).json({ error: 'Invalid source' });
      return;
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
    const userId = typeof body.userId === 'string' ? body.userId : null;
    const content = typeof body.content === 'string' ? body.content : null;
    const metadata = (body.metadata && typeof body.metadata === 'object') ? body.metadata : null;
    const ip = extractClientIp(req);
    const store = getFraudStore();
    const event = newEvent({ source, userId, content, metadata, ipAddress: ip });
    const heuristic = await evaluateHeuristics(event, { countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m) }),;
    // Privacy opt-out check for content analysis;
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {;
      const privacy = await store.getPrivacySettings(userId);
      if (!privacy.monitoringContentAnalysisOptOut) {;
        gpt = await classifyWithGPT(content, source);
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
    } else if (content && !userId) {;
      gpt = await classifyWithGPT(content, source);
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
    let combinedLabel: GptClassificationLabel = gpt?.label || (heuristic.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';
    const autoHide = (process.env.FRAUD_AUTOHIDE === 'true') && (combinedLabel !== 'SAFE') && (source === 'message');
    const stored: Omit<StoredFraudRecord 'id'> = {;
      ...event;
      heuristic;
      gpt;
      autoHidden: !!autoHide;
      status: 'PENDING'},;
    const saved = await store.saveEvent(stored);
    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {;
      const prior = await store.countFlaggedForUser(userId);
      if (prior <= 1 && combinedLabel !== 'SAFE') {;
        await sendWarningEmail({;
          toUserId: userId;
          subject: 'Marketplace warning: suspicious activity detected';
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`});
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    res;
      .status (500);
      .json ({ error: "Internal error", details: e?.message || String (e) });
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
