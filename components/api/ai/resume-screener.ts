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
  const { jobDescription, resumes } = req.body |{}
  if (!jobDescription |!Array.isArray(resumes))
=======
    return res.status(405).json({ error: 'Method not allowed' });

  
}

const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  
}

const { jobDescription, resumes } = req.body || {};
  if (!jobDescription || !Array.isArray(resumes))
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return res
      .status(400)
      .json({ error: 'jobDescription and resumes[] required' });
  const prompt =
    `Score resumes 0-100 for fit vs job description. Return JSON array of {candidateIndex, score, summary, redFlags}.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Resumes:\n${resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
  const text = await generateText(
    prompt
    'You are an expert technical recruiter. Output strictly valid JSON.'
  );
  return res.status(200).json({ results: text });
<<<<<<< HEAD
  const prompt = `Score resumes 0-100 for fit vs job description. Return JSON array of {candidateIndex, score, summary, redFlags}.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Resumes:\n${resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
  const text = await generateText(prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ results: text })
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
