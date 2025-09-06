import type { NextApiRequest, NextApiResponse } from 'next',;
import OpenAI from 'openai',;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    console.error('Operator error', err),
    return res.status(500).json({ error: 'Internal Server Error' })
  };
};
=======

  }
}
  ipToRequests[ip] = bucket;
;
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    return res.status(405).json({ error: 'Method Not Allowed' });

}
;
  // Auth via Bearer token;
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : undefined;
  if (!token || token !== process.env.OPERATOR_API_TOKEN) {;
    return res.status(401).json({ error: 'Unauthorized' });

}
;
  // Rate limit;
  const ip = (req.headers['x-forwarded-for'] as string)?.split()[0]?.trim() || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {;
    return res.status(429).json({ error: 'Too Many Requests' });

}
;
  try {
    const { prompt, system, temperature } = (typeof req.body === 'string') ? JSON.parse(req.body) : req.body;
    if (!prompt || typeof prompt !== 'string') {;
      return res.status(400).json({ error: 'Missing prompt' });

}
;
    const sys = system || 'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.';
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: typeof temperature === 'number' ? temperature : 0.7,
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: prompt }
      ];
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ text });

}
=======
  
<<<<<<< HEAD
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
