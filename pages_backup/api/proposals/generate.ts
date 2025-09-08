      target_institution
      type
      regional_scope
      budgetOrResolution

      language = 'en'
    } = req.body || {};

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt = promptAssist ||
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from '[^']*';
import { createProposal } from '[^']*';
const SYSTEM_PROMPT = null;
    return res.status(200).json({ meta, markdown: contentMarkdown })
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
export default async function handler(
  req: NextApiRequest
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
      promptAssist ||
origin/cursor/automate-test-improve-and-merge-code-2533
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini'
      messages: [
      ]
      temperature: 0.3
        { role: 'system', content: SYSTEM_PROMPT },
{ role: 'user', content: userPrompt },
      ],
      temperature: 0.3,
origin/cursor/automate-test-improve-and-merge-code-2533
    });
      title
      target_institution
      type
      regional_scope
      budgetOrResolution
      supportingMultiverses
      contentMarkdown
      language
    });
    return res.status(200).json({ meta, markdown: contentMarkdown });
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' })
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

  }
}
      supporting_multiverses
      content_markdown
      language

    });
;
    return res.status (200).json ({ meta, markdown: content_markdown });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: error?.message || "Failed to generate proposal" });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';

  }
}
    return res
      .status(500)
      .json({ error: error?.message || "Failed to generate proposal" });
  }

}
origin/cursor/automate-test-improve-and-merge-code-2533
