import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
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

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { title, level, location, skills, responsibilities } = req.body || {};
<<<<<<< HEAD
  const prompt =
    `Generate a compelling, unbiased job description for a role.\n` +
=======
<<<<<<< HEAD
<<<<<<< HEAD
  const prompt =
    `Generate a compelling, unbiased job description for a role.\n` +
=======
  const prompt = `Generate a compelling, unbiased job description for a role.\n` +
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    `- Title: ${title || 'Software Engineer'}\n` +
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join(', ')}\n` +
    `- Responsibilities: ${(responsibilities || []).join('; ')}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const text = await generateText(
    prompt,
    'You are an expert technical recruiter and compensation analyst.'
  );
<<<<<<< HEAD
  return res.status(200).json({ jobDescription: text });
=======
  return res.status(200).json({ jobDescription: text });
=======
  const prompt = `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title || 'Software Engineer'}\n` +
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;

  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');
  return res.status(200).json({ jobDescription: text })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');
  return res.status(200).json({ jobDescription: text })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
