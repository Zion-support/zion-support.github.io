

          { role: 'user', content: String(prompt) }
        ]
      })
      const text = resp.choices?.[0]?.message?.content |'No response'

      return res.status(200).json({ text })
    }
    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
=======
import type { NextApiRequest, NextApiResponse } from 'next',
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}

    res.set_header ('AllowPOST'),
    return res.status (405).end ('Method Not Allowed');
  }
  const { prompt } = req.body || {},
  if (return res.status (400).json ({ error: 'prompt required' }), ) {
  $2
}
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

=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
