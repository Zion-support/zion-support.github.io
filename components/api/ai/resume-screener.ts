import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const _auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({_error: auth.error});

  const {_jobDescription, _resumes} = req.body || {};
  if (!jobDescription || !Array.isArray(resumes)) return res.status(400).json({_error: 'jobDescription and resumes[] required'});

  const _prompt = `Score resumes 0-100 for fit vs job description. Return JSON array of {_candidateIndex, _score, _summary, _redFlags}.\n` +
    `Job Description:\n${_jobDescription}\n\n` +
    `Resumes:\n${_resumes.map(_(r: string, _i: number) => `#${i}:\n${_r}`).join('\n\n')}`;

  const _text = await generateText(prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
  return res.status(200).json({_results: text});
}