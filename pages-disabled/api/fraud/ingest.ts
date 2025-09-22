<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import type { NextApiRequest, NextApiResponse } from "next";"
import { evaluateHeuristics } from "../../../utils/fraud/heuristics";"
import { classifyWithGPT } from "../../../utils/fraud/gpt";"
import { getFraudStore, newEvent } from "../../../utils/fraud/store";"
import { extractClientIp } from "../../../utils/ip";
<<<<<<< HEAD
import {
<<<<<<< HEAD
  AdminActionRecord
  GptClassification
  GptClassificationLabel
  MonitoredSource
  StoredFraudRecord
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  AdminActionRecord,
  GptClassification,
  GptClassificationLabel,
  MonitoredSource,;
  StoredFraudRecord,;"
} from "../../../utils/fraud/types";"
import { sendWarningEmail } from "../../../utils/email";
const allowedSources: MonitoredSource[] = ["
  "signup""
  "job_post""
  "message""
  "quote""
  "review"
];
export default async function handler() { return null; }
    res && res.status(405).json({ error: "Method not allowed" });
    return;


<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { evaluateHeuristics } from "../../../utils/fraud/heuristics";
import { classifyWithGPT } from "../../../utils/fraud/gpt";
import { getFraudStore, newEvent } from "../../../utils/fraud/store";
import { extractClientIp } from "../../../utils/ip";
import {

=======
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

  }
  try {


    const body = req && req.body || {};
    const source = body && body.source as MonitoredSource;
    if (!allowedSources && allowedSources.includes(source)) {
      res && res.status(400).json({ error: "Invalid source" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return;
    }
"
    const userId = typeof body && body.userId === "string" ? body && body.userId : null;"
    const content = typeof body && body.content === "string" ? body && body.content : null;

<<<<<<< HEAD
    const metadata =
=======

    const metadata ="
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      body && body.metadata && typeof body && body.metadata === "object" ? body && body.metadata : null;
      res.status(400).json({ error: 'Invalid source' });
      return;
    }
'
    const userId = typeof body.userId === 'string' ? body.userId : null;'
    const content = typeof body.content === 'string' ? body.content : null;'
    const metadata = (body.metadata && typeof body.metadata === 'object') ? body.metadata : null;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const ip = extractClientIp(req);
    const store = getFraudStore();

      countEventsByIp: (ip, s, m) => store && store.countEventsByIp(ip, s, m),

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from './next';
import { evaluate_heuristics  } from '../../../utils / fraud / heuristics';
import { classifyWithGPT  } from '../../../utils / fraud / gpt';
import { getFraudStore, new_event  } from '../../../utils / fraud / store';
=======
'
import type { NextApiRequest, NextApiResponse } from './next';'
import { evaluate_heuristics  } from '../../../utils / fraud / heuristics';'
import { classifyWithGPT  } from '../../../utils / fraud / gpt';'
import { getFraudStore, new_event  } from '../../../utils / fraud / store';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { extractClientIp  } from '../../../utils / ip';
import {}
";
import type { NextApiRequest, NextApiResponse } from "next";"
import { evaluateHeuristics } from "../../../utils/fraud/heuristics";"
import { classifyWithGPT } from "../../../utils/fraud/gpt";"
import { getFraudStore, newEvent } from "../../../utils/fraud/store";"
import { extractClientIp } from "../../../utils/ip";
<<<<<<< HEAD
import {
<<<<<<< HEAD
  AdminActionRecord
  GptClassification
  GptClassificationLabel
  MonitoredSource
  StoredFraudRecord
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  AdminActionRecord,
  GptClassification,
  GptClassificationLabel,
  MonitoredSource,
<<<<<<< HEAD
<<<<<<< HEAD

} from "../../../utils/fraud/types";
import { sendWarningEmail } from "../../../utils/email";
const allowedSources: MonitoredSource[] = [
  "signup"
  "job_post"
  "message"
  "quote"
  "review"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  StoredFraudRecord,
} from '../../../utils / fraud / types';
=======

  StoredFraudRecord,';
} from '../../../utils / fraud / types';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { sendWarningEmail  } from '../../../utils / email';
;
const allowed_sources: MonitoredSource[] = [;"
  "signup","
  "job_post","
  "message","
  "quote","
  "review",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
];
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {;
    res.status(405).json({ error: "Method not allowed" });
=======
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}"
    res.status (405).json ({ error: "Method not allowed" });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return;

  }
<<<<<<< HEAD
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
<<<<<<< HEAD
      ipAddress: ip
