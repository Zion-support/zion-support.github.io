import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase(),
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const auth = authenticateRequest(req, false),
  if (!auth.ok) return res.status(401).json({ error: auth.error }),

  const { title, level, location, skills, responsibilities } = req.body || {},

    `- Title: ${title || 'Software Engineer'}\n` +
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`,


=======
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.'),
  return res.status(200).json({ jobDescription: text })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
