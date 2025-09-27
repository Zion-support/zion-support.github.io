// API endpoint for security events
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { event, details, severity, timestamp } = req.body;
    
    // Log security event
    console.warn('Security Event:', {
      event,
      details,
      severity,
      timestamp: timestamp || new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Security event reporting failed:', err);
    res.status(500).json({ error: "Internal server error" });
  }
}