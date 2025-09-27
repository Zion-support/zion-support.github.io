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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { events }: AnalyticsBatch = req.body;

      // Validate the batch
      if (!Array.isArray(events) || events.length === 0) {
        return res.status(400).json({ 
          error: 'Invalid batch data. Expected non-empty array of events.' 
        });
      }

      // Validate each event
      for (const event of events) {
        if (!event.event || !event.sessionId || !event.timestamp) {
          return res.status(400).json({ 
            error: 'Invalid event in batch. Missing required fields: event, sessionId, timestamp' 
          });
        }
      }

      // Store all events
      analyticsStorage.push(...events);

      // Log the batch for debugging
      console.log('📊 Analytics Batch Received:', {
        count: events.length,
        events: events.map(e => ({
          event: e.event,
          sessionId: e.sessionId,
          timestamp: new Date(e.timestamp).toISOString(),
        })),
      });

      // In production, you might want to:
      // 1. Batch insert into database for efficiency
      // 2. Process events asynchronously
      // 3. Aggregate data for real-time dashboards
      // 4. Trigger alerts based on batch patterns

      res.status(200).json({ 
        success: true, 
        message: `Batch of ${events.length} events recorded successfully`,
        processedCount: events.length,
      });

    } catch (error) {
      console.error('Analytics Batch API Error:', error);
      res.status(500).json({ 
        error: 'Failed to process analytics batch',
        details: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}