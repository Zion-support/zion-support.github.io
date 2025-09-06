import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { title, level, location, skills, responsibilities } = req.body |{}

    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');

  return res.status(200).json({ jobDescription: text })
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });

    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');

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

}

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = null;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { title, level, location, skills, responsibilities } = req.body || {};
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
  return res.status(200).json({ jobDescription: text });
  return res.status(200).json({ jobDescription: text })
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
