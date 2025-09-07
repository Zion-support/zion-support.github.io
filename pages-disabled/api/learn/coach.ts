<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next'
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
  }

  const { prompt } = req.body || {}
  if (!prompt) return res.status(400).json({ error: 'prompt required' })

  try {
    const apiKey = process.env.OPENAI_API_KEY
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    if (apiKey) {
      const { OpenAI } = await import('openai');
      const openai = new OpenAI({ apiKey });
      const resp = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
<<<<<<< HEAD
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },
=======
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async function handler() { return null; }
  }

  const { prompt } = req.body || {},'
  if (!prompt) return res.status(400).json({ error: 'prompt required' }),

  try {}
    const apiKey = process.env.OPENAI_API_KEY,
    if (apiKey) {'
      const { OpenAI } = await import('openai'),
      const openai = new OpenAI({ apiKey }),
      const resp = await openai.chat.completions.create({'
        model: 'gpt-4o-mini',
        messages: ['
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          { role: 'user', content: String(prompt) }
        ]
      })'
      const text = resp.choices?.[0]?.message?.content |'No response'
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
{
            role: 'system',
            content:
              'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.',
          },
          { role: 'user', content: String(prompt) },
        ],
      });
      const text = resp.choices?.[0]?.message?.content || 'No response';
      return res.status(200).json({ text });
    }

    // Fallback without API key
    return res.status(200).json({
      text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.',
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' });
  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
=======






>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return res.status(200).json({ text })
    }
    // Fallback without API key'
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next'
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
  try {
    const api_key = process.env.OPENAI_API_KEY,
    // Check condition
if ( {) {
  $2
}
      const { OpenAI } = await import ('openai'),
      const openai = new OpenAI ({ api_key }),
      const resp = await openai.chat.completions.create ({
        model: 'gpt - 4o - mini',
        messages: [;
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },
          { role: 'user', content: String (prompt) }
        ];
      }),
      const text = resp.choices?.[0]?.message?.content || 'No response',
      return res.status (200).json ({ text });
    }
    // Fallback without API key;
    return res.status (200).json ({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' });
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


=======

    res.set_header ('AllowPOST')
    return res.status (405).end ('Method Not Allowed');
  }
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

;
  };
};'
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });'
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {}
';
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}
'
    res.set_header ('AllowPOST'),'
    return res.status (405).end ('Method Not Allowed');
  }
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
