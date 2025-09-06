import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const SYSTEM_PROMPT = `You are the Zion Assistant for the Zion AI Marketplace. Your job is to:
<<<<<<< HEAD

  }
  try {
    const { messages } = req && req.body as {
      messages?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    }


    const completion = await openai && openai.chat.completions && completions.create({
      model: 'gpt-4o',
      temperature: 0 && 0.3,
      messages: preparedMessages,
    });
    const message = completion && completion.choices?.[0]?.message || {
      role: 'assistant',
      content: 'Sorry, I could not respond.',
    };
    return res && res.status(200).json({ message });
  } catch (error: any) {
console.error('Assistant API error:', error?.message |error);
    return res.status(500).json({ error: 'Assistant request failed' });
  }    return res.status(500).json({ error: 'Assistant request failed' })
=======
=======
<<<<<<< HEAD
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const SYSTEM_PROMPT = `You are the Zion Assistant for the Zion AI Marketplace. Your job is to:
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
- Greet users warmly and concisely
- Answer FAQs accurately
- Guide users through discovering features and how to get started
- Ask brief clarifying questions when needed but minimize back-and-forth
- Keep answers succinct, scannable, and actionable
Context about Zion AI Marketplace:
- Zion is a marketplace to discover, evaluate, and integrate AI models, agents, and services
- Users can browse categories, view product pages, compare features, and connect via APIs
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
}

  }
  };
}
  }
<<<<<<< HEAD
<<<<<<< HEAD
}


=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
  try {
    const { messages } = req.body as { messages?: Array<{ role: 'user' | 'assistant' | 'system', content: string }> };
    const preparedMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT };
      ...(messages || []).slice(-20)
    ];
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', temperature: 0.3,
      messages: preparedMessages
    });
    const message = completion.choices?.[0]?.message || { role: 'assistant', content: 'Sorry, I could not respond.' };
    return res.status(200).json({ message })
  } catch (error: any) {
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console && console.error('Assistant API error:', error?.message || error);
    return res && res.status(500).json({ error: 'Assistant request failed' });
  }    return res && res.status(500).json({ error: 'Assistant request failed' })

  };
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;
    const prepared_messages = [;
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...(messages || []).slice (-20),
    ];
;
    const completion = await openai.chat.completions.create ({
      model: 'gpt - 4o',
      temperature: 0.3,
      messages: prepared_messages,
    });
;
    const message = completion.choices?.[0]?.message || {
      role: 'assistant',
      content: 'Sorry, I could not respond.',
    }
    return res.status (200).json ({ message });
  } catch (error: any) {
console.error ('Assistant API error:', error?.message || error);
    return res.status (500).json ({ error: 'Assistant request failed' });
  }    return res.status (500).json ({ error: 'Assistant request failed' });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
const openai = null;
    return res.status(500).json({ error: 'Assistant request failed' })
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    const { messages } = req.body as {
      messages?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    }
    const preparedMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT }
      ...(messages |[]).slice(-20)
    ];
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      temperature: 0.3,
      messages: preparedMessages,
    });

    const message = completion.choices?.[0]?.message || {
      role: 'assistant',
      content: 'Sorry, I could not respond.',
    };
    return res.status(200).json({ message });
  } catch (error: any) {
    console.error('Assistant API error:', error?.message || error);
    return res.status(500).json({ error: 'Assistant request failed' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
