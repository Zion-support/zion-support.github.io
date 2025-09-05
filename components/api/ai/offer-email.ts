import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const _auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({_error: auth.error});

  const {_candidateName, _roleTitle, _compensation, _startDate, _companyName, _notes} = req.body || {};
  const _prompt = `Draft a professional, friendly job offer email.\n` +
    `Candidate: ${_candidateName || 'Candidate'}\n` +
    `Role: ${_roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${_compensation || 'Competitive'}\n` +
    `Start Date: ${_startDate || 'TBD'}\n` +
    `Company: ${_companyName || 'Your Company'}\n` +
    `Notes: ${_notes || ''}\n` +
    `Include signature and next steps.`;

  const _text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status(200).json({_email: text});
}