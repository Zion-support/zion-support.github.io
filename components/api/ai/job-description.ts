import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method |'POST').toUpperCase();
=======
) {;
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const method = (req.method || 'POST').toUpperCase();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { title, level, location, skills, responsibilities } = req.body |{}
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

  return res.status(200).json({ jobDescription: text })
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
