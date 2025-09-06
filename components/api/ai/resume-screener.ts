import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { jobDescription, resumes } = req.body || {};
<<<<<<< HEAD
<<<<<<< HEAD
  if (!jobDescription || !Array.isArray(resumes))
    return res
      .status(400)
      .json({ error: 'jobDescription and resumes[] required' });
=======
  if (!jobDescription || !Array.isArray(resumes)) return res.status(400).json({ error: 'jobDescription and resumes[] required' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const prompt = `Score resumes 0-100 for fit vs job description. Return JSON array of {candidateIndex, score, summary, redFlags}.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Resumes:\n${resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;

<<<<<<< HEAD
  const text = await generateText(
    prompt,
    'You are an expert technical recruiter. Output strictly valid JSON.'
  );
  return res.status(200).json({ results: text });
=======
  if (!jobDescription || !Array.isArray(resumes)) return res.status(400).json({ error: 'jobDescription and resumes[] required' });

  const prompt = `Score resumes 0-100 for fit vs job description. Return JSON array of {candidateIndex, score, summary, redFlags}.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Resumes:\n${resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;

  const text = await generateText(prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
  return res.status(200).json({ results: text })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const text = await generateText(prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
  return res.status(200).json({ results: text })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
