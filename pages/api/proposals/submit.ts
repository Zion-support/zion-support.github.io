<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
async function submitByEmail(
  to: string
  subject: string
  text: string
  attachments: any[] = []
) {
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';

<<<<<<< HEAD
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT |587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
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
    auth: { user, pass }
  });
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
      .json({ error: error?.message |"Submission failed" });
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
<<<<<<< HEAD
  const transporter = nodemailer.createTransport({
    host
    port
    secure: port === 465
    auth: { user, pass }
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  });
<<<<<<< HEAD

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

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Submission failed' })
<<<<<<< HEAD
}

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
  }
}
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




>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
