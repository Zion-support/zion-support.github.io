<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from '[^']*';
import { createProposal } from '[^']*';
const SYSTEM_PROMPT = null;
    return res.status(200).json({ meta, markdown: contentMarkdown })
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
import { createProposal } from "../../../utils/data/proposals";
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';

const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  try {
    const {
      targetInstitution
      type
      regionalScope
      budgetOrResolution
      supportingMultiverses = []
      title = "Zion DAO Proposal"
      promptAssist
      language = "en"
    } = req.body |{}
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt =
      promptAssist |
=======
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
      promptAssist ||
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL |"gpt-4o-mini"
      messages: [
<<<<<<< HEAD
        { role: "system", content: SYSTEM_PROMPT }
        { role: "user", content: userPrompt }
      ]
      temperature: 0.3
=======
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.3,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    });
    const contentMarkdown =
      completion.choices?.[0]?.message?.content |"# Proposal Draft\n\nTBD";
    const meta = createProposal({
      title
      targetInstitution
      type
      regionalScope
      budgetOrResolution
      supportingMultiverses
      contentMarkdown
      language
    });
    return res.status(200).json({ meta, markdown: contentMarkdown });
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (error: any) {
=======
 
} catch (error: any) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return res
      .status(500)
      .json({ error: error?.message |"Failed to generate proposal" });
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
