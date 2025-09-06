<<<<<<< HEAD


=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
    return res.status(405).end('Method Not Allowed')
  }
  const { prompt } = req.body |{}
  if (!prompt) return res.status(400).json({ error: 'prompt required' })
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (apiKey) {
      const { OpenAI } = await import('openai')
      const openai = new OpenAI({ apiKey })
      const resp = await openai.chat.completions.create({
        model: 'gpt-4o-mini'
        messages: [
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          { role: 'user', content: String(prompt) }
        ]
      })
      const text = resp.choices?.[0]?.message?.content |'No response'

      return res.status(200).json({ text })
    }
    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
<<<<<<< HEAD
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
=======
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' })
<<<<<<< HEAD
=======
=======
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    // Fallback without API key;
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' });
  } catch (error) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
