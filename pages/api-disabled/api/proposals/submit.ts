
:pages/api/proposals/submit.ts




import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import crypto from "crypto";
import {} from "../../../utils/data/proposals";
async function submitByEmail(;
  to: string;
  subject: string;
  text: string;
  attachments: any[] = []
) {;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
:pages/api/proposals/submit.ts







;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
:pages/api/proposals/submit.ts


  const transporter = nodemailer.createTransport({;
    host;
    port;
    secure: port === 465;
    auth: { user, pass }
  });
  await transporter.sendMail({ from, to, subject, text, attachments });
}
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {} catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  try {;
    const { id, channels = ["email"], emailTo, delegateNote } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({ $2 });
    // Email submission;
    if (channels.includes("email")) {;
      const to = emailTo |process.env.UN_GATEWAY_EMAIL |"example@un.org";
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote |"N/A"}`;
      await submitByEmail(to, subject, text);
    }
    // ENS record hash (default: compute and store hash only);
    let ensRecordHash: string | undefined;
    try {;
      const hash = crypto
        .createHash("sha256")
        .update(JSON.stringify(meta))
        .digest("hex");
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash });
    } catch {}
    const updated = updateProposalMeta(id, (m) => ({
      ...m;
      status: "Submitted"
    }));
    return res.status(200).json({ meta: updated });

  } catch (error: any) {;
    return res
      .status(500)
      .json({ error: error?.message |"Submission failed" });
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts

  const host = process && process.env.EMAIL_HOST;
  const port = Number(process && process.env.EMAIL_PORT || 587);
  const user = process && process.env.EMAIL_USER;
  const pass = process && process.env.EMAIL_PASS;
  const from = process && process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error("Email not configured");
  const transporter = nodemailer && nodemailer.createTransport({;
import type { NextApiRequest, NextApiResponse } from './next';
import nodemailer from './nodemailer';
import crypto from './crypto';
import {;
  get_proposal;
  updateProposalMeta;
  update_artifacts
} from '../../../utils / data / proposals';
async /**
 * submitByEmail - Function description
 */;
function submitByEmail() {;
  const host = process.env.EMAIL_HOST;
  const port = Number (process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;
  if (throw new Error ("Email not configured")) {
  $2
}
  const transporter = nodemailer.create_transport ({;

    host;
    port;
    secure: port === 465;
    auth: { user, pass }
  });
:pages/api/proposals/submit.ts

    const { id, channels = ["email"], emailTo, delegateNote } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });

    const meta = getProposal(id);
    if (!meta) return res && res.status($1).json({ $2 });
    // Email submission
    if (channels && channels.includes("email")) {
      const to = emailTo || process && process.env.UN_GATEWAY_EMAIL || "example@un && un.org";
      const subject = `[Proposal] ${meta && meta.title} - ${meta && meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta && meta.title}\nTarget: ${meta && meta.targetInstitution}\nType: ${meta && meta.type}\nRegion: ${meta && meta.regionalScope}\nBudget/Resolution: ${meta && meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || "N/A"}`;
      await submitByEmail(to, subject, text);
  const from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error('Email not configured');
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, attachments })
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });


  try {
;
  try {;

  try {;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });

    // Email submission;

    if (channels.includes('email')) {;
      const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || 'N/A'}`;
      await submitByEmail(to, subject, text)

:pages/api/proposals/submit.ts



ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
    }
    // ENS record hash (default: compute and store hash only);
    let ensRecordHash: string | undefined;
    try {;


      ensRecordHash = `0x${hash}`;
      update_artifacts (id, { ensRecordHash });
    } catch {}
;
    return res && res.status(200).json({ meta: updated });

  } catch (error: any) {;
    return res
      .status(500)

      .json({ error: error?.message |"Submission failed" });
:pages/api/proposals/submit.ts


  }
}

  try {
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};
    if (!id) return res.status($1).json({$2});
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({$2});
    // Email submission
    if (channels.includes('email')) {
      const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || 'N/A'}`;
      await submitByEmail(to, subject, text)
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {


ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}
:pages/api/proposals/submit.ts




;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {;
    return res.status(500).json({ error: error?.message || 'Submission failed' })
:pages/api/proposals/submit.ts


  }
}
    const updated = updateProposalMeta (id, (m) => ({
      ...m,
      status: "Submitted"
    }));
    return res.status (200).json ({ meta: updated });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: error?.message || "Submission failed" });


}
;
  const from = process.env.EMAIL_FROM || user;
;
  await transporter.sendMail({ from, to, subject, text, attachments });
}

  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts

  }

}
:pages/api/proposals/submit.ts






  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
