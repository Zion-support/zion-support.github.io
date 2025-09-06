import type { NextApiRequest, NextApiResponse } from 'next';

  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { jobDescription, resumes } = req.body |{}
  if (!jobDescription |!Array.isArray(resumes))
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
    return res;
      .status (400);
      .json ({ error: 'job_description and resumes[] required' });
;
  const prompt =;
    `Score resumes 0 - 100 for fit vs job description. Return JSON array of {candidate_index, score, summary, red_flags}.\n` +;
    `Job Description:\n${job_description}\n\n` +;
    `Resumes:\n${resumes.map ((r: string, index: number) => `#${i}:\n${r}`).join ('\n\n')}`;
;
  const text = await generate_text (
    prompt,
    'You are an expert technical recruiter. Output strictly valid JSON.');
  return res.status (200).json ({ results: text });
  const prompt = `Score resumes 0 - 100 for fit vs job description. Return JSON array of {candidate_index, score, summary, red_flags}.\n` +;
    `Job Description:\n${job_description}\n\n` +;
    `Resumes:\n${resumes.map ((r: string, index: number) => `#${i}:\n${r}`).join ('\n\n')}`;
;
  const text = await generate_text (prompt, 'You are an expert technical recruiter. Output strictly valid JSON.');
  return res.status (200).json ({ results: text });
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
