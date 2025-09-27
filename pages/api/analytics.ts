// API endpoint for analytics events
export default async function handler(req: any, res: any) {
 {
      console.log(`Event: ${event.category} - ${event.action}`, {
        label: event.label,
        value: event.value,
        timestamp: new Date(event.timestamp).toISOString(),
        sessionId: event.sessionId,
        userId: event.userId,
        url: event.url
      })});

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 100));

    res.status(200).json({
      success: true,
      processed: events.length,
      timestamp: Date.now()
    })} catch (error) {
    console.error("Analytics API error:", error);
    res.status(500).json({ error: "Internal server error" })}
}

