import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD
) {
  const method = (req.method |'POST').toUpperCase();
=======
) {;
  const method = (req.method || 'POST').toUpperCase();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  const method = (req.method |'POST').toUpperCase()
=======
  const method = (req.method || 'POST').toUpperCase(),;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const {
    candidateName
    roleTitle
    compensation
    startDate
    companyName
    notes
  } = req.body |{}
  const prompt =
    `Draft a professional, friendly job offer email.\n` +    `Candidate: ${candidateName |'Candidate'}\n` +  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body |{}
  const prompt = `Draft a professional, friendly job offer email.\n` +
    `Candidate: ${candidateName |'Candidate'}\n` +
    `Role: ${roleTitle |'Software Engineer'}\n` +
    `Compensation: ${compensation |'Competitive'}\n` +
    `Start Date: ${startDate |'TBD'}\n` +
    `Company: ${companyName |'Your Company'}\n` +
    `Notes: ${notes |''}\n` +
    `Include signature and next steps.`;
  const text = await generateText(
    prompt
    'You are a recruiting ops specialist with excellent writing skills.'
  );
<<<<<<< HEAD
  return res.status(200).json({ email: text });  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');

  return res.status(200).json({ email: text })
}
<<<<<<< HEAD
=======
  return res.status(200).json({ email: text });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  return res.status(200).json({ email: text });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
