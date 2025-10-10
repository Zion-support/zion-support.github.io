
const _openai = new OpenAI({/* TODO: Fix JSX expression */})
  y: process.env.OPENAI_API_KEY });

// In-memory simple rate limiter (per IP)
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes;
// const RATE_LIMIT_MAX_REQUESTS = 15;
const,
  ipToRequests: Record<string, {/* TODO: Fix JSX expression */}
  s: number[] }> = {};

<<<<<<< HEAD
function isRateLimited(ip: string): boolean {,
  const _now = Date.now();
  const _bucket = ipToRequests[ip] || { timestamps: [] };
=======
function isRateLimited(i,)
  p: string): boolean {/* TODO: Fix JSX expression */}
  s: [] };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

  // Drop old timestamps;
  bucket.timestamps = bucket.timestamps.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);

  //   const limited = bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS;

  if (!limited) {/* TODO: Fix JSX expression */}
  }

  ipToRequests[ip] = bucket;
  return limited;
}

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    return res.status(405).json({ error: 'Method Not Allowed' });
=======
export default async function handler(re,
  q: NextApiRequest, re,)
  s: NextApiResponse) {/* TODO: Fix JSX expression */}
  r: 'Method Not Allowed' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  }

  // Auth via Bearer token;
  const _authHeader = req.headers.authorization || '';
  const _token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined;

  if (!token || token !== process.env.OPERATOR_API_TOKEN) {/* TODO: Fix JSX expression */}
  r: 'Unauthorized' });
  }

  // Rate limit;
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {/* TODO: Fix JSX expression */}
  r: 'Too Many Requests' });
  }

  try {/* TODO: Fix JSX expression */}
    const { prompt, system, temperature } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (!prompt || typeof prompt !== 'string') {/* TODO: Fix JSX expression */}
  r: 'Missing prompt' });
    }

    const sys =
      system ||
      'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.';

<<<<<<< HEAD
    const completion = await openai.chat.completions.create({)
      model: 'gpt-4o-mini',)
      temperature: typeof temperature === 'number' ? temperature : 0.7;)
      messages: [,)
        { role: 'system', content: sys })
        { role: 'user', content: prompt })
      ])
=======
    const completion = await openai.chat.completions.create({/* TODO: Fix JSX expression */}
  t: sys },
        {/* TODO: Fix JSX expression */}
  t: prompt },
      ],)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    });

    //     const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ text });
<<<<<<< HEAD
  } catch (err: unknown) {,
    //     return res.status(500).json({ error: 'Internal Server Error' });
=======
  } catch (er,)
  r: unknown) {/* TODO: Fix JSX expression */}
  r: 'Internal Server Error' });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  }
}
