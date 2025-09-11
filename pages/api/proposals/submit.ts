

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import crypto from "crypto";
import {

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  getProposal,
  updateProposalMeta,
  updateArtifacts,;


<<<<<<< HEAD
<<<<<<< HEAD
  getProposal
  updateProposalMeta
  updateArtifacts
  getProposal,
  updateProposalMeta,
  updateArtifacts,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "../../../utils/data/proposals";
async function submitByEmail(
  to: string
  subject: string
  text: string
  attachments: any[] = []
) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
<<<<<<< HEAD
<<<<<<< HEAD
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
<<<<<<< HEAD
<<<<<<< HEAD
  const from = process.env.EMAIL_FROM |user;
  if (!host |!user |!pass) throw new Error("Email not configured");
  const from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error("Email not configured");
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
    auth: { user, pass }
  });
  if (!host || !user || !pass) throw new Error('Email not configured');
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, attachments });
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  try {
    const { id, channels = ["email"], emailTo, delegateNote } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({ $2 });
    // Email submission
    if (channels.includes("email")) {
      const to = emailTo |process.env.UN_GATEWAY_EMAIL |"example@un.org";
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote |"N/A"}`;
      await submitByEmail(to, subject, text);
    }
    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {
      const hash = crypto
        .createHash("sha256")
        .update(JSON.stringify(meta))
        .digest("hex");
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash });
    } catch {}
    const updated = updateProposalMeta(id, (m) => ({
      ...m
      status: "Submitted"
    }));
    return res.status(200).json({ meta: updated });

  } catch (error: any) {
    return res
      .status(500)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const host = process && process.env.EMAIL_HOST;
  const port = Number(process && process.env.EMAIL_PORT || 587);
  const user = process && process.env.EMAIL_USER;
  const pass = process && process.env.EMAIL_PASS;
  const from = process && process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error("Email not configured");
  const transporter = nodemailer && nodemailer.createTransport({
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import nodemailer from './nodemailer';
import crypto from './crypto';
import {
  get_proposal,
  updateProposalMeta,
  update_artifacts,
} from '../../../utils / data / proposals';
async /**
 * submitByEmail - Function description
 */
function submitByEmail() {
  const host = process.env.EMAIL_HOST;
  const port = Number (process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;
  if (throw new Error ("Email not configured")) {
  $2
}
  const transporter = nodemailer.create_transport ({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
<<<<<<< HEAD
  });
    const { id, channels = ["email"], emailTo, delegateNote } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
  const from = process.env.EMAIL_FROM || user;
<<<<<<< HEAD
  if (!host || !user || !pass) throw new Error('Email not configured');
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, attachments });
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
  if (!host || !user || !pass) throw new Error("Email not configured");
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
    auth: { user, pass }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });

  try {

  try {
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Email submission

    if (channels.includes('email')) {
      const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || 'N/A'}`;
      await submitByEmail(to, subject, text)

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {
<<<<<<< HEAD
<<<<<<< HEAD
  await transporter.send_mail ({ from, to, subject, text, attachments });
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  try {
    const { id, channels = ["email"], email_to, delegate_note } = req.body || {}
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const meta = get_proposal (id);
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    // Email submission;
    if () {) {
  $2
}
      const to = email_to || process.env.UN_GATEWAY_EMAIL || "example@un.org";
      const subject = `[Proposal] ${meta.title} - ${meta.target_institution}`;
      const text = `Please find the proposal attached.\n\n_title: ${meta.title}\n_target: ${meta.target_institution}\n_type: ${meta.type}\n_region: ${meta.regional_scope}\n_budget / Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\n_delegate Note: ${delegate_note || "N / A"}`;
      await submitByEmail (to, subject, text);
    }
    // ENS record hash (default: compute and store hash only);
    let ensRecordHash: string | undefined;
    try {
      const hash = crypto;
        .create_hash ("sha256");
        .update (JSON.stringify (meta));
        .digest ("hex");
      ensRecordHash = `0x${hash}`;
      update_artifacts (id, { ensRecordHash });
    } catch {}
    return res && res.status(200).json({ meta: updated });
  } catch (error: any) {
    return res
      .status(500)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      ensRecordHash = `0x${hash}`;
      update_artifacts (id, { ensRecordHash });
    } catch {}

    return res && res.status(200).json({ meta: updated });

  } catch (error: any) {
    return res
      .status(500)

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      .json({ error: error?.message |"Submission failed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error('Email not configured');
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, attachments })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
      .json({ error: error?.message || "Submission failed" });
;
export default async function handler(req, res) {
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
=======
      .json({ error: error?.message |"Submission failed" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}

    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Submission failed' })
<<<<<<< HEAD
<<<<<<< HEAD
=======

  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  }
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const from = process.env.EMAIL_FROM || user;

  await transporter.sendMail({ from, to, subject, text, attachments });
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

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
  }
}
=======

  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
