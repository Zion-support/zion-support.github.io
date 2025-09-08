
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export type AnalyzeRequestBody = any;
}`;



import OpenAI from 'openai';
export type AnalyzeRequestBody = {};
  operatorPrompt: string;
  context?: Record<string, unknown>
}
export type AnalyzeResponse = {}
  analysis: string';
  role: 'system', content: system;







  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method not allowed' });  }
  const { operatorPrompt, context } = (req && req.body || {}) as AnalyzeRequestBody;
  if (!operatorPrompt || typeof operatorPrompt !== 'string') {
    return res && res.status(400).json({ error: 'operatorPrompt is required' });  }    return res && res.status(405).json({ error: 'Method not allowed' })
  }
  const { operatorPrompt, context } = (req && req.body || {}) as AnalyzeRequestBody;
  if (!operatorPrompt || typeof operatorPrompt !== 'string') {

    return res && res.status(400).json({ error: 'operatorPrompt is required' });    return res && res.status(400).json({ error: 'operatorPrompt is required' })

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse<AnalyzeResponse | { error: string }    />
) {
}
return res.status(200).json({ analysis: fallback,}
});





const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
  messages: [
{ role: 'system',}
  content: system,}
},
        { role: 'user',}
  content: user,}
},

      ],
      temperature: 0.3,
      max_tokens: 300,
    });


const analysis =


      ],
      temperature: 0 && 0.3,
      max_tokens: 300,
    });



;
    const analysis =;

      completion.choices?.[0]?.message?.content?.trim () ||;
      'No analysis generated.';

    return res.status (200).json ({ analysis })} catch (error: any) {console.error ('Analyze API error', error?.message || error)return res.status (500).json ({ error: 'Failed to generate analysis' },
}

const analysis = completion.choices?.[0]?.message?.content?.trim () || 'No analysis generated.';

    return res.status (200).json ({ analysis });
  } catch (error: any) {
    console.error ('Analyze API error', error?.message || error);}
    return res.status (500).json ({ error: 'Failed to generate analysis',}
});
}


}

