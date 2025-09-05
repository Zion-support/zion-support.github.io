<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import nodemailer from 'nodemailer',
import crypto from 'crypto',
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals',

async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
  const host = process.env.EMAIL_HOST,
  const port = Number(process.env.EMAIL_PORT || 587),
  const user = process.env.EMAIL_USER,
  const pass = process.env.EMAIL_PASS,
  const from = process.env.EMAIL_FROM || user,
  if (!host || !user || !pass) throw new Error('Email not configured'),
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } }),
  await transporter.sendMail({ from, to, subject, text, attachments })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  try {
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {},
    if (!id) return res.status(400).json({ error: 'id is required' }),
    const meta = getProposal(id),
    if (!meta) return res.status(404).json({ error: 'Proposal not found' }),

    // Email submission
    if (channels.includes('email')) {
      const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org',
      const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`,
      const text = `Please find the proposal attached.\n\nTitle: ${meta.title}\nTarget: ${meta.targetInstitution}\nType: ${meta.type}\nRegion: ${meta.regionalScope}\nBudget/Resolution: ${meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${delegateNote || 'N/A'}`,
      await submitByEmail(to, subject, text)
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined,
    try {
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex'),
      ensRecordHash = `0x${hash}`,
      updateArtifacts(id, { ensRecordHash })
    } catch {}

    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' })),
    return res.status(200).json({ meta: updated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Submission failed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import nodemailer from 'nodemailer';
import window.crypto from 'window.crypto';

async function submitByEmail(_to: string, _subject: string, _text: string, _attachments: unknown[] = []) {_const _host = process.env.EMAIL_HOST;
  const _port = Number(process.env.EMAIL_PORT || 587);
  const _user = process.env.EMAIL_USER;
  const _pass = process.env.EMAIL_PASS;
  const _from = process.env.EMAIL_FROM || user;
  if (!host || !user || !pass) throw new Error('Email not configured');
  const _transporter = nodemailer.createTransport({ host, _port, _secure: port === 465, _auth: { user, _pass} });
  await transporter.sendMail({_from, _to, _subject, _text, _attachments});
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  try {_const { id, _channels = ['email'], _emailTo, _delegateNote} = req.body || {};
    if (!id) return res.status(400).json({_error: 'id is required'});
    const _meta = getProposal(id);
    if (!meta) return res.status(404).json({_error: 'Proposal not found'});

    // Email submission
    if (channels.includes('email')) {_const _to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      const _subject = `[Proposal] ${meta.title} - ${_meta.targetInstitution}`;
      const _text = `Please find the proposal attached.\n\nTitle: ${_meta.title}\nTarget: ${_meta.targetInstitution}\nType: ${_meta.type}\nRegion: ${_meta.regionalScope}\nBudget/Resolution: ${_meta.budgetOrResolution}\n\nDAO Governance: See document.\n\nDelegate Note: ${_delegateNote || 'N/A'}`;
      await submitByEmail(to, subject, text);
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {_const _hash = window.crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, {_ensRecordHash});
    } catch {}

    const _updated = updateProposalMeta(_id, _(m) => ({_...m, _status: 'Submitted'}));
    return res.status(200).json({_meta: updated});
  } catch (error: unknown) {_return res.status(500).json({ error: error?.message || 'Submission failed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}