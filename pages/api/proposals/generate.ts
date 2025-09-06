import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
import { createProposal } from "../../../utils/data/proposals";
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  try {
    const {
      target_institution,
      type,
      regional_scope,
      budgetOrResolution,
      supporting_multiverses = [],
      title = "Zion DAO Proposal",
      language = "en",
    } = req && req.body || {};
    const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const userPrompt =
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Failed to generate proposal" });
  }
}
=======
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
    const meta = createProposal({
=======
;
    const content_markdown =;
      completion.choices?.[0]?.message?.content || "# Proposal Draft\n\nTBD";
;
    const meta = create_proposal ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      title,
      target_institution,
      type,
      regional_scope,
      budgetOrResolution,
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      supporting_multiverses,
      content_markdown,
      language,
    });
;
    return res.status (200).json ({ meta, markdown: content_markdown });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: error?.message || "Failed to generate proposal" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
