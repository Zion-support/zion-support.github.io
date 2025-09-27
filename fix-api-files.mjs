#!/usr/bin/env node

import fs from 'fs';

// Fix image-optimization.ts
function fixImageOptimization() {
  const content = `import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url, w, h, q, f } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    // Basic image optimization logic
    const optimizedUrl = url + '?w=' + (w || 800) + '&h=' + (h || 600) + '&q=' + (q || 75) + '&f=' + (f || 'webp');
    
    // For now, just return the original image
    // In a production environment, you would implement actual image optimization here
    // using libraries like Sharp or ImageMagick
    
    return res.status(200).json({
      optimizedUrl,
      originalUrl: url,
      width: w,
      height: h,
      quality: q,
      format: f
    });
  } catch (error) {
    console.error('Image optimization error:', error);
    return res.status(500).json({ error: 'Image optimization failed' });
  }
}
`;

  fs.writeFileSync('pages/api/image-optimization.ts', content);
  console.log('Fixed pages/api/image-optimization.ts');
}

// Fix security-events.ts
function fixSecurityEvents() {
  const content = `// API endpoint for security events
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const securityEvent = req.body;

    // Validate the request
    if (!securityEvent || !securityEvent.type) {
      return res.status(400).json({ error: 'Invalid security event data' });
    }

    // Log security event
    console.warn('Security event reported:', securityEvent);

    // Here you would typically send to your security monitoring service
    // e.g., SIEM, security dashboard, etc.

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 50));

    return res.status(200).json({
      success: true,
      eventId: \`sec_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Security API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
`;

  fs.writeFileSync('pages/api/security-events.ts', content);
  console.log('Fixed pages/api/security-events.ts');
}

// Run fixes
console.log('Fixing API files...');
fixImageOptimization();
fixSecurityEvents();
console.log('API files fixed!');