import type { NextApiRequest, NextApiResponse } from 'next';

interface AnalyticsEvent {
  id: string;
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  properties?: Record<string, any>;
  page?: string;
  referrer?: string;
}

interface UserSession {
  id: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  pageViews: number;
  events: AnalyticsEvent[];
  userAgent: string;
  referrer?: string;
  device: {
    type: 'desktop' | 'mobile' | 'tablet';
    os: string;
    browser: string;
    screen: {
      width: number;
      height: number;
    };
  };
  location?: {
    country: string;
    region: string;
    city: string;
  };
}

interface BatchAnalyticsRequest {
  events: AnalyticsEvent[];
  session: UserSession;
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
    const data: BatchAnalyticsRequest = req.body;

    // Validate the request data
    if (!data.events || !Array.isArray(data.events)) {
      return res.status(400).json({ error: 'Invalid events data' });
    }

    if (!data.session || !data.session.id) {
      return res.status(400).json({ error: 'Invalid session data' });
    }

    // Process the analytics data
    const processedData = {
      sessionId: data.session.id,
      timestamp: data.timestamp,
      eventCount: data.events.length,
      events: data.events.map(event => ({
        id: event.id,
        name: event.name,
        category: event.category,
        action: event.action,
        label: event.label,
        value: event.value,
        timestamp: event.timestamp,
        page: event.page,
        referrer: event.referrer,
        properties: event.properties
      })),
      session: {
        id: data.session.id,
        startTime: data.session.startTime,
        endTime: data.session.endTime,
        duration: data.session.duration,
        pageViews: data.session.pageViews,
        userAgent: data.session.userAgent,
        referrer: data.session.referrer,
        device: data.session.device
      }
    };

    // Log the analytics data (in production, this would be stored in a database)
    console.log('Analytics batch received:', {
      sessionId: processedData.sessionId,
      eventCount: processedData.eventCount,
      timestamp: processedData.timestamp
    });

    // In a real application, you would:
    // 1. Store the events in a database
    // 2. Update session tracking
    // 3. Generate real-time analytics
    // 4. Trigger alerts for significant events
    // 5. Update conversion funnels
    // 6. Generate reports

    // For now, we'll just acknowledge receipt
    res.status(200).json({
      success: true,
      message: 'Analytics batch processed successfully',
      sessionId: processedData.sessionId,
      eventCount: processedData.eventCount,
      timestamp: processedData.timestamp
    });

  } catch (error) {
    console.error('Error processing analytics batch:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process analytics batch'
    });
  }
}