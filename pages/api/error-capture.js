/**
 * Next.js API Route for Console Error Capture
 * 
 * This endpoint receives console error reports from the automation system
 * and stores them for analysis and fixing in Cursor chats.
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed. Use POST to submit error reports.' 
    });
  }

  try {
    const errorReport = req.body;

    // Validate the error report structure
    if (!errorReport || typeof errorReport !== 'object') {
      return res.status(400).json({ 
        error: 'Invalid error report format' 
      });
    }

    // Validate required fields
    if (!errorReport.timestamp || !errorReport.errors) {
      return res.status(400).json({ 
        error: 'Missing required fields: timestamp and errors' 
      });
    }

    // Add server-side metadata
    const enrichedReport = {
      ...errorReport,
      receivedAt: new Date().toISOString(),
      serverTimestamp: Date.now(),
      userAgent: req.headers['user-agent'] || 'unknown',
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown',
      referer: req.headers.referer || 'unknown'
    };

    // Log the error report for debugging
    console.log('📊 Received error report:', {
      timestamp: enrichedReport.timestamp,
      totalErrors: enrichedReport.errors?.length || 0,
      url: enrichedReport.url,
      userAgent: enrichedReport.userAgent
    });

    // Store the error report (you can implement your own storage logic here)
    await storeErrorReport(enrichedReport);

    // Generate a summary for immediate response
    const summary = generateErrorSummary(enrichedReport);

    // Return success response with summary
    return res.status(200).json({
      success: true,
      message: 'Error report received successfully',
      reportId: enrichedReport.receivedAt,
      summary,
      receivedAt: enrichedReport.receivedAt
    });

  } catch (error) {
    console.error('❌ Error processing error report:', error);
    
    return res.status(500).json({
      error: 'Internal server error while processing error report',
      message: error.message
    });
  }
}

/**
 * Store the error report (implement your own storage logic)
 * This could be:
 * - Database storage (MongoDB, PostgreSQL, etc.)
 * - File system storage
 * - Cloud storage (AWS S3, Google Cloud Storage, etc.)
 * - Log aggregation service (Loggly, Papertrail, etc.)
 */
async function storeErrorReport(report) {
  try {
    // For now, we'll just log to console and could save to a file
    // In production, implement proper storage
    
    console.log('💾 Storing error report:', {
      id: report.receivedAt,
      totalErrors: report.errors?.length || 0,
      url: report.url
    });

    // Example: Save to a JSON file (for development)
    if (process.env.NODE_ENV === 'development') {
      const fs = require('fs');
      const path = require('path');
      
      const reportsDir = path.join(process.cwd(), 'reports');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
      }
      
      const filename = `error-report-${Date.now()}.json`;
      const filepath = path.join(reportsDir, filename);
      
      fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
      console.log(`📁 Error report saved to: ${filepath}`);
    }

    // TODO: Implement proper storage solution
    // Example with a database:
    // await db.errorReports.create(report);
    
    // Example with cloud storage:
    // await cloudStorage.upload('error-reports', report);
    
    return true;
  } catch (error) {
    console.error('❌ Failed to store error report:', error);
    throw error;
  }
}

/**
 * Generate a summary of the error report for immediate response
 */
function generateErrorSummary(report) {
  if (!report.errors || report.errors.length === 0) {
    return {
      status: 'clean',
      message: 'No errors reported',
      totalErrors: 0
    };
  }

  // Group errors by type
  const errorsByType = report.errors.reduce((acc, error) => {
    const type = error.type || 'unknown';
    if (!acc[type]) acc[type] = 0;
    acc[type]++;
    return acc;
  }, {});

  // Find most common error type
  const mostCommonError = Object.entries(errorsByType)
    .sort(([,a], [,b]) => b - a)[0];

  // Determine severity level
  let severity = 'low';
  if (report.errors.length > 50) severity = 'high';
  else if (report.errors.length > 20) severity = 'medium';

  // Check for critical error types
  const criticalTypes = ['unhandled.error', 'unhandled.rejection', 'network.fetch.error'];
  const hasCriticalErrors = report.errors.some(error => 
    criticalTypes.includes(error.type)
  );

  if (hasCriticalErrors) {
    severity = 'critical';
  }

  return {
    status: severity === 'critical' ? 'critical' : 'has-errors',
    severity,
    totalErrors: report.errors.length,
    errorTypes: Object.keys(errorsByType).length,
    mostCommonError: mostCommonError ? {
      type: mostCommonError[0],
      count: mostCommonError[1]
    } : null,
    hasCriticalErrors,
    url: report.url,
    timestamp: report.timestamp
  };
}

/**
 * Optional: Add rate limiting to prevent abuse
 */
function isRateLimited(req) {
  // Implement rate limiting logic here
  // Example: Allow max 10 reports per IP per minute
  
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const now = Date.now();
  
  // This is a simple in-memory rate limiter
  // In production, use Redis or a proper rate limiting service
  
  if (!global.rateLimitMap) {
    global.rateLimitMap = new Map();
  }
  
  const clientKey = `rate_limit:${clientIP}`;
  const clientData = global.rateLimitMap.get(clientKey);
  
  if (!clientData) {
    global.rateLimitMap.set(clientKey, {
      count: 1,
      resetTime: now + 60000 // 1 minute
    });
    return false;
  }
  
  // Reset if time has passed
  if (now > clientData.resetTime) {
    global.rateLimitMap.set(clientKey, {
      count: 1,
      resetTime: now + 60000
    });
    return false;
  }
  
  // Check if limit exceeded
  if (clientData.count >= 10) {
    return true;
  }
  
  // Increment count
  clientData.count++;
  return false;
}

// Clean up old rate limit entries periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    if (global.rateLimitMap) {
      const now = Date.now();
      for (const [key, data] of global.rateLimitMap.entries()) {
        if (now > data.resetTime) {
          global.rateLimitMap.delete(key);
        }
      }
    }
  }, 60000); // Clean up every minute
}
