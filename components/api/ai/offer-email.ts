import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD

import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { candidateName, jobTitle, companyName, offerDetails } = req.body || {};

  const prompt = `Generate a professional offer email for a candidate.\n` +
    `Candidate: ${candidateName || 'John Doe'}\n` +
    `Position: ${jobTitle || 'Software Engineer'}\n` +
    `Company: ${companyName || 'Tech Corp'}\n` +
    `Details: ${offerDetails || 'Competitive salary and benefits'}`;

  const text = await generateText(
    prompt,
    'You are an HR professional. Generate a professional offer email.'
  );

  return res.status(200).json({ email: text });
}
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase($2);
  if (method !== 'POST') return res.status(405).json($2);
  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {},
=======
<<<<<<< HEAD
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse

<<<<<<< HEAD
=======

) {
  const method = (req.method |'POST').toUpperCase();
) {;
  const method = (req.method || 'POST').toUpperCase();
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (method !== 'POST')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });'
import { Star } from 'lucide-react';
<<<<<<< HEAD
export default async function handler() { return null; }
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const method = (req.method |'POST').toUpperCase()
  const method = (req.method || 'POST').toUpperCase(),;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  try {'
  const method = (req && req.method || 'POST').toUpperCase(),'
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
`
>>>>>>> merged-prs-20250907-203621
  const prompt = `Draft a professional, friendly job offer email.\n` +
    `Candidate: ${candidateName || 'Candidate'}\n` +
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
    `Include signature and next steps.`,

<<<<<<< HEAD
  const text = await generateText($2);
  return res.status(200).json({ email: text})
}
=======
}'
import { authenticate_request } from '@/utils / auth';'
=======
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  try {
  const method = (req && req.method || 'POST').toUpperCase(),
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
<<<<<<< HEAD
  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {};
  return res && res.status(200).json({ email: text });  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res && res.status(200).json({ email: text })
}
  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {};
  const prompt = `Draft a professional, friendly job offer email.\n` +


`Include signature and next steps.`;
=======



=======
  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {};
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const prompt = `Draft a professional, friendly job offer email.\n` +
<<<<<<< HEAD
    `Candidate: ${candidateName || 'Candidate'}\n` +
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
    `Include signature and next steps.`;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status(200).json({ email: text })

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { authenticate_request } from '@/utils / auth';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  const method = null;
  return res.status(200).json({ email: text ;})
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
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
<<<<<<< HEAD
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
  return res.status(200).json({ email: text });  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');

  return res.status(200).json({ email: text })
}
  return res.status(200).json({ email: text });

}
  return res.status(200).json({ email: text });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
