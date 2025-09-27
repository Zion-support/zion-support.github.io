import { NextApiRequest, NextApiResponse } from 'next';

interface SecurityEvent {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  timestamp: number;
  metadata?: Record<string, any>;
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

    // Log security event (in production, you might want to send to a security monitoring service)
    console.warn('Security Event:', {
      type: securityEvent.type,
      severity: securityEvent.severity,
      description: securityEvent.description,
      source: securityEvent.source,
      timestamp: new Date(securityEvent.timestamp).toISOString(),
      metadata: securityEvent.metadata,
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