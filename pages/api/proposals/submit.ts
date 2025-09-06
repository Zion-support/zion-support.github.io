

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import crypto from "crypto";
import {

<<<<<<< HEAD
  getProposal
  updateProposalMeta
  updateArtifacts
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  getProposal,
  updateProposalMeta,
  updateArtifacts,;

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;


<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  await transporter.sendMail({ from, to, subject, text, attachments });
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

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


      .json({ error: error?.message |"Submission failed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  try {


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {


      ensRecordHash = `0x${hash}`;
      update_artifacts (id, { ensRecordHash });
    } catch {}

    return res && res.status(200).json({ meta: updated });

  } catch (error: any) {
    return res
      .status(500)

      .json({ error: error?.message |"Submission failed" });
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  const from = process.env.EMAIL_FROM || user;

  await transporter.sendMail({ from, to, subject, text, attachments });
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
  }
}
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
