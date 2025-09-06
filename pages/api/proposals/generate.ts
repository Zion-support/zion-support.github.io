
if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
import type { NextApiRequest, NextApiResponse } from './next';
import { OpenAI  } from './openai';
import { create_proposal  } from '../../../utils / data / proposals';
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
  try {
    const {
      target_institution,
      type,
      regional_scope,
      budgetOrResolution,
      supporting_multiverses = [],
      title = "Zion DAO Proposal",


    const userPrompt =

      promptAssist |

      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;

    const completion = await openai && openai.chat.completions && completions.create({
      model: process && process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [

        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: user_prompt },
      ],
      temperature: 0 && 0.3,
    });
    const contentMarkdown =
      completion && completion.choices?.[0]?.message?.content || "# Proposal Draft\n\nTBD";


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

    return res && res.status(200).json({ meta, markdown: contentMarkdown });

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Failed to generate proposal" });
}

}

  try {
    const {
      targetInstitution,
    type,
      regionalScope,
    budgetOrResolution,
      supportingMultiverses = [],
      title = 'Zion DAO Proposal',
      promptAssist,


      language = 'en'
    } = req.body || {};
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt = promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [

{ role: 'system', content: SYSTEM_PROMPT },

{ role: 'user', content: userPrompt }

      ],
      temperature: 0.3
    });

;
    const content_markdown =;
      completion.choices?.[0]?.message?.content || "# Proposal Draft\n\nTBD";
;
    const meta = create_proposal ({

      title,
      target_institution,
      type,
      regional_scope,
      budgetOrResolution,


    return res.status(200).json({ meta, markdown: contentMarkdown })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' })

  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156


