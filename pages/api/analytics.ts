import { NextApiRequest, NextApiResponse } from 'next';

interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  userId?: string;
  sessionId?: string;
  timestamp: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const events: AnalyticsEvent[] = req.body.events || [req.body];

    // Validate events
    for (const event of events) {
      if (!event.event || typeof event.event !== 'string') {
        return res.status(400).json({ error: 'Invalid event data' });
      }
    }

    // Here you would typically:
    // 1. Store events in your database
    // 2. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 3. Process for real-time dashboards
    // 4. Generate reports

    res.status(200).json({
      success: true,
      processed: events.length,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Analytics API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}