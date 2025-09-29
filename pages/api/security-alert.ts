import type { NextApiRequest, NextApiResponse } from 'next';

interface SecurityEvent {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  userAgent: string;
  url: string;
  metadata?: Record<string, any>;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const securityEvent: SecurityEvent = req.body;

    // Validate required fields
    if (!securityEvent.type || !securityEvent.severity || !securityEvent.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log security event
    console.warn('Security Alert:', {
      type: securityEvent.type,
      severity: securityEvent.severity,
      message: securityEvent.message,
      url: securityEvent.url,
      timestamp: securityEvent.timestamp,
      metadata: securityEvent.metadata
    });

    // Handle different severity levels
    switch (securityEvent.severity) {
      case 'critical':
        handleCriticalAlert(securityEvent);
        break;
      case 'high':
        handleHighAlert(securityEvent);
        break;
      case 'medium':
        handleMediumAlert(securityEvent);
        break;
      case 'low':
        handleLowAlert(securityEvent);
        break;
    }

    // In a real application, you would:
    // 1. Send to security monitoring service
    // 2. Store in security event database
    // 3. Send notifications to security team
    // 4. Trigger automated responses for critical events
    // 5. Update threat intelligence feeds

    res.status(200).json({
      success: true,
      message: 'Security alert processed',
      eventId: `${securityEvent.type}_${securityEvent.timestamp}`
    });

  } catch (error) {
    console.error('Failed to process security alert:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

function handleCriticalAlert(event: SecurityEvent): void {
  // Critical alerts require immediate attention
  console.error('🚨 CRITICAL SECURITY ALERT:', event);
  
  // In production:
  // - Send immediate notifications
  // - Block suspicious IPs
  // - Activate incident response
  // - Log to security SIEM
}

function handleHighAlert(event: SecurityEvent): void {
  // High priority alerts
  console.error('🔴 HIGH SECURITY ALERT:', event);
  
  // In production:
  // - Send notifications to security team
  // - Increase monitoring
  // - Review access logs
}

function handleMediumAlert(event: SecurityEvent): void {
  // Medium priority alerts
  console.warn('🟡 MEDIUM SECURITY ALERT:', event);
  
  // In production:
  // - Log for analysis
  // - Review during security meetings
}

function handleLowAlert(event: SecurityEvent): void {
  // Low priority alerts
  console.log('🟢 LOW SECURITY ALERT:', event);
  
  // In production:
  // - Log for trend analysis
  // - Include in security reports
}