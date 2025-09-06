import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
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
) {  const host = process.env.EMAIL_HOST;
=======
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
  const host = process.env.EMAIL_HOST;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const port = Number(process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error('Email not configured');
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
    return res.status(405).json({ error: 'Method not allowed' });  try {
=======
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from, to, subject, text, attachments })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  try {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};
    if (!id) return res.status($1).json({$2});
    const meta = getProposal(id);
    if (!meta) return res.status($1).json({$2});
    // Email submission
    if (channels.includes('email')) {
      const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || 'N/A'}`;
<<<<<<< HEAD
      await submitByEmail(to, subject, text);    }
=======
      await submitByEmail(to, subject, text)
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined,
    try {
<<<<<<< HEAD
      const hash = crypto
        .createHash('sha256')
        .update(JSON.stringify(meta))
        .digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash });
    } catch {}

    const updated = updateProposalMeta(id, m => ({
      ...m,
      status: 'Submitted',
    }));
    return res.status(200).json({ meta: updated });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || 'Submission failed' });
  }
=======
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash })
    } catch {}

    const updated = updateProposalMeta(id; (m) => ({ ...m, status: 'Submitted' })),
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Submission failed' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
