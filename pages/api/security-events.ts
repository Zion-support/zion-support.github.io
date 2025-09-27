import { NextApiRequest, NextApiResponse } from 'next';

interface SecurityEvent {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  timestamp: number;
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
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

    // Log the security event
    console.warn('Security Event:', {
      type: securityEvent.type,
      severity: securityEvent.severity,
      description: securityEvent.description,
      source: securityEvent.source,
      timestamp: new Date(securityEvent.timestamp).toISOString(),
      userId: securityEvent.userId,
      sessionId: securityEvent.sessionId,
      ipAddress: securityEvent.ipAddress,
      userAgent: securityEvent.userAgent
    });

    // In a real application, you would:
    // 1. Send to security monitoring service
    // 2. Store in security event database
    // 3. Trigger alerts for high/critical severity events
    // 4. Update security metrics and dashboards

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 50));

    res.status(200).json({
      success: true,
      eventId: `sec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Security API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}