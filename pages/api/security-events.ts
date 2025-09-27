import { NextApiRequest, NextApiResponse } from 'next';

interface SecurityEvent {
  type: 'login_attempt' | 'failed_login' | 'suspicious_activity' | 'data_access' | 'system_breach';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  ipAddress: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, any>;
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
    const securityEvent: SecurityEvent = req.body;

    // Validate required fields
    if (!securityEvent.type || !securityEvent.severity || !securityEvent.description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log the security event (in production, you'd send to a security monitoring service)
    console.warn('Security Event:', {
      type: securityEvent.type,
      severity: securityEvent.severity,
      description: securityEvent.description,
      ipAddress: securityEvent.ipAddress,
      userAgent: securityEvent.userAgent,
      userId: securityEvent.userId,
      sessionId: securityEvent.sessionId,
      metadata: securityEvent.metadata,
      timestamp: securityEvent.timestamp
    });

    // Here you would typically:
    // 1. Store in security monitoring system
    // 2. Send alerts for high/critical severity events
    // 3. Update security metrics and dashboards
    // 4. Trigger automated responses (IP blocking, account lockout, etc.)

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 50));

    res.status(200).json({
      success: true,
      eventId: `sec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Security API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}