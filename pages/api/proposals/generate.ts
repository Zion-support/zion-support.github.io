import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';
<<<<<<< HEAD

const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  try {
    const {
      targetInstitution,
      type,
      regionalScope,
      budgetOrResolution,
      supportingMultiverses = [],
      title = 'Zion DAO Proposal',
      promptAssist,
      language = 'en',
    } = req.body || {};

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt =
      promptAssist ||      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;

=======
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  try {
    const {
      targetInstitution,
    type,
      regionalScope,
    budgetOrResolution,
      supportingMultiverses = [];
      title = 'Zion DAO Proposal';
      promptAssist;
      language = 'en'} = req.body || {};
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt = promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
<<<<<<< HEAD
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.3,
    });

    const contentMarkdown =
      completion.choices?.[0]?.message?.content || '# Proposal Draft\n\nTBD';

    const meta = createProposal({
      title,
      targetInstitution,
      type,
      regionalScope,
      budgetOrResolution,
      supportingMultiverses,
      contentMarkdown,
      language,
    });

    return res.status(200).json({ meta, markdown: contentMarkdown });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || 'Failed to generate proposal' });
  }
=======
        { role: 'user', content: userPrompt }],
      temperature: 0.3}),
    const contentMarkdown = completion.choices?.[0]?.message?.content || '# Proposal Draft\n\nTBD';
    const meta = createProposal({
      title,
    targetInstitution,
      type,
    regionalScope,
      budgetOrResolution,
    supportingMultiverses,
      contentMarkdown;
      language});
    return res.status(200).json({ meta, markdown: contentMarkdown })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
