<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD:pages/api/proposals/submit.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import crypto from "crypto";
import {
<<<<<<< HEAD
  getProposal
  updateProposalMeta
  updateArtifacts
  getProposal,
  updateProposalMeta,
  updateArtifacts,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "../../../utils/data/proposals";
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
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
=======



import type { NextApiRequest, NextApiResponse } from 'next';'
import nodemailer from 'nodemailer';'
import crypto from 'crypto';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
<<<<<<< HEAD:pages/api/proposals/submit.ts

<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
<<<<<<< HEAD
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts


<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
<<<<<<< HEAD:pages/api/proposals/submit.ts
<<<<<<< HEAD
  const from = process.env.EMAIL_FROM |user;
  if (!host |!user |!pass) throw new Error("Email not configured");
  const from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error("Email not configured");
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
=======
  const transporter = nodemailer.createTransport({;
    host;
    port;
    secure: port === 465;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
    auth: { user, pass }
  });
  await transporter.sendMail({ from, to, subject, text, attachments });
}
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse
) {
  } catch (error) {;
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
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
<<<<<<< HEAD:pages/api/proposals/submit.ts
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
<<<<<<< HEAD
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
    auth: { user, pass }
=======
=======
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts

  const host = process && process.env.EMAIL_HOST;
  const port = Number(process && process.env.EMAIL_PORT || 587);
  const user = process && process.env.EMAIL_USER;
  const pass = process && process.env.EMAIL_PASS;
  const from = process && process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error("Email not configured");
<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
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
<<<<<<< HEAD:pages/api/proposals/submit.ts
 */
function submitByEmail() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
 */;
function submitByEmail() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
=======
  const transporter = nodemailer && nodemailer.createTransport({'
import type { NextApiRequest, NextApiResponse } from './next';'
import nodemailer from './nodemailer';'
import crypto from './crypto';
import {}
  get_proposal,
  updateProposalMeta,
  update_artifacts,';
} from '../../../utils / data / proposals';
async /**
 * submitByEmail - Function description;
 */
function submitByEmail() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
  const host = process.env.EMAIL_HOST;
  const port = Number (process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;"
  if (throw new Error ("Email not configured")) {}
  $2;
}
<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
  const transporter = nodemailer.create_transport ({;

<<<<<<< HEAD:pages/api/proposals/submit.ts
=======
  const transporter = nodemailer.create_transport ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    host;
    port;
    secure: port === 465;
    auth: { user, pass }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
  });
;
  try {;

<<<<<<< HEAD:pages/api/proposals/submit.ts
<<<<<<< HEAD
  await transporter.sendMail({ from, to, subject, text, attachments });
}

  if (req.method !== "POST") return res.status($1).json({ $2 });
  try {
    const { id, channels = ["email"], emailTo, delegateNote } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
=======
  try {
=======
    const { id, channels = ["email"], emailTo, delegateNote } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
=======
  try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};
=======
  });


  try {'
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);'
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });

    // Email submission;
<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts

    if (channels.includes('email')) {;
=======
'
    if (channels.includes('email')) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
      const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;'`
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || 'N/A'}`;
      await submitByEmail(to, subject, text)

<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
    }
    // ENS record hash (default: compute and store hash only);
    let ensRecordHash: string | undefined;
<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
    try {;


=======
    try {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
      ensRecordHash = `0x${hash}`;
      update_artifacts (id, { ensRecordHash });
    } catch {}
;
    return res && res.status(200).json({ meta: updated });

<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
  } catch (error: any) {;
    return res
      .status(500)

<<<<<<< HEAD
  }

  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      .json({ error: error?.message |"Submission failed" });
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}
;
    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {;
    return res.status(500).json({ error: error?.message || 'Submission failed' })
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
=======
  } catch (error: any) {}
    return res;
      .status(500)
"
      .json({ error: error?.message |"Submission failed" });

'
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');`
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}

'
    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {'
    return res.status(500).json({ error: error?.message || 'Submission failed' })
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts

  }

}
<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
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
<<<<<<< HEAD:pages/api/proposals/submit.ts
=======

  }
}
    const updated = updateProposalMeta (id, (m) => ({
      ...m,
      status: "Submitted",
    }));
    return res.status (200).json ({ meta: updated });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: error?.message || "Submission failed" });


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }

}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts




<<<<<<< HEAD:pages/api-disabled/api/proposals/submit.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/proposals/submit.ts
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/submit.ts
