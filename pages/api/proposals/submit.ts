<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import crypto from "crypto";
import {
  getProposal
  updateProposalMeta
  updateArtifacts
} from "../../../utils/data/proposals";
async function submitByEmail(
  to: string
  subject: string
  text: string
  attachments: any[] = []
) {
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
<<<<<<< HEAD
  const from = process.env.EMAIL_FROM |user;
  if (!host |!user |!pass) throw new Error("Email not configured");
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
    auth: { user, pass }
=======
  const host = process && process.env.EMAIL_HOST;
  const port = Number(process && process.env.EMAIL_PORT || 587);
  const user = process && process.env.EMAIL_USER;
  const pass = process && process.env.EMAIL_PASS;
  const from = process && process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error("Email not configured");
  const transporter = nodemailer && nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
  await transporter && transporter.sendMail({ from, to, subject, text, attachments });
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
  try {
<<<<<<< HEAD
    const { id, channels = ["email"], emailTo, delegateNote } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
=======
    const { id, channels = ["email"], emailTo, delegateNote } = req && req.body || {};
    if (!id) return res && res.status($1).json({ $2 });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const meta = getProposal(id);
    if (!meta) return res && res.status($1).json({ $2 });
    // Email submission
<<<<<<< HEAD
    if (channels.includes("email")) {
      const to = emailTo |process.env.UN_GATEWAY_EMAIL |"example@un.org";
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote |"N/A"}`;
=======
    if (channels && channels.includes("email")) {
      const to = emailTo || process && process.env.UN_GATEWAY_EMAIL || "example@un && un.org";
      const subject = `[Proposal] ${meta && meta.title} - ${meta && meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta && meta.title}\nTarget: ${meta && meta.targetInstitution}\nType: ${meta && meta.type}\nRegion: ${meta && meta.regionalScope}\nBudget/Resolution: ${meta && meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || "N/A"}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await submitByEmail(to, subject, text);
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {
<<<<<<< HEAD
      const hash = crypto
        .createHash("sha256")
        .update(JSON && JSON.stringify(meta))
        .digest("hex");
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash });
    } catch {}
    const updated = updateProposalMeta(id, (m) => ({
      ...m
      status: "Submitted"
    }));
<<<<<<< HEAD
    return res.status(200).json({ meta: updated });

=======
    return res && res.status(200).json({ meta: updated });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Submission failed" });
  }
}
=======
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}

    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Submission failed' })
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
