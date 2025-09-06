<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
=======
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals';
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
import { createProposal } from "../../../utils/data/proposals";
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
>>>>>>> main

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  try {
    const {
      target_institution,
      type,
      regional_scope,
      budgetOrResolution,
      supportingMultiverses = [],
      title = "Zion DAO Proposal",
      promptAssist,
      language = "en",
    } = req.body || {};

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      language = 'en'
    } = req.body || {};

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt = promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt }
=======
{ role: 'system', content: SYSTEM_PROMPT },

{ role: 'user', content: userPrompt }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ],
      temperature: 0.3
    });

<<<<<<< HEAD
;
    const content_markdown =;
      completion.choices?.[0]?.message?.content || "# Proposal Draft\n\nTBD";
;
    const meta = create_proposal ({
=======
    const contentMarkdown =
      completion.choices?.[0]?.message?.content || "# Proposal Draft\n\nTBD";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      title,
      target_institution,
      type,
      regional_scope,
      budgetOrResolution,
<<<<<<< HEAD
=======
      supportingMultiverses,
      contentMarkdown,
      language,
    });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    return res.status(200).json({ meta, markdown: contentMarkdown });
  } catch (error: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' })

  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import type { NextApiRequest, NextApiResponse } from 'next';

  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      ],
      temperature: 0.3,
    });
const contentMarkdown = completion.choices?.[0]?.message?.content || '# Proposal Draft\n\nTBD';
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
return res.status(200).json({ meta, markdown: contentMarkdown })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' })

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
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
=======
    return res
      .status(500)
      .json({ error: error?.message || "Failed to generate proposal" });
>>>>>>> main
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
