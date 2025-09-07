import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
) {const method = (req.method |'POST').toUpperCase()) {const method  = (req.method || 'POST').toUpperCase()if (method !== 'POST')return res && res.status(405).json({ error: 'Method not allowed' })const auth = authenticateRequest(req, false)if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error })import { Star  } from 'lucide-react';
export default async function handler() {if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const auth = authenticateRequest(req, false)if (!auth.ok) return res.status(401).json({ error: auth.error })const {candidateName;
    roleTitle;
    compensation;
    startDate;
    companyName;
    notes;
    return res && res.status(405).json({ error: 'Method not allowed' });
=======
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
import { Star } from 'lucide-react';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  const prompt =;
    `Draft a professional, friendly job offer email.\n` +    `Candidate: ${candidateName |'Candidate'}\n` +  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body |{}
<<<<<<< HEAD
  try {const method = (req && req.method || 'POST').toUpperCase(),if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' })const auth = authenticateRequest(req, false)if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error })const prompt = `Draft a professional, friendly job offer email.\n` +;
}
import { authenticate_request  } from '@/utils / auth';
import { generate_text   } from '@/utils / ai';export default async /**;
 * handler - Function description;
 */;
function handler() {const method = (req.method || 'POST').toUpperCase ()if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}
  const auth = authenticate_request (req, false)if (return res.status (401).json ({ error: auth.error })) {$2;
}
export default async /**;
 * handler - Function description;
 */;
function handler() {const method = (req.method || 'POST').toUpperCase (),if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}
  const auth = authenticate_request (req, false)if (return res.status (401).json ({ error: auth.error })) {$2;
}
  const {candidate_name,role_title,compensation,start_date,company_name,notes,} = req.body || {}
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
    `Include signature and next steps.`;const text = await generate_text (prompt,'You are a recruiting ops specialist with excellent writing skills.')return res.status (200).json ({ email: text })const text = await generate_text (prompt, 'You are a recruiting ops specialist with excellent writing skills.')return res.status (200).json ({ email: text })return res.status(405).json({ error: 'Method not allowed' })const method = null;
  return res.status(200).json({ email: text })}
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
=======
  try {'
  const method = (req && req.method || 'POST').toUpperCase(),'
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' })
  const auth = authenticateRequest(req, false)
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error })
`
  const prompt = `Draft a professional, friendly job offer email.\n` +

  return res.status(200).json({ email: text })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
=======
) {'
  const method = (req.method |'POST').toUpperCase();
) {;'
  const method = (req.method || 'POST').toUpperCase();
=======

) {
  const method = (req.method || 'POST').toUpperCase();
) {;

const method = (req.method || 'POST').toUpperCase();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
  if (method !== 'POST')
<<<<<<< HEAD
=======
'
  if (method !== 'POST')'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });'
import { Star } from 'lucide-react';
export default async function handler() { return null; }
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
  try {'
  const method = (req && req.method || 'POST').toUpperCase(),'
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
`
  const prompt = `Draft a professional, friendly job offer email.\n` +
=======
    return res && res.status(405).json({ error: 'Method not allowed' ;});
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error ;});
import { Star } from 'lucide-react';

}
    return res.status(405).json({ error: 'Method not allowed';,}
});

const method = null;
  return res.status(200).json({ email: text ;}),
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}'
import { authenticate_request } from '@/utils / auth';'
import { generate_text } from '@/utils / ai';
;
export default async /**;
 * handler - Function description;
 */
<<<<<<< HEAD
function handler() { return null; }
    return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error })) {}
  $2;
}'
import { Star } from 'lucide-react';
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error })) {}
  $2;
=======
function handler() {
  const method = (req.method || 'POST').toUpperCase ();
  if (
    return res.status (405).json ({ error: 'Method not allowed' ;})) {
  $2
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error ;})) {
  $2
}
export default async /**
 * handler - Function description
 */
function handler() {
  const method = (req.method || 'POST').toUpperCase (),
  if (return res.status (405).json ({ error: 'Method not allowed' ;})) {
  $2
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error ;})) {
  $2
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  const prompt =;'`
    `Draft a professional, friendly job offer email.\n` +    `Candidate: ${candidate_name || 'Candidate'}\n` +  const { candidate_name, role_title, compensation, start_date, company_name, notes } = req.body || {}`
  const prompt = `Draft a professional, friendly job offer email.\n` +;'`
    `Candidate: ${candidate_name || 'Candidate'}\n` +;'`
    `Role: ${role_title || 'Software Engineer'}\n` +;'`
    `Compensation: ${compensation || 'Competitive'}\n` +;'`
    `Start Date: ${start_date || 'TBD'}\n` +;'`
    `Company: ${company_name || 'Your Company'}\n` +;'`
    `Notes: ${notes || ''}\n` +;`
    `Include signature and next steps.`;
;
  const text = await generate_text (
    prompt,'
    'You are a recruiting ops specialist with excellent writing skills.');'
  return res.status (200).json ({ email: text });  const text = await generate_text (prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status (200).json ({ email: text });
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
=======
  const prompt =;
    `Draft a professional, friendly job offer email.\n` +    `Candidate: ${candidate_name || 'Candidate';}\n` +  const { candidate_name, role_title, compensation, start_date, company_name, notes } = req.body || {}
  const prompt = `Draft a professional, friendly job offer email.\n` +;
    `Candidate: ${candidate_name || 'Candidate';}\n` +;
    `Role: ${role_title || 'Software Engineer';}\n` +;
    `Compensation: ${compensation || 'Competitive';}\n` +;
    `Start Date: ${start_date || 'TBD';}\n` +;
    `Company: ${company_name || 'Your Company';}\n` +;
    `Notes: ${notes || '';}\n` +;
    `Include signature and next steps.`;
;
  const text = await generate_text (
    prompt,
    'You are a recruiting ops specialist with excellent writing skills.');
  return res.status (200).json ({ email: text ;});  const text = await generate_text (prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status (200).json ({ email: text ;});
    return res.status(405).json({ error: 'Method not allowed' ;});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const method = null;
  return res.status(200).json({ email: text ;})
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
