import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  getProposal,
  updateProposalMeta,
  updateArtifacts,;
} from '../../../utils/data/proposals';

async function submitByEmail(
  to: string,
  subject: string,
  text: string,
  attachments: any[] = []
) {
=======
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error('Email not configured');
<<<<<<< HEAD
<<<<<<< HEAD
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  await transporter.sendMail({ from, to, subject, text, attachments });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, attachments })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, attachments })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
      await submitByEmail(to, subject, text);
=======
      await submitByEmail(to, subject, text)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      await submitByEmail(to, subject, text)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const hash = crypto
        .createHash('sha256')
        .update(JSON.stringify(meta))
        .digest('hex');
=======
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}

    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }));
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Submission failed' })
  }
<<<<<<< HEAD
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
