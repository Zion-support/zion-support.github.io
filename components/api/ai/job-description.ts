import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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

<<<<<<< HEAD
  const auth = authenticateRequest(req, false);
  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });

  const { title, level, location, skills, responsibilities } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
  return res.status(200).json({ jobDescription: text });    `- Title: ${title |'Software Engineer'}\n` +
    `- Level: ${level |'Mid'}\n` +
    `- Location: ${location |'Remote'}\n` +
    `- Key skills: ${(skills |[]).join()}\n` +
    `- Responsibilities: ${(responsibilities |[]).join()}\n` +
=======
  return res && res.status(200).json({ jobDescription: text });    `- Title: ${title || 'Software Engineer'}\n` +
<<<<<<< HEAD
=======
=======
  const { title, level, location, skills, responsibilities } = req.body || {};
  const prompt = `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title || 'Software Engineer'}\n` +
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');
<<<<<<< HEAD

  return res.status(200).json({ jobDescription: text })
}
<<<<<<< HEAD
=======
  return res && res.status(200).json({ jobDescription: text })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
