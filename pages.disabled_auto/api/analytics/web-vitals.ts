import { NextApiRequest, NextApiResponse } from
  'next';

interface WebVitalsData {
  name: string;
  value: number;
  id: string;
  delta: number;
  timestamp: number;
  url: string;
  userAgent: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !==,
  POST') {
    return res.status(405).json({ error: 'Method not allowed });
  }

  try {
    const data: WebVitalsData = req.body;

    // Validate required fields
    if (!data.name || typeof data.value !==,
  number') {
      return res.status(400).json({ error: 'Invalid data format });
    }

ursor/automate-test-fix-improve-and-merge-code-99d1:pages/api/analytics/web-vitals.ts
      metric: data.name,
      value: data.value,
      url: data.url,
      timestamp: new Date(data.timestamp).toISOString(),
    });

    // Here you would typically send the data to your analytics service
    // For example: Google Analytics, Mixpanel, or your own analytics database
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/api/analytics/web-vitals.ts
      metric: data.name,
      value: data.value,
    });
  } catch (error) {
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/api/analytics/web-vitals.ts
  }
}