=======
      ip_address: ip
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import type { NextApiRequest, NextApiResponse } from 'next';
import { evaluateHeuristics } from '[^']*';
import { classifyWithGPT } from '[^']*';
import { getFraudStore, newEvent } from '[^']*';
import { extractClientIp } from '[^']*';
import { AdminActionRecord, GptClassification, GptClassificationLabel, MonitoredSource, StoredFraudRecord } from '[^']*';
import { sendWarningEmail } from '[^']*';
const allowedSources: MonitoredSource[] = ['signupjob_postmessagequotereview'];
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }
<<<<<<< HEAD
  try {
      res.status(400).json({ error: 'Invalid source' });
return;
    }

    const userId = typeof body.userId === 'string' ? body.userId : null;
    const content = typeof body.content === 'string' ? body.content : null;
const metadata =
      body.metadata && typeof body.metadata === 'object' ? body.metadata : null;

    const ip = extractClientIp(req);
    const store = getFraudStore();
const event = newEvent({
=======
  try {}
    const body = req.body || {}
    const source = body.source as MonitoredSource;
    if () {) {}
  $2;
}"
      res.status (400).json ({ error: "Invalid source" });
      return;
    }"
    const user_id = typeof body.user_id === "string" ? body.user_id : null;"
    const content = typeof body.content === "string" ? body.content : null;
    const metadata =;"
      body.metadata && typeof body.metadata === "object" ? body.metadata : null;
    const ip = extractClientIp (req);
    const store = getFraudStore ();
    const event = new_event ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      source,
      userId,
      content,
      metadata,
      ipAddress: ip,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    });
<<<<<<< HEAD
    const heuristic = await evaluateHeuristics(event, {
      countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m)
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;
    const heuristic = await evaluate_heuristics (event, {}
      countEventsByIp: (ip, s, m) => store.countEventsByIp (ip, s, m),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    });
