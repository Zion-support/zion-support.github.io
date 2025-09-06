<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next',;
=======
import type { NextApiRequest, NextApiResponse } from 'next',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).end('Method Not Allowed')
  }

  const { prompt } = req.body || {},
  if (!prompt) return res.status(400).json({ error: 'prompt required' }),

  try {
    const apiKey = process.env.OPENAI_API_KEY,
    if (apiKey) {
      const { OpenAI } = await import('openai'),
      const openai = new OpenAI({ apiKey }),
      const resp = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
<<<<<<< HEAD
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' }
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          { role: 'user', content: String(prompt) }
        ]
      })
      const text = resp.choices?.[0]?.message?.content |'No response'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      return res.status(200).json({ text })
    }
    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
<<<<<<< HEAD
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' })
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

    res.set_header ('AllowPOST'),
    return res.status (405).end ('Method Not Allowed');
  }
<<<<<<< HEAD

}

=======
}
;
<<<<<<< HEAD
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
  }
}
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
}
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD
  }
}
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
