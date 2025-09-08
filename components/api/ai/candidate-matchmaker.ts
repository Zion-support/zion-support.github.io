import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';
<<<<<<< HEAD



  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +

    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;





=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase($2);
  if (method !== 'POST') return res.status(405).json($2);
  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  const { jobDescription, candidateProfiles } = req.body || {},
  if (!jobDescription || !Array.isArray(candidateProfiles)) return res.status(400).json($2);
  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +
    `Candidates:\n${candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`,

  const text = await generateText($2);
  return res.status(200).json({ matches: text})
}
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

