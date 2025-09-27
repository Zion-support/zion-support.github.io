import type { NextApiRequest, NextApiResponse } from 'next';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'resource' | 'user' | 'custom';
  metadata?: Record<string, any>;
}

interface PerformanceReport {
  sessionId: string;
  userId: string;
  timestamp: number;
  metrics: PerformanceMetric[];
  summary: {
    averageLoadTime: number;
    slowestResources: Array<{ name: string; duration: number }>;
    userInteractions: number;
    errors: number;
    recommendations: string[];
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const report: PerformanceReport = req.body;

    // Validate required fields
    if (!report.sessionId || !report.timestamp || !report.metrics) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log performance metrics (in production, send to analytics service)
    console.log('Performance Report:', {
      sessionId: report.sessionId,
      userId: report.userId,
      timestamp: report.timestamp,
      metricsCount: report.metrics.length,
      summary: report.summary
    });

    // Analyze performance metrics
    const analysis = analyzePerformance(report);

    // In a real application, you would:
    // 1. Store in time-series database (InfluxDB, TimescaleDB)
    // 2. Send to analytics service (Google Analytics, Mixpanel)
    // 3. Generate alerts for performance degradation
    // 4. Create performance dashboards

    res.status(200).json({
      success: true,
      message: 'Performance report received',
      analysis
    });

  } catch (error) {
    console.error('Failed to process performance report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

function analyzePerformance(report: PerformanceReport): any {
  const { summary, metrics } = report;

  const analysis = {
    performanceScore: calculatePerformanceScore(summary),
    bottlenecks: identifyBottlenecks(metrics),
    improvements: generateImprovements(summary, metrics),
    alerts: generateAlerts(summary, metrics)
  };

  return analysis;
}

function calculatePerformanceScore(summary: PerformanceReport['summary']): number {
  let score = 100;

  // Deduct points for slow load times
  if (summary.averageLoadTime > 3000) score -= 20;
  else if (summary.averageLoadTime > 2000) score -= 10;

  // Deduct points for slow resources
  if (summary.slowestResources.length > 0) {
    const slowestResource = summary.slowestResources[0];
    if (slowestResource.duration > 2000) score -= 15;
    else if (slowestResource.duration > 1000) score -= 10;
  }

  // Deduct points for errors
  score -= summary.errors * 5;

  return Math.max(0, score);
}

function identifyBottlenecks(metrics: PerformanceMetric[]): string[] {
  const bottlenecks: string[] = [];

  const resourceMetrics = metrics.filter(m => m.category === 'resource');
  const slowResources = resourceMetrics.filter(m => m.value > 1000);
  
  if (slowResources.length > 0) {
    bottlenecks.push('Slow resource loading detected');
  }

  const longTasks = metrics.filter(m => m.name === 'longTask');
  if (longTasks.length > 3) {
    bottlenecks.push('Multiple long tasks affecting performance');
  }

  const memoryMetrics = metrics.filter(m => m.name === 'memoryUsed');
  if (memoryMetrics.length > 0) {
    const latestMemory = memoryMetrics[memoryMetrics.length - 1];
    if (latestMemory.metadata?.percentage > 80) {
      bottlenecks.push('High memory usage detected');
    }
  }

  return bottlenecks;
}

function generateImprovements(summary: PerformanceReport['summary'], metrics: PerformanceMetric[]): string[] {
  const improvements: string[] = [];

  if (summary.averageLoadTime > 2000) {
    improvements.push('Optimize page load time - consider code splitting and lazy loading');
  }

  if (summary.slowestResources.length > 0) {
    const slowestResource = summary.slowestResources[0];
    if (slowestResource.duration > 1000) {
      improvements.push(`Optimize resource: ${slowestResource.name}`);
    }
  }

  const imageMetrics = metrics.filter(m => m.metadata?.type === 'image');
  if (imageMetrics.length > 0) {
    improvements.push('Consider image optimization and WebP format');
  }

  const scriptMetrics = metrics.filter(m => m.metadata?.type === 'script');
  if (scriptMetrics.length > 0) {
    improvements.push('Consider JavaScript bundling and minification');
  }

  return improvements;
}

function generateAlerts(summary: PerformanceReport['summary'], metrics: PerformanceMetric[]): string[] {
  const alerts: string[] = [];

  if (summary.averageLoadTime > 5000) {
    alerts.push('CRITICAL: Page load time exceeds 5 seconds');
  }

  if (summary.errors > 5) {
    alerts.push('HIGH: Multiple errors detected in session');
  }

  const memoryMetrics = metrics.filter(m => m.name === 'memoryUsed');
  if (memoryMetrics.length > 0) {
    const latestMemory = memoryMetrics[memoryMetrics.length - 1];
    if (latestMemory.metadata?.percentage > 90) {
      alerts.push('HIGH: Memory usage critically high');
    }
  }

  return alerts;
}