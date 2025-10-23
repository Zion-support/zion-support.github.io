import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';

async function submitByEmail(
  to: string,
  subject: string,
  text: string,
  attachments: unknown[] = []
) {
  //   const host = process.env.EMAIL_HOST;
  //   const port = Number(process.env.EMAIL_PORT || 587);
  //   const user = process.env.EMAIL_USER;
  //   const pass = process.env.EMAIL_PASS;
  //   const from = process.env.EMAIL_FROM || user;

  if (!host || !user || !pass) {
    throw new Error('Email not configured');
  }

  const transporter = nodemailer.createTransporter({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    attachments,
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {};

    if (!id) {
      return res.status(400).json({ error: 'Proposal ID required' });
    }

    const _meta = getProposal(id);
    if (!meta) {
      return res.status(404).json({ error: 'Proposal not found' });
    }

    // Email submission
    if (channels.includes('email')) {
      //       const to = emailTo || process.env.UN_GATEWAY_EMAIL || 'example@un.org';
      //       const subject = `[Proposal] ${meta.title} - ${meta.targetInstitution}`;
      const text = `Please find the proposal attached.

Title: ${meta.title}
Target: ${meta.targetInstitution}
Type: ${meta.type}
Region: ${meta.regionalScope}
Budget/Resolution: ${meta.budgetOrResolution}

DAO Governance: See document.

Delegate Note: ${delegateNote || 'N/A'}`;

      await submitByEmail(to, subject, text);
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined;
    try {
      const _hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest('hex');
      ensRecordHash = `0x${hash}`;
      updateArtifacts(id, { ensRecordHash });
    } catch {
      // ignore
    }

    const updated = updateProposalMeta(id, m => ({
      ...m,
      status: 'Submitted',
    }));

    return res.status(200).json({ meta: updated });
  } catch (error: unknown) {
    return res.status(500).json({ error: error?.message || 'Submission failed' });
  }
}
