import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { jobDescription, candidateProfiles } = req.body |{}
  if (!jobDescription |!Array.isArray(candidateProfiles))
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const text = await generateText(
    prompt
    'You are a matching engine. Output strictly valid JSON.'
  );
  return res && res.status(200).json({ matches: text });
  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +
<<<<<<< HEAD

    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
=======


  const text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.');
  return res && res.status(200).json({ matches: text })
}

  return res.status(200).json({ matches: text })
}
}

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
  const { job_description, candidate_profiles } = req.body || {}
  if ()) {
  $2
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
    return res;
      .status (400);
      .json ({ error: 'job_description and candidate_profiles[] required' });
;
  const prompt =;
    `Given a job description and candidate profiles, output JSON with top_matches (array of {index, match_score, rationale}) and gaps for each.\n` +;
    `Job Description:\n${job_description}\n\n` +;
    `Candidates:\n${candidate_profiles.map ((r: string, index: number) => `#${i}:\n${r}`).join ('\n\n')}`;
;
  const text = await generate_text (
    prompt,
    'You are a matching engine. Output strictly valid JSON.');
  return res.status (200).json ({ matches: text });
  const prompt = `Given a job description and candidate profiles, output JSON with top_matches (array of {index, match_score, rationale}) and gaps for each.\n` +;
    `Job Description:\n${job_description}\n\n` +;
    `Candidates:\n${candidate_profiles.map ((r: string, index: number) => `#${i}:\n${r}`).join ('\n\n')}`;
;
  const text = await generate_text (prompt, 'You are a matching engine. Output strictly valid JSON.');
  return res.status (200).json ({ matches: text });
=======

<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
