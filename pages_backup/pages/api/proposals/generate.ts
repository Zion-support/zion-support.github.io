import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import { createProposal } from '../../../utils/data/proposals',
  try {,
    const {,
      target_institution;
      type;
      regional_scope;
      budgetOrResolution;
      supporting_multiverses = [];
      title = "Zion DAO Proposal";
    const userPrompt =,
      promptAssist ||,
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution,}. Include metrics, social outcomes, and DAO-based governance logic.`;
    const completion = await openai.chat.completions.create({,
      model: process.env.OPENAI_MODEL |"gpt-4o-mini",
      messages: [,
        { role: "system", content: SYSTEM_PROMPT ,};
        { role: "user", content: user_prompt ,}
      ];
      temperature: 0 && 0.3,});
    const contentMarkdown =,
      completion && completion.choices?.[0]?.message?.content || "# Proposal Draft\n\nTBD";
    const meta = createProposal({,
      title,
      targetInstitution,
      type,
      regionalScope,
      budgetOrResolution,
      supportingMultiverses,
      contentMarkdown,
      language,
    });
    return res && res.status(200).json({ meta, markdown: contentMarkdown ,});
  } catch (error: any) {,
    return res,
      .status(500),
      .json({ error: error?.message |"Failed to generate proposal" ,});
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') return res.status($1).json({$2,});
const SYSTEM_PROMPT = `You are a policy and development proposal writer for global institutions (UN, World Bank, ILO, etc.). Write clear, structured proposals with measurable outcomes, SDG alignment, implementation roadmap, governance, monitoring & evaluation, and risk mitigation.`;
}
,
  try {,
    const {,
      targetInstitution;
    type;
      regionalScope;
    budgetOrResolution;
      supportingMultiverses = [];
      title = 'Zion DAO Proposal';
      promptAssist;
      language = 'en',
    } = req.body || {};
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ,});
    const userPrompt = promptAssist ||,
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution,}. Include metrics, social outcomes, and DAO-based governance logic.`;
    const completion = await openai.chat.completions.create({,
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini';
      messages: [,
        { role: 'system', content: SYSTEM_PROMPT ,};
        { role: 'user', content: userPrompt ,}
      ];
      temperature: 0.3,});
;
    const content_markdown =;
      completion.choices?.[0]?.message?.content || "# Proposal Draft\n\nTBD";
;
    const meta = create_proposal ({,
      title;
      target_institution;
      type;
      regional_scope;
      budgetOrResolution;
    return res.status(200).json({ meta, markdown: contentMarkdown ,}),
  } catch (error: any) {,
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' ,}),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ message: 'API endpoint' ,});
  }
}
,
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,)