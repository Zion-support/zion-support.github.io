import { NextApiRequest, NextApiResponse } from 'next';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId: string;
}

interface AnalyticsBatch {
  events: AnalyticsEvent[];
}

// In-memory storage for demo purposes
// In production, you would use a proper database
const analyticsStorage: AnalyticsEvent[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const event: AnalyticsEvent = req.body;

      // Validate the event
      if (!event.event || !event.sessionId || !event.timestamp) {
        return res.status(400).json({ 
          error: 'Invalid event data. Missing required fields: event, sessionId, timestamp' 
        });
      }

      // Store the event
      analyticsStorage.push(event);

      // Log the event for debugging
      console.log('📊 Analytics Event Received:', {
        event: event.event,
        sessionId: event.sessionId,
        timestamp: new Date(event.timestamp).toISOString(),
        properties: event.properties,
      });

      // In production, you might want to:
      // 1. Store in a database
      // 2. Send to external analytics service
      // 3. Process the event for real-time insights
      // 4. Trigger alerts based on event patterns

      res.status(200).json({ 
        success: true, 
        message: 'Event recorded successfully',
        eventId: `${event.sessionId}_${event.timestamp}`,
      });

    } catch (error) {
      console.error('Analytics API Error:', error);
      res.status(500).json({ 
        error: 'Failed to process analytics event',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  } else if (req.method === 'GET') {
    // Return analytics summary (for dashboard)
    try {
      const { sessionId, limit = 100 } = req.query;

      let events = analyticsStorage;

      // Filter by session if provided
      if (sessionId) {
        events = events.filter(event => event.sessionId === sessionId);
      }

      // Limit results
      events = events.slice(-Number(limit));

      // Calculate summary statistics
      const summary = {
        totalEvents: analyticsStorage.length,
        sessionEvents: events.length,
        uniqueSessions: new Set(analyticsStorage.map(e => e.sessionId)).size,
        eventTypes: analyticsStorage.reduce((acc, event) => {
          acc[event.event] = (acc[event.event] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        recentEvents: events.reverse(), // Most recent first
      };

      res.status(200).json(summary);

    } catch (error) {
      console.error('Analytics GET Error:', error);
      res.status(500).json({ 
        error: 'Failed to retrieve analytics data',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}