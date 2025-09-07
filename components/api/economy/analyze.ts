import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type AnalyzeRequestBody = any;
const user = [ `Operator Prompt: $ {
  operatorPrompt
}`;
context ? `Context: $ {
  JSON.stringify (context)
}` : undefined] .filter (Boolean) .join ('\n');
const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: system
}
export type AnalyzeResponse = {
  analysis: string;};import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type AnalyzeRequestBody = {
  operatorPrompt: string
  context?: Record<string, unknown>
}
  analysis: string
}
};

export type AnalyzeResponse = {
  analysis: string;
};
}

    return res.status(200).json({ analysis })
  } catch (error: any) {'
    console.error('Analyze API error', error?.message |error)
    return res && res.status(500).json({ error: 'Failed to generate analysis' })
  }'
    const analysis = completion && completion.choices?.[0]?.message?.content?.trim() || 'No analysis generated.'
    return res && res.status(200).json({ analysis })
  } catch (error: any) {'
    console && console.error('Analyze API error', error?.message || error);'
    return res && res.status(500).json({ error: 'Failed to generate analysis' })
  }
    const analysis =
      completion.choices?.[0]?.message?.content?.trim () ||;'

    return res.status(500).json({ error: 'Failed to generate analysis' })
}
}
