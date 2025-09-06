<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
<<<<<<< HEAD
import { getProposal, updateProposalMeta, updateArtifacts } from '[^']*';

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
  const host = null;
    return res.status(200).json({ meta: updated })
=======
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
=======
import {
  getProposal,
  updateProposalMeta,
  updateArtifacts,;
} from '../../../utils/data/proposals';

async function submitByEmail(
  to: string,
  subject: string,
  text: string,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  attachments: any[] = []
) {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
<<<<<<< HEAD
  const from = process.env.EMAIL_FROM |user;
  if (!host |!user |!pass) throw new Error("Email not configured");
=======
  const from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error('Email not configured');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
    auth: { user, pass }
  });
  await transporter.sendMail({ from, to, subject, text, attachments });
}
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status($1).json({ $2 });
  try {
    const { id, channels = ["email"], emailTo, delegateNote } = req.body |{}
    if (!id) return res.status($1).json({ $2 });
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({ $2 });
=======
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });
    
}

const meta = getProposal(id);
    if (!meta) return res.status(404).json({ error: 'Proposal not found' });

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    // Email submission
    if (channels.includes("email")) {
      const to = emailTo |process.env.UN_GATEWAY_EMAIL |"example@un.org";
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
<<<<<<< HEAD
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote |"N/A"}`;
=======
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || 'N/A'}`;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (error: any) {
=======
 
} catch (error: any) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return res
      .status(500)
      .json({ error: error?.message |"Submission failed" });
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
