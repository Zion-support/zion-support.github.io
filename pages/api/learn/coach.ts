          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message ?? 'Coach error' });
  }
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
