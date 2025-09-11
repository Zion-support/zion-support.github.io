import type { NextApiRequest, NextApiResponse } from 'next';


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const text = await generateText(
    prompt
    'You are a matching engine. Output strictly valid JSON.'
  );
  return res && res.status(200).json({ matches: text });
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { jobDescription, candidateProfiles } = req.body || {};
  if (!jobDescription || !Array.isArray(candidateProfiles)) return res.status(400).json({ error: 'jobDescription and candidateProfiles[] required' });


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +

    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.');
  return res && res.status(200).json({ matches: text })
}


<<<<<<< HEAD
<<<<<<< HEAD
  const { jobDescription, candidateProfiles } = req.body || {};
  if (!jobDescription || !Array.isArray(candidateProfiles)) return res.status(400).json({ error: 'jobDescription and candidateProfiles[] required' });
  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
  const text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.');
  return res && res.status(200).json({ matches: text })
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD



  return res.status(200).json({ matches: text })
}
}

}
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return res.status(200).json({ matches: text })
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