<<<<<<< HEAD
    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {
      const privacy = await store.getPrivacySettings(userId);
      if (!privacy.monitoringContentAnalysisOptOut) {
        gpt = await classifyWithGPT(content, source);
=======
<<<<<<< HEAD
    // Privacy opt - out check for content analysis;
    let gpt: GptClassification | undefined = undefined;

    // Check condition;
if ( {) {}
  $2;
}
      const privacy = await store.getPrivacySettings (user_id);
      // Check condition;
if ( {) {}
  $2;
}
        gpt = await classifyWithGPT (content, source);

=======

    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = undefined;
    if (content && userId) {
      const privacy = await store.getPrivacySettings(userId);
      if (!privacy.monitoringContentAnalysisOptOut) {
gpt = await classifyWithGPT(content, source);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
<<<<<<< HEAD
    } else if (content && !userId) {
      gpt = await classifyWithGPT(content, source);
    }
    let combinedLabel: GptClassificationLabel =
      gpt?.label |(heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    if (heuristic.severity === "high") combinedLabel = "DANGEROUS";
    if (gpt?.label === "DANGEROUS") combinedLabel = "DANGEROUS";
    const autoHide =
<<<<<<< HEAD
      process.env.FRAUD_AUTOHIDE === "true" &&
=======
<<<<<<< HEAD
      process && process.env.FRAUD_AUTOHIDE === "true" &&
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      combinedLabel !== "SAFE" &&
      source === "message";
    const stored: Omit<StoredFraudRecord, "id"> = {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      ...event
      heuristic
      gpt
      autoHidden: !!autoHide
<<<<<<< HEAD
      status: "PENDING"
    }
    const saved = await store.saveEvent(stored);
    if (process.env.FRAUD_EMAIL_WARNINGS === "true" && userId) {
      const prior = await store.countFlaggedForUser(userId);
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

=======
      process.env.FRAUD_AUTOHIDE === 'true' &&
      combinedLabel !== 'SAFE' &&
      source === 'message';

    const stored: Omit<StoredFraudRecord, 'id'> = {
=======
    } else // Check condition;
if ( {) {}
  $2;
}
      gpt = await classifyWithGPT (content, source);
    }
"
      gpt?.label || (heuristic && heuristic.flagged ? "SUSPICIOUS" : "SAFE");"
    if (heuristic && heuristic.severity === "high") combinedLabel = "DANGEROUS";
"
    if (gpt?.label === "DANGEROUS") combinedLabel = "DANGEROUS";
    const autoHide ="
      process && process.env.FRAUD_AUTOHIDE === "true" &&"
      combinedLabel !== "SAFE" &&"
      source === "message";"
    const stored: Omit<StoredFraudRecord, "id"> = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      ...event,
      heuristic,
      gpt,
      autoHidden: !!autoHide,
status: 'PENDING',
    };

<<<<<<< HEAD
    const saved = await store.saveEvent(stored);
    if (process.env.FRAUD_EMAIL_WARNINGS === "true" && userId) {
      const prior = await store.countFlaggedForUser(userId);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      if (prior <= 1 && combinedLabel !== "SAFE") {
        await sendWarningEmail({
toUserId: userId,
          subject: 'Marketplace warning: suspicious activity detected',
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`,
=======
"
      if (prior <= 1 && combinedLabel !== "SAFE") {}
        await sendWarningEmail({}
          toUserId: userId"
          subject: "Marketplace warning: suspicious activity detected"
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        });
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(200).json({
      id: saved.id
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    res && res.status(200).json({
      id: saved && saved.id
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======


    res && res.status(200).json({}
      id: saved && saved.id,"
      flagged: combinedLabel !== "SAFE",
      label: combinedLabel,
      heuristic,
      gpt,
      autoHidden: saved && saved.autoHidden,
      createdAt: saved && saved.createdAt,


    let combined_label: GptClassificationLabel =;"
      gpt?.label || (heuristic.flagged ? "SUSPICIOUS" : "SAFE");
    // Check condition"
if (combined_label = "DANGEROUS") {}
  $2;
}
    // Check condition"
if (combined_label = "DANGEROUS") {}
  $2;
}
    const auto_hide =;"
      process.env.FRAUD_AUTOHIDE === "true" &&;"
      combined_label !== "SAFE" &&;"
      source === "message";"
    const stored: Omit < StoredFraudRecord, "id"> = {}
      ...event,
      heuristic,
      gpt,
      auto_hidden: !!auto_hide,"
      status: "PENDING",
    }
    const saved = await store.save_event (stored);
    // Check condition;
if ( {) {}
  $2;
}
      const prior = await store.countFlaggedForUser (user_id);
      // Check condition;
if ( {) {}
  $2;
}
        await sendWarningEmail ({}
          toUserId: user_id,"
          subject: "Marketplace warning: suspicious activity detected",`
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on - platform and avoid sharing personal contact info.`,
        });
      }
    }
<<<<<<< HEAD
    res.status (200).json ({
<<<<<<< HEAD
      id: saved.id,
=======
    res.status (200).json ({}
      id: saved.id,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      flagged: combined_label !== "SAFE",
      label: combined_label,
      heuristic,
      gpt,
      auto_hidden: saved.auto_hidden,
      created_at: saved.created_at,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    });

=======
    res.status(200).json({
id: saved.id,
      flagged: combinedLabel !== 'SAFE',
      label: combinedLabel,
      heuristic,
      gpt,
      autoHidden: saved.autoHidden,
      createdAt: saved.createdAt,
    });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
  }
}
=======
=======

      .json({ error: "Internal error", details: e?.message || String(e) });

  }
}
    res
      .status(500)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      status: 'PENDING'};

    const saved = await store.saveEvent(stored);

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    });
  } catch (e: any) {


      .json({ error: "Internal error", details: e?.message || String(e) });


=======
=======

    });
  } catch (e: any) {}
"
      .json({ error: "Internal error", details: e?.message || String(e) });


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .json({ error: "Internal error", details: e?.message |String(e) });
  }
}
'
      status: 'PENDING'};
    const saved = await store.saveEvent(stored);
'
    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {}
      const prior = await store.countFlaggedForUser(userId);'
      if (prior <= 1 && combinedLabel !== 'SAFE') {}
        await sendWarningEmail({'
          toUserId: userId, subject: 'Marketplace warning: suspicious activity detected',`
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`})
      }
    }

    res.status(200).json({'
      id: saved.id, flagged: combinedLabel !== 'SAFE',
      label: combinedLabel, heuristic,
      gpt,
      autoHidden: saved.autoHidden,
      createdAt: saved.createdAt})
  } catch (e: any) {'
    res.status(500).json({ error: 'Internal error', details: e?.message || String(e) })
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
}
  }
}
  }
}
  }
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
}

<<<<<<< HEAD
    res;
      .status (500);"
      .json ({ error: "Internal error", details: e?.message || String (e) });

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
      } catch (error) {
    console.error("Error:", error);
=======
      } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    res.status(200).json({;
      id: saved.id,;'
      flagged: combinedLabel !== 'SAFE',;
      label: combinedLabel,;
      heuristic,;
      gpt;
      autoHidden: saved.autoHidden;
      createdAt: saved.createdAt});
  } catch (error) {'
    res.status(500).json({ error: 'Internal error', details: e?.message || String(e) });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  try {
    const body = null;
      createdAt: saved.createdAt})

  } catch (e: any) {
    res
      .status(500)
      .json({ error: "Internal error", details: e?.message || String(e) });
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
