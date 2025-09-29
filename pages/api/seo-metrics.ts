import type { NextApiRequest, NextApiResponse } from 'next';

interface SEOMetricsRequest {
  metric: string;
  value: number;
  timestamp: number;
  url?: string;
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
    const data: SEOMetricsRequest = req.body;

    // Validate the request data
    if (!data.metric || typeof data.value !== 'number') {
      return res.status(400).json({ error: 'Invalid SEO metrics data' });
    }

    // Process the SEO metrics
    const processedMetrics = {
      metric: data.metric,
      value: data.value,
      timestamp: data.timestamp,
      url: data.url || req.headers.referer || 'unknown',
      userAgent: data.userAgent || req.headers['user-agent'] || 'unknown'
    };

    // Log the SEO metrics (in production, this would be stored in a database)
    console.log('SEO metrics received:', processedMetrics);

    // In a real application, you would:
    // 1. Store the metrics in a database
    // 2. Update SEO performance tracking
    // 3. Generate SEO reports
    // 4. Trigger alerts for poor performance
    // 5. Update SEO recommendations
    // 6. Track Core Web Vitals trends

    // For now, we'll just acknowledge receipt
    res.status(200).json({
      success: true,
      message: 'SEO metrics processed successfully',
      metric: processedMetrics.metric,
      value: processedMetrics.value,
      timestamp: processedMetrics.timestamp
    });

  } catch (error) {
    console.error('Error processing SEO metrics:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process SEO metrics'
    });
  }
}