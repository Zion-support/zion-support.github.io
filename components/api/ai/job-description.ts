import type { NextApiRequest, NextApiResponse } from 'next';


<<<<<<< HEAD
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { title, level, location, skills, responsibilities } = req.body |{}
=======
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });


  return res && res.status(200).json({ jobDescription: text });    `- Title: ${title || 'Software Engineer'}\n` +

=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method |'POST').toUpperCase();
) {;
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { title, level, location, skills, responsibilities } = req.body |{}
  return res && res.status(200).json({ jobDescription: text });    `- Title: ${title || 'Software Engineer'}\n` +
  const { title, level, location, skills, responsibilities } = req.body || {};
  const prompt = `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title || 'Software Engineer'}\n` +
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');

  return res && res.status(200).json({ jobDescription: text })
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
`Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const prompt =
    `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title |'Software Engineer'}\n` +
    `- Level: ${level |'Mid'}\n` +
    `- Location: ${location |'Remote'}\n` +
    `- Key skills: ${(skills |[]).join(', ')}\n` +
    `- Responsibilities: ${(responsibilities |[]).join('; ')}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(
    prompt
    'You are an expert technical recruiter and compensation analyst.'
  );
  return res.status(200).json({ jobDescription: text });    `- Title: ${title |'Software Engineer'}\n` +
    `- Level: ${level |'Mid'}\n` +
    `- Location: ${location |'Remote'}\n` +
    `- Key skills: ${(skills |[]).join()}\n` +
    `- Responsibilities: ${(responsibilities |[]).join()}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');
  return res && res.status(200).json({ jobDescription: text })
}

  return res && res.status(200).json({ jobDescription: text })
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
}export default async /**
 * handler - Function description
 */
function handler() {
  const method = (req.method || 'POST').toUpperCase ();
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error })) {
  $2
}
  const { title, level, location, skills, responsibilities } = req.body || {}
  const prompt =;
    `Generate a compelling, unbiased job description for a role.\n` +;
    `- Title: ${title || 'Software Engineer'}\n` +;
    `- Level: ${level || 'Mid'}\n` +;
    `- Location: ${location || 'Remote'}\n` +;
    `- Key skills: ${(skills || []).join (', ')}\n` +;
    `- Responsibilities: ${(responsibilities || []).join ('; ')}\n` +;
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
;
  const text = await generate_text (
    prompt,
    'You are an expert technical recruiter and compensation analyst.');
  return res.status (200).json ({ job_description: text });    `- Title: ${title || 'Software Engineer'}\n` +;
    `- Level: ${level || 'Mid'}\n` +;
    `- Location: ${location || 'Remote'}\n` +;
    `- Key skills: ${(skills || []).join ()}\n` +;
    `- Responsibilities: ${(responsibilities || []).join ()}\n` +;
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
;
  const text = await generate_text (prompt, 'You are an expert technical recruiter and compensation analyst.');
  return res.status (200).json ({ job_description: text });
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


}



  return res.status(200).json({ jobDescription: text })
}
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
