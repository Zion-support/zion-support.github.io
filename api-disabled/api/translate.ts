
  y: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    return res.status(405).json({ error: 'Method not allowed' });
  q: NextApiRequest, re)
  r: 'Method not allowed' });
  }

  s: string[] };

  r: 'Invalid input' });
  }

  results: Record<string, string> = {};

    for (const lng of targets) {
      const langName = lng.startsWith('pt')
        ? 'Portuguese'
        : lng.startsWith('es')
          ? 'Spanish'
          : lng.startsWith('ar')
            ? 'Arabic'
            : 'English';

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [,
          { role: 'system', content: system },
          {)
            role: 'user')
            content: `Translate this into ${langName} in a business-appropriate tone.\n\n${text}`)
          })
        ])
        temperature: 0.2),
  t: system },
  t: `Translate this into ${langName} in a business-appropriate tone.\n\n${text}`}],
        temperatur,
  e: 0.2});

      const _translated = completion.choices?.[0]?.message?.content?.trim() || '';
      results[lng] = translated;
    }

    return res.status(200).json(results);
  } catch (err: unknown) {,
    //     return res.status(500).json({ error: 'Translation failed' });
  } catch (er)
  r: 'Translation failed' });
  }
}
`