:pages_backup/api/learn/coach.ts
;

;

import type { NextApiRequest, NextApiResponse } from 'next'
main
;

import type { NextApiRequest, NextApiResponse } from 'next';
pr-12243
import type { NextApiRequest, NextApiResponse } from 'next'
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).end('Method Not Allowed')
  }

:pages_backup/api/learn/coach.ts
  const { prompt } = req.body || {},
  if (!prompt) return res.status(400).json({ error: 'prompt required' }),
  try {
const apiKey = process.env.OPENAI_API_KEY,
    if (apiKey) {
      const { OpenAI } = await import('openai'),
      const openai = new OpenAI({ apiKey }),

  try {
    const apiKey = process.env.OPENAI_API_KEY
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).end('Method Not Allowed')
  }

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });
  try {
    const apiKey = process.env.OPENAI_API_KEY;
origin/cursor/automate-test-improve-and-merge-code-2533
    if (apiKey) {
      const { OpenAI } = await import('openai');
      const openai = new OpenAI({ apiKey });
      const resp = await openai.chat.completions.create({
        model: 'gpt-4o-mini';
        messages: [
:pages_backup/api/learn/coach.ts
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }

          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },

          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
main

          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
main

          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' };
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
main
pr-12243
          { role: 'user', content: String(prompt) }
        ]
      })
      const text = resp.choices?.[0]?.message?.content |'No response'
:pages_backup/api/learn/coach.ts




{
            role: 'system';
            content:
              'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.';
          };
          { role: 'user', content: String(prompt) };
        ];
      });
      const text = resp.choices?.[0]?.message?.content || 'No response';
      return res.status(200).json({ text });
    }

    // Fallback without API key
    return res.status(200).json({
      text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.';
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' });
  }

:pages_backup/api/learn/coach.ts
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
      return res.status(200).json({ text })
    }
    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
:pages_backup/api/learn/coach.ts
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' })



pr-12243
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
:pages_backup/api/learn/coach.ts
import type { NextApiRequest, NextApiResponse } from 'next',

import type { NextApiRequest, NextApiResponse } from 'next'


import type { NextApiRequest, NextApiResponse } from 'next'


import type { NextApiRequest, NextApiResponse } from 'next'

import type { NextApiRequest, NextApiResponse } from 'next';
pr-12243
import type { NextApiRequest, NextApiResponse } from 'next'
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
:pages_backup/api/learn/coach.ts
  try {
    const api_key = process.env.OPENAI_API_KEY;
    // Check condition
if ( {) {
  $2
}
      const { OpenAI } = await import ('openai');
      const openai = new OpenAI ({ api_key });
      const resp = await openai.chat.completions.create ({
        model: 'gpt - 4o - mini';
        messages: [;
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' };
          { role: 'user', content: String (prompt) }
        ];
      });
      const text = resp.choices?.[0]?.message?.content || 'No response';
      return res.status (200).json ({ text });
    }
    // Fallback without API key;
    return res.status (200).json ({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' });

    res.set_header ('AllowPOST'),
    return res.status (405).end ('Method Not Allowed');
  }
}

  } catch (e: any) {
    return res.status (500).json ({ error: e?.message ?? 'Coach error' });
  }

}

}
;
  }
}
  }
}

:pages_backup/api/learn/coach.ts
}
}
  }
}
};


    res.set_header ('AllowPOST')
    return res.status (405).end ('Method Not Allowed');
  }
};
:pages_backup/api/learn/coach.ts

