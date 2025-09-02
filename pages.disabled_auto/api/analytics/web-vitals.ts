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

<<<<<<< HEAD:pages.disabled_auto/api/analytics/web-vitals.ts
    // Log the web vitals data (in production, you,
  d send this to your analytics service)
    console.log('Web Vitals: , {
=======
    // Log the web vitals data (in production, you&apos;d send this to your analytics service)'
    console.log('Web Vitals: ', {
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1:pages/api/analytics/web-vitals.ts
      metric: data.name,
      value: data.value,
      url: data.url,
      timestamp: new Date(data.timestamp).toISOString(),
    });

    // Here you would typically send the data to your analytics service
    // For example: Google Analytics, Mixpanel, or your own analytics database
<<<<<<< HEAD:pages.disabled_auto/api/analytics/web-vitals.ts
    
    // For now, we'll just acknowledge receipt
    res.status(200).json({ 
      success: true, 
      message:
  'Web vitals data received',
=======

    // For now, we&apos;ll just acknowledge receipt'
    res.status(200).json({
      success: true,
      message: 'Web vitals data received',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1:pages/api/analytics/web-vitals.ts
      metric: data.name,
      value: data.value,
    });
  } catch (error) {
<<<<<<< HEAD:pages.disabled_auto/api/analytics/web-vitals.ts
    console.error(
  'Error processing web vitals:,
  , error);
    res.status(500).json({ error: 'Internal server error });
=======
    console.error('Error processing web vitals: ', error);
    res.status(500).json({ error: 'Internal server error' });
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1:pages/api/analytics/web-vitals.ts
  }
}
