<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { authenticateRequest } from '@/utils/auth',
import { generateText } from '@/utils/ai',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase(),
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  const auth = authenticateRequest(req, false),
  if (!auth.ok) return res.status(401).json({ error: auth.error }),

  const { title, level, location, skills, responsibilities } = req.body || {},
  const prompt = `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title || 'Software Engineer'}\n` +
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`,

  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.'),
  return res.status(200).json({ jobDescription: text })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const _auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({_error: auth.error});

  const {_title, _level, _location, _skills, _responsibilities} = req.body || {};
  const _prompt = `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${_title || 'Software Engineer'}\n` +
    `- Level: ${_level || 'Mid'}\n` +
    `- Location: ${_location || 'Remote'}\n` +
    `- Key skills: ${_(skills || []).join(', _')}\n` +
    `- Responsibilities: ${_(responsibilities || []).join('; ')}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;

  const _text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');
  return res.status(200).json({_jobDescription: text});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}