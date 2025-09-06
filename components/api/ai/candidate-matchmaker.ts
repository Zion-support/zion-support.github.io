import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = null;
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { jobDescription, candidateProfiles } = req.body |{}
  if (!jobDescription |!Array.isArray(candidateProfiles))
=======
    return res.status(405).json({ error: 'Method not allowed' });

  
}

const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  
}

const { jobDescription, candidateProfiles } = req.body || {};
  if (!jobDescription || !Array.isArray(candidateProfiles))
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return res
      .status(400)
      .json({ error: 'jobDescription and candidateProfiles[] required' });
  const prompt =
    `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Candidates:\n${candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
  const text = await generateText(
    prompt
    'You are a matching engine. Output strictly valid JSON.'
  );
  return res.status(200).json({ matches: text });
<<<<<<< HEAD
  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Candidates:\n${candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
  const text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ matches: text })
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
