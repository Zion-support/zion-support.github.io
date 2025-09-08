import React from 'react';
import Head from 'next/head';

interface SystemHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  services: {
    database: boolean;
    cache: boolean;
    api: boolean;
  };
  metrics: {
    responseTime: number;
    memoryUsage: number;
    cacheHitRate: number;
    activeConnections: number;
  };
  uptime: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const startTime = Date.now();
    
    // Check database health;
    const dbHealth = await dbManager.healthCheck();
    
    // Check cache health
    const cacheStats = {
      api: apiCache.getStats(),
      user: userCache.getStats(),
      static: staticCache.getStats()
    };
    
    // Get performance metrics
    const avgResponseTime = 100; // Mock value
    const memoryUsage = process.memoryUsage();
    
    // Calculate overall health
    const services = {
      database: dbHealth,
      cache: cacheStats.api.active > 0,
      api: avgResponseTime < 1000 // Less than 1 second average response time
    };
    const healthyServices = Object.values(services).filter(Boolean).length;
    const totalServices = Object.keys(services).length;
    
    let status: 'healthy' | 'degraded' | 'unhealthy';
    if (healthyServices === totalServices) {
      status = 'healthy';
    } else if (healthyServices >= totalServices / 2) {
      status = 'degraded';
    } else {
      status = 'unhealthy';
    }
    
    const health: SystemHealth = {
      status,
      timestamp: new Date().toISOString(),
      services,
      metrics: {
        responseTime: avgResponseTime,
        memoryUsage: memoryUsage.heapUsed,
        cacheHitRate: 0, // This would need to be tracked separately
        activeConnections: 0 // This would need to be tracked separately
      },
      uptime: process.uptime()
    };
    
    const responseTime = Date.now() - startTime;
    
    res.status(200).json({
      ...health,
      responseTime
    });
  } catch (error) {
    console.error('Health check failed:', error);
    
    res.status(500).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Health check failed',
      services: {
        database: false,
        cache: false,
        api: false
      },
      metrics: {
        responseTime: 0,
        memoryUsage: 0,
        cacheHitRate: 0,
        activeConnections: 0
      },
      uptime: process.uptime()
    });
  }
}