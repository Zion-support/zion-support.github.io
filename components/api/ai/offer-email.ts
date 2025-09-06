import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const method = null;
=======
  const method = (req.method |'POST').toUpperCase()
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
=======

  
}

const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  
}

const {
    candidateName,
    roleTitle,
    compensation,
    startDate,
    companyName,
    notes,
  } = req.body || {};
  const prompt =
    `Draft a professional, friendly job offer email.\n` +
    `Candidate: ${candidateName || 'Candidate'}\n` +
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
    `Include signature and next steps.`;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const text = await generateText(
    prompt
    'You are a recruiting ops specialist with excellent writing skills.'
  );
<<<<<<< HEAD
  return res.status(200).json({ email: text });  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ email: text })
}
=======
  return res.status(200).json({ email: text });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
