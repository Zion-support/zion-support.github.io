import type { NextApiRequest, NextApiResponse } from 'next';


  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });
  const { title, level, location, skills, responsibilities } = req.body |{}

}
  const auth = authenticate_request (req, false);
  if (return res.status (401).json ({ error: auth.error })) {
  $2
}
  const { title, level, location, skills, responsibilities } = req.body || {}
  const prompt =;
    `Generate a compelling, unbiased job description for a role.\n` +;
    `- Title: ${title || 'Software Engineer'}\n` +;
    `- Level: ${level || 'Mid'}\n` +;
    `- Location: ${location || 'Remote'}\n` +;
    `- Key skills: ${(skills || []).join (', ')}\n` +;
    `- Responsibilities: ${(responsibilities || []).join ('; ')}\n` +;
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
;
  const text = await generate_text (
    prompt,
    'You are an expert technical recruiter and compensation analyst.');
  return res.status (200).json ({ job_description: text });    `- Title: ${title || 'Software Engineer'}\n` +;
    `- Level: ${level || 'Mid'}\n` +;
    `- Location: ${location || 'Remote'}\n` +;
    `- Key skills: ${(skills || []).join ()}\n` +;
    `- Responsibilities: ${(responsibilities || []).join ()}\n` +;
    `Include sections: About the role, Responsibilities, Requirements, Nice to Have, Compensation, Benefits, EEO statement.`;
;
  const text = await generate_text (prompt, 'You are an expert technical recruiter and compensation analyst.');
  return res.status (200).json ({ job_description: text });


}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
