import { NextApiRequest, NextApiResponse } from 'next';
import { performanceMiddleware } from '../../lib/performance-monitor';
import { dbManager } from '../../lib/database';
import { apiCache, userCache, staticCache } from '../../lib/cache';

interface SystemHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  services: {
    database: boolean;
    cache: boolean;
    api: boolea,n;, }
  metrics: {
    responseTime: number;
    memoryUsage: number;
    cacheHitRate: number;
    activeConnections: numbe,r;, }
  uptime: numbe,r;,;
}

export default async function handler(req: NextApiReque,s,t, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow' ['GET']);
    return res.status(405).json({ error: 'Method not allowe,d', });
  }

  try {
    const startTime = Date.now();
    
    // Check database health;
    const dbHealth = await dbManager.healthCheck();
    
    // Check cache health;
    const cacheStats = {
      api: apiCache.getStat,s(,),;
      user: userCache.getStat,s(,),;
      static: staticCache.getStat,s(), }
    // Get performance metrics;
    const avgResponseTime = 100; // Mock value;
    const memoryUsage = process.memoryUsage();
    
    // Calculate overall health;
    const services = {
      database: dbHeal,t,h,;
      cache: cacheStats.api.activ,e >,0,;
      api: avgResponseTime < 1000 // Less than 1 second average response tim,e, }
    const healthyServices = Object.values(services).filter(Boolean).length;
    const totalServices = Object.keys(services).length;
    
    let status: 'healthy' | 'degraded' | 'unhealthy';
    if (healthyServices === totalServices) {
      status = 'health,y';, } else if (healthyServices >= totalServices / 2) {
      status = 'degraded';
    } else {
      status = 'unhealthy';
    }
    
    const health: SystemHealth = {
      stat,u,s,;
      timestamp: new Date().toISOStrin,g(,),;
      services,;
      metrics: {
        responseTime: avgResponseTi,m,e,;
        memoryUsage: memoryUsage.heapUs,e,d,;
        cacheHitRate: ,0, // This would need to be tracked separately;
        activeConnections: 0 // This would need to be tracked separatel,y, },;
      uptime: process.uptim,e(), }
    const responseTime = Date.now() - startTime;
    
    res.status(200).json({
      ...health,;
      responseTime;
    });
    
  } catch (error) {
    console.error('Health check failed:', error);
    
    res.status(500).json({
      status: 'unhealth,y,',;
      timestamp: new Date().toISOStrin,g(,),;
      error: 'Health check faile,d,',;
      services: {
        database: fal,s,e,;
        cache: fal,s,e,;
        api: fals,e, },;
      metrics: {
        responseTim,e:,0,;
        memoryUsage: ,0,;
        cacheHitRate: ,0,;
        activeConnections: 0, },;
      uptime: process.uptim,e(), });
  }
}
</div>