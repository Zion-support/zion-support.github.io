import type { NextApiRequest, NextApiResponse } from 'next';


  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { jobDescription, resumes } = req.body |{}
  if (!jobDescription |!Array.isArray(resumes))
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });


    `Resumes:\n${resumes && resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;


  const text = await generateText(
    prompt
    'You are an expert technical recruiter. Output strictly valid JSON.'
  );
  return res && res.status(200).json({ results: text });

=======
  const { jobDescription, resumes } = req.body || {};
  if (!jobDescription || !Array.isArray(resumes)) return res.status(400).json({ error: 'jobDescription and resumes[] required' });


  const prompt = `Score resumes 0-100 for fit vs job description. Return JSON array of {candidateIndex, score, summary, redFlags}.\n` +
    `Job Description:\n${jobDescription}\n\n` +

    `Resumes:\n${resumes && resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
=======


  const text = await generateText(prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
  return res && res.status(200).json({ results: text })
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
  const { job_description, resumes } = req.body || {}
  if ()) {
  $2
}
    return res;
      .status (400);
      .json ({ error: 'job_description and resumes[] required' });
;
  const prompt =;
    `Score resumes 0 - 100 for fit vs job description. Return JSON array of {candidate_index, score, summary, red_flags}.\n` +;
    `Job Description:\n${job_description}\n\n` +;
    `Resumes:\n${resumes.map ((r: string, index: number) => `#${i}:\n${r}`).join ('\n\n')}`;
;
  const text = await generate_text (
    prompt,
    'You are an expert technical recruiter. Output strictly valid JSON.');
  return res.status (200).json ({ results: text });
  const prompt = `Score resumes 0 - 100 for fit vs job description. Return JSON array of {candidate_index, score, summary, red_flags}.\n` +;
    `Job Description:\n${job_description}\n\n` +;
    `Resumes:\n${resumes.map ((r: string, index: number) => `#${i}:\n${r}`).join ('\n\n')}`;
;
  const text = await generate_text (prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
  return res.status (200).json ({ results: text });


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return res.status(200).json({ results: text })
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
