<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { authenticateRequest } from '@/utils/auth',;
import { generateText } from '@/utils/ai',;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  const method = (req.method || 'POST').toUpperCase(),;
  if (method !== 'POST') return res.status(405).json({ error:'Method not allowed' }),;
;
  const auth = authenticateRequest(req, false),;
  if (!auth.ok) return res.status(401).json({ error:auth.error }),;
;
  const { jobDescription, candidateProfiles } = req.body || {},;
  if (!jobDescription || !Array.isArray(candidateProfiles)) return res.status(400).json({ error:'jobDescription and candidateProfiles[] required' }),;
;
  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +;
    `Job Description:\n${jobDescription}\n\n` +;
    `Candidates:\n${candidateProfiles.map((r:string, i:number) => `#${i} \n${r}`).join('\n\n')}`,;
;
  const text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.'),;
  return res.status(200).json({ matches:text }),;
}
=======
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
  return res.status(200).json({ matches: text })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
