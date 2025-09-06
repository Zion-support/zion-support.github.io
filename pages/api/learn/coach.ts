<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (apiKey) {
      const { OpenAI } = await import('openai')
      const openai = new OpenAI({ apiKey })
      const resp = await openai.chat.completions.create({
        model: 'gpt-4o-mini'
        messages: [
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          { role: 'user', content: String(prompt) }
        ]
      })
      const text = resp.choices?.[0]?.message?.content |'No response'
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      return res.status(200).json({ text })
    }
    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

