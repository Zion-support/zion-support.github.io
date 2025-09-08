import type { NextApiRequest, NextApiResponse } from 'next';



<<<<<<< HEAD
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
  const text = await generateText(prompt, 'You are an expert technical recruiter and compensation analyst.');


  return res && res.status(200).json({ jobDescription: text })
}


=======
    `- Level: ${level || 'Mid'}\n` +
    `- Location: ${location || 'Remote'}\n` +
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


}


}


=======
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
    `- Key skills: ${(skills || []).join()}\n` +
    `- Responsibilities: ${(responsibilities || []).join()}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`,






=======
    `- Key skills: ${(skills || []).join(', ')}\n` +
    `- Responsibilities: ${(responsibilities || []).join('; ')}\n` +
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;

  const text = await generateText(
    prompt,
    'You are an expert technical recruiter and compensation analyst.'
  );
  
  return res.status(200).json({ jobDescription: text });

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
