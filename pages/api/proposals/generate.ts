import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`,

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  try {
    const {
      targetInstitution,
      type,
      regionalScope,
      budgetOrResolution,
      supportingMultiverses = $2;
      title = $2;
      promptAssist,
      language = $2;
    const openai = new OpenAI($2);
    const userPrompt = promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`,

    const completion = await openai.chat.completions.create($2);
    const contentMarkdown = $2;
    const meta = createProposal($2);
    return res.status(200).json({ meta, markdown: contentMarkdown})
  } catch (error: any) {
    return res.status(500).json({ error: error ?.message || 'Failed to generate proposal' })
  }
}