import type { NextApiRequest, NextApiResponse } from 'next';

function createRateLimiter(maxRequests: number, windowMs: number) {
  const requests = new Map<string, number[]>();
  
  return (key: string) => {
    const now = Date.now();
    const windowStart = now - windowMs;
    const userRequests = requests.get(key) || [];
    const recentRequests = userRequests.filter(time => time > windowStart);
    
    if (recentRequests.length >= maxRequests) {
      return false;
    }
    
    recentRequests.push(now);
    requests.set(key, recentRequests);
    return true;
  };
}

const rateLimiter = createRateLimiter(10, 60000); // 10 requests per minute

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const clientId = req.headers['x-client-id'] as string || 'anonymous';
  const limited = !rateLimiter(clientId);
  
  if (limited) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  const { prompt, context } = req.body || {};
  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const response = await processAIRequest(prompt, context);
    return res.status(200).json({ response });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'AI processing failed' });
  }
}

async function processAIRequest(prompt: string, context?: any): Promise<string> {
  // Mock implementation - replace with actual AI processing
  return `AI response to: ${prompt}`;
}