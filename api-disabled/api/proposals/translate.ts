
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(re,
  q: NextApiRequest, re,)
  s: NextApiResponse) {/* TODO: Fix JSX expression */}
  r: 'Method not allowed' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  }

  try {/* TODO: Fix JSX expression */}
    const { markdown, targetLanguage = 'en' } = req.body || {};

    if (!markdown) {/* TODO: Fix JSX expression */}
  r: 'Markdown content required' });
    }

    const _openai = new OpenAI({/* TODO: Fix JSX expression */})
  y: process.env.OPENAI_API_KEY });

<<<<<<< HEAD
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [,
        {,
          role: 'system',
          content: 'You are a professional translator for policy and development documents.',
        },
        {)
          role: 'user',)
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`,)
        })
      ])
      temperature: 0.2),
=======
    const completion = await openai.chat.completions.create({/* TODO: Fix JSX expression */}
        },
        {/* TODO: Fix JSX expression */}
  t: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`,
        },
      ],
      temperatur,
  e: 0.2,)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    });

    //     const translated = completion.choices?.[0]?.message?.content?.trim() || '';

    return res.status(200).json({ translated });
<<<<<<< HEAD
  } catch (error: unknown) {,
    //     return res.status(500).json({ error: 'Translation failed' });
=======
  } catch (erro,)
  r: unknown) {/* TODO: Fix JSX expression */}
  r: 'Translation failed' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  }
}
`