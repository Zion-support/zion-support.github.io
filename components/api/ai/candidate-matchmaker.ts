import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method |'POST').toUpperCase();
) {;
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { jobDescription, candidateProfiles } = req.body |{}
  if (!jobDescription |!Array.isArray(candidateProfiles))
<<<<<<< HEAD
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
=======
=======
<<<<<<< HEAD
) {'
  const method = (req.method |'POST').toUpperCase();'
  if (method !== 'POST')'
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler() { return null; }
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { jobDescription, candidateProfiles } = req.body |{}
  if (!jobDescription |!Array.isArray(candidateProfiles))
  try {'
  const method = (req && req.method || 'POST').toUpperCase();'
  if (method !== 'POST')'
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  try {';
  const method = (req && req.method || 'POST').toUpperCase();'
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { jobDescription, candidateProfiles } = req.body || {};
  if (!jobDescription || !Array.isArray(candidateProfiles)) {
    return res
      .status(400)
      .json({ error: 'jobDescription and candidateProfiles[] required' });
  }

  const prompt =
    `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job: ${jobDescription}\n` +
    `Candidates: ${JSON.stringify(candidateProfiles)}`;

  try {
    const result = await generateText(prompt, { maxTokens: 2000 });
    res.status(200).json(JSON.parse(result));
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}