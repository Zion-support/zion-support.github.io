// API endpoint for analytics events
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { events, session } = req.body;

    // Validate the request
    if (!events || !Array.isArray(events)) {
      return res.status(400).json({ error: "Invalid events data" });
    }

    // Process analytics events
    const processedEvents = events.map((event: any) => ({
      ...event,
      timestamp: new Date().toISOString(),
      sessionId: session?.id || 'anonymous',
    }));

    // Here you would typically send to your analytics service
    console.log('Analytics events received:', processedEvents);

    return res.status(200).json({ 
      success: true, 
      processed: processedEvents.length 
    });
  } catch (error) {
    console.error('Analytics API error:', error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
