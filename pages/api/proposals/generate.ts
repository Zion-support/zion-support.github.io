<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { OpenAI } from 'openai',
import { createProposal } from '../../../utils/data/proposals',
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`,

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  try {
    const {
      targetInstitution,
      type,
      regionalScope,
      budgetOrResolution,
      supportingMultiverses = [],
      title = 'Zion DAO Proposal',
      promptAssist,
      language = 'en'} = req.body || {},

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
    const userPrompt = promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`,

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt }],
      temperature: 0.3}),

    const contentMarkdown = completion.choices?.[0]?.message?.content || '# Proposal Draft\n\nTBD',

    const meta = createProposal({
      title,
      targetInstitution,
      type,
      regionalScope,
      budgetOrResolution,
      supportingMultiverses,
      contentMarkdown,
      language}),

    return res.status(200).json({ meta, markdown: contentMarkdown })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

const _SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  try {_const {
      targetInstitution, _type, _regionalScope, _budgetOrResolution, _supportingMultiverses = [], _title = 'Zion DAO Proposal', _promptAssist, _language = 'en'} = req.body || {};

    const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY});
    const _userPrompt = promptAssist ||
      `Write a proposal for ${_targetInstitution} on ${_type} in ${_regionalScope}. Budget/Resolution: ${_budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;

    const _completion = await openai.chat.completions.create({_model: process.env.OPENAI_MODEL || 'gpt-4o-mini', _messages: [
        { role: 'system', _content: SYSTEM_PROMPT},
        {_role: 'user', _content: userPrompt}],
      temperature: 0.3});

    const _contentMarkdown = completion.choices?.[0]?.message?.content || '# Proposal Draft\n\nTBD';

    const _meta = createProposal({_title, _targetInstitution, _type, _regionalScope, _budgetOrResolution, _supportingMultiverses, _contentMarkdown, _language});

    return res.status(200).json({_meta, _markdown: contentMarkdown});
  } catch (error: unknown) {_return res.status(500).json({ error: error?.message || 'Failed to generate proposal'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}