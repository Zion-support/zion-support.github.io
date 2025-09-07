import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

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
  const { title, level, location, skills, responsibilities } = req.body |{}
  return res && res.status(200).json({ jobDescription: text });    `- Title: ${title || 'Software Engineer'}\n` +
  const { title, level, location, skills, responsibilities } = req.body || {};
  const prompt = `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title || 'Software Engineer'}\n` +
=======
  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { title, level, location, skills, responsibilities } = req.body |{}
<<<<<<< HEAD
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const method = (req && req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });


  return res && res.status(200).json({ jobDescription: text });    `- Title: ${title || 'Software Engineer'}\n` +

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
<<<<<<< HEAD
`Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const prompt =
    `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title |'Software Engineer'}\n` +
    `- Level: ${level |'Mid'}\n` +
    `- Location: ${location |'Remote'}\n` +
    `- Key skills: ${(skills |[]).join(', ')}\n` +
    `- Responsibilities: ${(responsibilities |[]).join('; ')}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(
    prompt
    'You are an expert technical recruiter and compensation analyst.'
  );
  return res.status(200).json({ jobDescription: text });    `- Title: ${title |'Software Engineer'}\n` +
    `- Level: ${level |'Mid'}\n` +
    `- Location: ${location |'Remote'}\n` +
    `- Key skills: ${(skills |[]).join()}\n` +
    `- Responsibilities: ${(responsibilities |[]).join()}\n` +
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');
<<<<<<< HEAD
  return res && res.status(200).json({ jobDescription: text })
}

  return res && res.status(200).json({ jobDescription: text })
}
=======

  return res && res.status(200).json({ jobDescription: text })
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { authenticate_request } from '@/utils / auth';
import { generate_text } from '@/utils / ai';
;
export default async /**
 * handler - Function description
 */
function handler() {
  const method = (req.method || 'POST').toUpperCase ();
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}export default async /**
 * handler - Function description
 */
function handler() {
  const method = (req.method || 'POST').toUpperCase ();
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error })) {}
  $2;
}
  const { title, level, location, skills, responsibilities } = req.body || {}
  const prompt =;`
    `Generate a compelling, unbiased job description for a role.\n` +;'`
    `- Title: ${title || 'Software Engineer'}\n` +;'`
    `- Level: ${level || 'Mid'}\n` +;'`
    `- Location: ${location || 'Remote'}\n` +;'`
    `- Key skills: ${(skills || []).join (', ')}\n` +;'`
    `- Responsibilities: ${(responsibilities || []).join ('; ')}\n` +;`
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
;
  const text = await generate_text (
    prompt,'
    'You are an expert technical recruiter and compensation analyst.');'`
  return res.status (200).json ({ job_description: text });    `- Title: ${title || 'Software Engineer'}\n` +;'`
    `- Level: ${level || 'Mid'}\n` +;'`
    `- Location: ${location || 'Remote'}\n` +;`
    `- Key skills: ${(skills || []).join ()}\n` +;`
    `- Responsibilities: ${(responsibilities || []).join ()}\n` +;`
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
;'
  const text = await generate_text (prompt, 'You are an expert technical recruiter and compensation analyst.');
  return res.status (200).json ({ job_description: text });
<<<<<<< HEAD
=======


}
<<<<<<< HEAD



  return res.status(200).json({ jobDescription: text })
}
}

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { title, level, location, skills, responsibilities } = req.body || {};

  const prompt =
    `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title || 'Software Engineer'}\n` +
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join(', ')}\n` +
    `- Responsibilities: ${(responsibilities || []).join('; ')}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;

<<<<<<< HEAD
  const text = await generateText(
    prompt,
    'You are an expert technical recruiter and compensation analyst.'
  );
  
  return res.status(200).json({ jobDescription: text });
}
=======
<<<<<<< HEAD
  const text = await generateText($2);
  return res.status(200).json({ jobDescription: text})
}
=======
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
  const method = (req.method |'POST').toUpperCase();
  if (method !== 'POST')}
    return res.status(405).json({ error: 'Method not allowed',}
});

const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error,}
});

const { title, level, location, skills, responsibilities } = req.body || {};

const prompt =
    `Generate a compelling, unbiased job description for a role.\n` +
    `- Title: ${title |'Software Engineer'}\n` +
    `- Level: ${level |'Mid'}\n` +
    `- Location: ${location |'Remote,}
}\n` +
    `- Key skills: ${(skills |[]).join(', ')}\n` +
    `- Responsibilities: ${(responsibilities |[]).join('; ')}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;

const text = await generateText(
    prompt;
    'You are an expert technical recruiter and compensation analyst.'
  );
  return res.status(200).json({ jobDescription: text,}
});
  return res.status(200).json({ jobDescription: text }),
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
