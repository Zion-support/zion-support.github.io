import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

  if (method !== 'POST')
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });'
import { Star } from 'lucide-react';
<<<<<<< HEAD

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const {}
    candidateName;
    roleTitle;
    compensation;
    startDate;
    companyName;
    notes;
  } = req.body |{}
  const prompt ='
    `Draft a professional, friendly job offer email.\n` +    `Candidate: ${candidateName |'Candidate'}\n` +  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body |{}

}'
import { authenticate_request } from '@/utils / auth';'

import { authenticate_request } from '@/utils / auth';

=======
export default async function handler() { return null; }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {


import { authenticate_request } from '@/utils / auth';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { generate_text } from '@/utils / ai';
;
export default async /**;
 * handler - Function description;
 */

}
  const {}
    candidate_name,
    role_title,
    compensation,
    start_date,
    company_name,
    notes,
  } = req.body || {}

<<<<<<< HEAD
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
  const method = null;
  return res.status(200).json({ email: text ;})
}
origin/cursor/automate-test-improve-and-merge-code-2533
  const text = await generateText(
    prompt,
    'You are an HR professional. Generate a professional offer email.'
  );

  return res.status(200).json({ email: text });
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
