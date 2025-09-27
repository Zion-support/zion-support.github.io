import { NextApiRequest, NextApiResponse } from 'next';

interface SecurityEvent {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  source: string;
  timestamp: number;
  userId?: string;
  ipAddress?: string;
  userAgent?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const securityEvent: SecurityEvent = req.body;
    
    // Validate required fields
    if (!securityEvent.type || !securityEvent.message) {
      return res.status(400).json({ error: 'Event type and message are required' });
    }

    // Add timestamp if not provided
    if (!securityEvent.timestamp) {
      securityEvent.timestamp = Date.now();
    }

    // Log the security event (in production, you might want to send this to a security monitoring service)
    console.warn('Security Event:', {
      type: securityEvent.type,
      severity: securityEvent.severity,
      message: securityEvent.message,
      source: securityEvent.source,
      timestamp: securityEvent.timestamp,
      userId: securityEvent.userId,
      ipAddress: securityEvent.ipAddress,
      userAgent: securityEvent.userAgent
    });

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