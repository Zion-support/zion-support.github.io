import { NextApiRequest, NextApiResponse } from 'next';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const event: AnalyticsEvent = req.body;

    // Validate event structure
    if (!event.name || typeof event.name !== 'string') {
      return res.status(400).json({ error: 'Invalid event name' });
    }

    // Log the event (in production, you'd send this to your analytics service)
    console.log('Analytics Event:', {
      name: event.name,
      properties: event.properties,
      timestamp: event.timestamp || Date.now(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    });

    // Here you would typically:
    // 1. Store in database
    // 2. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 3. Process for real-time dashboards

    res.status(200).json({ 
      success: true, 
      message: 'Event tracked successfully',
      eventId: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

  } catch (error) {
    console.error('Analytics API Error:', error);
    res.status(500).json({ 
      error: 'Failed to process analytics event',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}