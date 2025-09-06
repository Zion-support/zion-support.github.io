
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
import { createProposal } from "../../../utils/data/proposals";
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
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
  try {
    const {
      target_institution,
      type,
      regional_scope,
      budgetOrResolution,
      supporting_multiverses = [],
      title = "Zion DAO Proposal",
      promptAssist,
      language = "en",
    } = req && req.body || {};
    const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
    const userPrompt =
      promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL |"gpt-4o-mini"
      messages: [
        { role: "system", content: SYSTEM_PROMPT }
        { role: "user", content: userPrompt }
      ]
      temperature: 0.3
    });
    const contentMarkdown =
      completion.choices?.[0]?.message?.content |"# Proposal Draft\n\nTBD";
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
    return res.status(200).json({ meta, markdown: contentMarkdown });

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Failed to generate proposal" });
  }
}
<<<<<<< HEAD
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
=======
<<<<<<< HEAD
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {
    const {
      targetInstitution,
    type,
      regionalScope,
    budgetOrResolution,
      supportingMultiverses = [],
      title = 'Zion DAO Proposal',
      promptAssist,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

    const contentMarkdown = completion.choices?.[0]?.message?.content || '# Proposal Draft\n\nTBD';

    const meta = createProposal({
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
      supportingMultiverses,
      contentMarkdown,
      language
    });
    return res && res.status(200).json({ meta, markdown: contentMarkdown });
  } catch (error: any) {
<<<<<<< HEAD
    return res
      .status(500)
      .json({ error: error?.message || "Failed to generate proposal" });
  }
}
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
=======
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' })
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======

import type { NextApiRequest, NextApiResponse } from 'next';

  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
