import type { NextApiRequest, NextApiResponse } from 'next';

import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();

  if (method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { candidateName, jobTitle, companyName, offerDetails } = req.body || {};

  const prompt =
    `Generate a professional offer email for a candidate.\n` +
    `- Candidate: ${candidateName || 'Candidate'}\n` +
    `- Position: ${jobTitle || 'Software Engineer'}\n` +
    `- Company: ${companyName || 'Our Company'}\n` +
    `- Details: ${offerDetails || 'Competitive package'}\n` +
    `Include: Congratulations, role details, compensation, start date, next steps.`;

  const text = await generateText(
    prompt,
    'You are an HR professional writing offer emails.'
  );

  return res.status(200).json({ email: text });
}