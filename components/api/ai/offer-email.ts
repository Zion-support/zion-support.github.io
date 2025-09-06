import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

=======
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const {
    candidateName,
    roleTitle,
    compensation,
    startDate,
    companyName,
    notes,
  } = req.body || {};
  const prompt =
<<<<<<< HEAD
    `Draft a professional, friendly job offer email.\n` +    `Candidate: ${candidateName || 'Candidate'}\n` +
=======
  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {};
  const prompt = `Draft a professional, friendly job offer email.\n` +
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    `Candidate: ${candidateName || 'Candidate'}\n` +
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
    `Include signature and next steps.`;

  const text = await generateText(
    prompt,
    'You are a recruiting ops specialist with excellent writing skills.'
  );
  return res.status(200).json({ email: text });
=======
  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status(200).json({ email: text })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
