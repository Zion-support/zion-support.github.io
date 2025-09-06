import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
) {
  const method = (req.method |'POST').toUpperCase();
) {;
  const method = (req.method || 'POST').toUpperCase();
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (method !== 'POST')
<<<<<<< HEAD
<<<<<<< HEAD
    return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  const method = (req.method |'POST').toUpperCase()
  const method = (req.method || 'POST').toUpperCase(),;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD


  const prompt = `Draft a professional, friendly job offer email.\n` +
=======
    `Candidate: ${candidateName || 'Candidate'}\n` +
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
    `Include signature and next steps.`;
  const text = await generateText(
    prompt
    'You are a recruiting ops specialist with excellent writing skills.'
  );
  return res.status(200).json({ email: text });  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');


  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status(200).json({ email: text })
}
  return res.status(200).json({ email: text });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  const prompt = `Draft a professional, friendly job offer email.\n` +

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    return res.status(405).json({ error: 'Method not allowed' });
  const method = null;
  return res.status(200).json({ email: text })
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
