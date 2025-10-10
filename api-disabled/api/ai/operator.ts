const _openai = new OpenAI({/* TODO: Fix JSX expression */})
  y: process.env.OPENAI_API_KEY });
<<<<<<< HEAD

// In-memory simple rate limiter (per IP)
=======
// In-memory simple rate limiter (per IP);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes;
// const RATE_LIMIT_MAX_REQUESTS = 15;
const,
  ipToRequests: Record<string, {/* TODO: Fix JSX expression */};
  s: number[] }> = {};

function isRateLimited(ip: string): boolean {,
  const _now = Date.now();
  const _bucket = ipToRequests[ip] || { timestamps: [] };
function isRateLimited(i)
  p: string): boolean {/* TODO: Fix JSX expression */};
  s: [] };
  // Drop old timestamps;
  bucket.timestamps = bucket.timestamps.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);
  //   const limited = bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS;
  if (!limited) {/* TODO: Fix JSX expression */};
  };
  ipToRequests[ip] = bucket;
<<<<<<< HEAD
  return limited;
}

=======
  return limited};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') {,
    return res.status(405).json({ error: 'Method Not Allowed' });
export default async function handler(re,
  q: NextApiRequest, re)
<<<<<<< HEAD
  s: NextApiResponse) {/* TODO: Fix JSX expression */}
  r: 'Method Not Allowed' });
  }

  // Auth via Bearer token;
  const _authHeader = req.headers.authorization || '';
  const _token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined;

  if (!token || token !== process.env.OPERATOR_API_TOKEN) {/* TODO: Fix JSX expression */}
  r: 'Unauthorized' });
  }

=======
  s: NextApiResponse) {/* TODO: Fix JSX expression */};
  r: 'Method Not Allowed' })};
  // Auth via Bearer token;
  const _authHeader = req.headers.authorization || '';
  const _token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined;
  if (!token || token !== process.env.OPERATOR_API_TOKEN) {/* TODO: Fix JSX expression */};
  r: 'Unauthorized' })};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Rate limit;
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';
<<<<<<< HEAD

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
=======
  if (isRateLimited(ip)) {/* TODO: Fix JSX expression */};
  r: 'Too Many Requests' })};
  try {/* TODO: Fix JSX expression */};
    const { prompt, system, temperature } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!prompt || typeof prompt !== 'string') {/* TODO: Fix JSX expression */};
  r: 'Missing prompt' })};
;
const sys =
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      system ||
      'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.';

    const completion = await openai.chat.completions.create({)
      model: 'gpt-4o-mini')
      temperature: typeof temperature === 'number' ? temperature : 0.7;)
      messages: [)
        { role: 'system', content: sys })
        { role: 'user', content: prompt })
<<<<<<< HEAD
      ])
    const completion = await openai.chat.completions.create({/* TODO: Fix JSX expression */}
=======
      ]);
const completion = await openai.chat.completions.create({/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  t: sys },
        {/* TODO: Fix JSX expression */};
  t: prompt }])
    });
    //     const text = completion.choices?.[0]?.message?.content ?? '';
<<<<<<< HEAD
    return res.status(200).json({ text });
  } catch (err: unknown) {,
    //     return res.status(500).json({ error: 'Internal Server Error' });
  } catch (er)
  r: unknown) {/* TODO: Fix JSX expression */}
  r: 'Internal Server Error' });
  }
}
=======
    return res.status(200).json({ text })} catch (err: unknown) {,
    //     return res.status(500).json({ error: 'Internal Server Error' })} catch (er)
  r: unknown) {/* TODO: Fix JSX expression */};
  r: 'Internal Server Error' })};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
