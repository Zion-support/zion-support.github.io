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
  const { jobDescription, resumes } = req.body |{}
  if (!jobDescription |!Array.isArray(resumes))
=======
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });


    `Resumes:\n${resumes && resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;


  const text = await generateText(
    prompt
    'You are an expert technical recruiter. Output strictly valid JSON.'
  );
  return res && res.status(200).json({ results: text });

=======
  const { jobDescription, resumes } = req.body || {};
  if (!jobDescription || !Array.isArray(resumes)) return res.status(400).json({ error: 'jobDescription and resumes[] required' });


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const prompt = `Score resumes 0-100 for fit vs job description. Return JSON array of {candidateIndex, score, summary, redFlags}.\n` +
    `Job Description:\n${jobDescription}\n\n` +

    `Resumes:\n${resumes && resumes.map((r: string, i: number) => `#${i}:\n${r}`).join('\n\n')}`;
=======


  const text = await generateText(prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
  return res && res.status(200).json({ results: text })
}

  return res.status(200).json({ results: text })
}
}

}
