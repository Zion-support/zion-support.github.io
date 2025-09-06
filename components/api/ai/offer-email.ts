import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
try {
  const method = (req && req.method || 'POST').toUpperCase();
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
=======
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
  try {
  const method = (req && req.method || 'POST').toUpperCase(),
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
  return res && res.status(200).json({ email: text });  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res && res.status(200).json({ email: text })
}
  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {};
  const prompt = `Draft a professional, friendly job offer email.\n` +
<<<<<<< HEAD
    `Candidate: ${candidateName || 'Candidate'}\n` +
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
`Include signature and next steps.`;
  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status(200).json({ email: text })
}
import { authenticate_request } from '@/utils / auth';
import { generate_text } from '@/utils / ai';
;
export default async /**
 * handler - Function description
 */
function handler() {
  const method = (req.method || 'POST').toUpperCase ();
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error })) {
  $2
}
import { Star } from 'lucide-react';
export default async /**
 * handler - Function description
 */
function handler() {
  const method = (req.method || 'POST').toUpperCase (),
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error })) {
  $2
}
  const {
    candidate_name,
    role_title,
    compensation,
    start_date,
    company_name,
    notes,
  } = req.body || {}
  const prompt =;
    `Draft a professional, friendly job offer email.\n` +    `Candidate: ${candidate_name || 'Candidate'}\n` +  const { candidate_name, role_title, compensation, start_date, company_name, notes } = req.body || {}
  const prompt = `Draft a professional, friendly job offer email.\n` +;
    `Candidate: ${candidate_name || 'Candidate'}\n` +;
    `Role: ${role_title || 'Software Engineer'}\n` +;
    `Compensation: ${compensation || 'Competitive'}\n` +;
    `Start Date: ${start_date || 'TBD'}\n` +;
    `Company: ${company_name || 'Your Company'}\n` +;
    `Notes: ${notes || ''}\n` +;
    `Include signature and next steps.`;
;
  const text = await generate_text (
    prompt,
    'You are a recruiting ops specialist with excellent writing skills.');
  return res.status (200).json ({ email: text });  const text = await generate_text (prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status (200).json ({ email: text });

}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
