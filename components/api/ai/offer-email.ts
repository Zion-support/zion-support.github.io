import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase($2);
  if (method !== 'POST') return res.status(405).json($2);
  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {},
  const prompt = `Draft a professional, friendly job offer email.\n` +
    `Candidate: ${candidateName || 'Candidate'}\n` +
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
    `Include signature and next steps.`,

  const text = await generateText($2);
  return res.status(200).json({ email: text})
}