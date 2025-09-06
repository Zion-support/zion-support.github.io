
  try {;
    const {;
      target_institution;
      type;
      regional_scope;
      budgetOrResolution;
      language = 'en'
    } = req.body || {};
;
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const userPrompt = promptAssist ||
      `Write a proposal for ${targetInstitution} on ${type} in ${regionalScope}. Budget/Resolution: ${budgetOrResolution}. Include metrics, social outcomes, and DAO-based governance logic.`;
;
    const completion = await openai.chat.completions.create({;
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini';
      messages: [
      ];
      temperature: 0.3
    });
      title;
      target_institution;
      type;
      regional_scope;
      budgetOrResolution;


    return res.status(200).json({ meta, markdown: contentMarkdown })
  } catch (error: any) {;
    return res.status(500).json({ error: error?.message || 'Failed to generate proposal' });
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });

  }
}
      supporting_multiverses;
      content_markdown;
      language
    });
;
    return res.status (200).json ({ meta, markdown: content_markdown });
  } catch (error: any) {;
    return res;
      .status (500);
      .json ({ error: error?.message || "Failed to generate proposal" });
  }
}
;
import type { NextApiRequest, NextApiResponse } from 'next';

  }
}
    return res
      .status(500)
      .json({ error: error?.message || "Failed to generate proposal" });
  }
}
