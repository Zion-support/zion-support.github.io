// API endpoint for security events
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { event, severity, source, details } = req.body;
    
    // Process security event
    console.log("Security event reported:", {
      event,
      severity,
      source,
      details,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      eventId: `sec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Security events API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}