import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  try {
    const {
      targetInstitution;
      type;
      regionalScope;
      budgetOrResolution;
      supportingMultiverses = [];
      title = 'Zion DAO Proposal';
      promptAssist;
      language = 'en'} = req.body || {};
    const openai = new OpenAI({,
    apiKey: process.env.OPENAI_API_KEY });
    const userPrompt = promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/,
    Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;
    const completion = await openai.chat.completions.create({,
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini';,
    messages: [
        {,
    role: 'system', c,
    ontent: SYSTEM_PROMPT },
        {,
    role: 'user', c,
    ontent: userPrompt }],
      t,
    emperature: 0.3});
    const contentMarkdown = completion.choices?.[0]?.message?.content || '# Proposal Draft\n\nTBD';
    const meta = createProposal({
      title;
      targetInstitution;
      type;
      regionalScope;
      budgetOrResolution;
      supportingMultiverses;
      contentMarkdown;
      language});
    return res.status(200).json({ meta, m,
    arkdown: contentMarkdown })
  } catch (,
    error: any) {
    return res.status(500).json({,
    error: error?.message || 'Failed to generate proposal' })
  }
}