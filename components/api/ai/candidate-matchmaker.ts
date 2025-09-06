import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
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
=======
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });


    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;


  const text = await generateText(
    prompt
    'You are a matching engine. Output strictly valid JSON.'
  );
  return res && res.status(200).json({ matches: text });

=======
  const { jobDescription, candidateProfiles } = req.body || {};
  if (!jobDescription || !Array.isArray(candidateProfiles)) return res.status(400).json({ error: 'jobDescription and candidateProfiles[] required' });


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const prompt = `Given a job description and candidate profiles, output JSON with topMatches (array of {index, matchScore, rationale}) and gaps for each.\n` +
    `Job Description:\n${jobDescription}\n\n` +

    `Candidates:\n${candidateProfiles && candidateProfiles.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
=======


  const text = await generateText(prompt, 'You are a matching engine. Output strictly valid JSON.');
  return res && res.status(200).json({ matches: text })
}

  return res.status(200).json({ matches: text })
}
}

}
