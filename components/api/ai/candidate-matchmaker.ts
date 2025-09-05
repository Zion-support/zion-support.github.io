<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { authenticateRequest } from '@/utils/auth',
import { generateText } from '@/utils/ai',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase(),
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  const auth = authenticateRequest(req, false),
  if (!auth.ok) return res.status(401).json({ error: auth.error }),

  const { jobDescription, candidateProfiles } = req.body || {},
  if (!jobDescription || !Array.isArray(candidateProfiles)) return res.status(400).json({ error: 'jobDescription and candidateProfiles[] required' }),

  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Candidates:\n${candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`,

  const text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.'),
  return res.status(200).json({ matches: text })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const _auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({_error: auth.error});

  const {_jobDescription, _candidateProfiles} = req.body || {};
  if (!jobDescription || !Array.isArray(candidateProfiles)) return res.status(400).json({_error: 'jobDescription and candidateProfiles[] required'});

  const _prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {_index, _matchScore, _rationale}) and gaps for each.\n` +
    `Job Description:\n${_jobDescription}\n\n` +
    `Candidates:\n${_candidateProfiles.map(_(r: string, _i: number) => `#${i}:\n${_r}`).join('\n\n')}`;

  const _text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.');
  return res.status(200).json({_matches: text});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}