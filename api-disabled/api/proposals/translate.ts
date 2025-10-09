
export default async function handler(re,
  q: NextApiRequest, re,)
  s: NextApiResponse) {/* TODO: Fix JSX expression */}
  r: 'Method not allowed' });
  }

  try {/* TODO: Fix JSX expression */}
    const { markdown, targetLanguage = 'en' } = req.body || {};

    if (!markdown) {/* TODO: Fix JSX expression */}
  r: 'Markdown content required' });
    }

    const _openai = new OpenAI({/* TODO: Fix JSX expression */})
  y: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({/* TODO: Fix JSX expression */}
        },
        {/* TODO: Fix JSX expression */}
  t: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`,
        },
      ],
      temperatur,
  e: 0.2,)
    });

    //     const translated = completion.choices?.[0]?.message?.content?.trim() || '';

    return res.status(200).json({ translated });
  } catch (erro,)
  r: unknown) {/* TODO: Fix JSX expression */}
  r: 'Translation failed' });
  }
}
`