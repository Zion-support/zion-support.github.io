<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import crypto from "crypto";
import {
<<<<<<< HEAD
  getProposal
  updateProposalMeta
  updateArtifacts
=======
  getProposal,
  updateProposalMeta,
  updateArtifacts,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "../../../utils/data/proposals";
async function submitByEmail(
  to: string
  subject: string
  text: string
  attachments: any[] = []
) {
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
<<<<<<< HEAD
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
=======
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
<<<<<<< HEAD
  const host = process && process.env.EMAIL_HOST;
  const port = Number(process && process.env.EMAIL_PORT || 587);
  const user = process && process.env.EMAIL_USER;
  const pass = process && process.env.EMAIL_PASS;
  const from = process && process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error("Email not configured");
  const transporter = nodemailer && nodemailer.createTransport({
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
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
    const { id, channels = ["email"], emailTo, delegateNote } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
=======
<<<<<<< HEAD
  const from = process.env.EMAIL_FROM |user;
  if (!host |!user |!pass) throw new Error("Email not configured");
=======
  const from = process.env.EMAIL_FROM || user;
<<<<<<< HEAD
  if (!host || !user || !pass) throw new Error("Email not configured");
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
    auth: { user, pass }
  });
<<<<<<< HEAD
=======
=======
  if (!host || !user || !pass) throw new Error('Email not configured');
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  await transporter.sendMail({ from, to, subject, text, attachments });
}
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== "POST") return res.status($1).json({ $2 });
  try {
    const { id, channels = ["email"], emailTo, delegateNote } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });
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
<<<<<<< HEAD
      .json({ error: error?.message |"Submission failed" });
<<<<<<< HEAD
  }
}
=======
=======
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
=======
      .json({ error: error?.message || "Submission failed" });
=======
;
export default async function handler(req, res) {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}
<<<<<<< HEAD
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Submission failed' })
<<<<<<< HEAD
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

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
}
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
