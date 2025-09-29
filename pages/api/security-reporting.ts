import type { NextApiRequest, NextApiResponse } from 'next';

interface SecurityThreat {
  id: string;
  type: 'xss' | 'csrf' | 'injection' | 'data_leak' | 'unauthorized_access' | 'malware' | 'phishing' | 'brute_force';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: number;
  source: string;
  target: string;
  metadata: Record<string, string | number | boolean>;
  blocked: boolean;
  action: 'block' | 'monitor' | 'alert' | 'quarantine';
}

interface SecurityReportingResponse {
  success: boolean;
  message: string;
  threatId?: string;
  action?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SecurityReportingResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const threat: SecurityThreat = req.body;

    // Validate required fields
    if (!threat.id || !threat.type || !threat.severity || !threat.description) {
      return res.status(400).json({
        success: false,
        message: 'Missing required threat fields'
      });
    }

    // Log the security threat
    console.warn('Security Threat Reported:', {
      id: threat.id,
      type: threat.type,
      severity: threat.severity,
      description: threat.description,
      source: threat.source,
      target: threat.target,
      blocked: threat.blocked,
      action: threat.action,
      timestamp: new Date(threat.timestamp).toISOString()
    });

    // In a real application, you would:
    // 1. Store the threat in a security database
    // 2. Send alerts for critical threats
    // 3. Update security metrics
    // 4. Trigger automated responses
    // 5. Integrate with SIEM systems

    // Determine response action based on threat severity
    let responseAction = 'monitor';
    if (threat.severity === 'critical' || threat.severity === 'high') {
      responseAction = 'alert';
    }

    if (threat.blocked) {
      responseAction = 'blocked';
    }

    return res.status(200).json({
      success: true,
      message: 'Security threat reported successfully',
      threatId: threat.id,
      action: responseAction
    });

  } catch (error) {
    console.error('Error processing security threat report:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

// Configure API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};