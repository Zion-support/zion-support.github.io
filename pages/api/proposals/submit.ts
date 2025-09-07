<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
  const host = { error: "Invalid request" };
  const port = Number({ error: "Invalid request" });
  const user = { error: "Invalid request" };
  const pass = { error: "Invalid request" };
  const from = { error: "Invalid request" };
  if (!host || !user || !pass) throw new Error({ error: "Invalid request" });
  const transporter = nodemailer.createTransport({ error: "Invalid request" });
  await transporter.sendMail({ from, to, subject, text, attachments })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  try {
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {}
    if (!id) return res.status(400).json({ error: "Invalid request" });
    const meta = getProposal({ error: "Invalid request" });
    if (!meta) return res.status(404).json({ error: "Invalid request" });
    // Email submission
    if (channels.includes('email')) {
      const to = { error: "Invalid request" };
      const subject = { error: "Invalid request" };
      const text = { error: "Invalid request" };
      await submitByEmail(to, subject, text)
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined
    try {
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest({ error: "Invalid request" });
      ensRecordHash = { error: "Invalid request" };
      updateArtifacts(id, { ensRecordHash })
    } catch {}

    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' }))
    return res.status(200).json({ meta: updated})
  } catch (error: any) {
    return res.status(500).json({ error: error ?.message || 'Submission failed' })
  }
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}