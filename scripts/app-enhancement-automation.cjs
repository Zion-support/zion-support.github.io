#!/usr/bin/env node

/**
 * App Enhancement Automation
 * Comprehensive script to enhance the application with additional features
 */

const fs = require('fs');
const path = require('path');

class AppEnhancementAutomation {
  constructor() {
    this.results = {
      enhancements: [],
      optimizations: [],
      fixes: [],
      newFeatures: []
    };
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const icons = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    };
    
    console.log(`${icons[type]} ${message}`);
  }

  ensureDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  // Create enhanced error handling
  createErrorHandlingEnhancement() {
    this.log('Creating enhanced error handling...', 'PROGRESS');
    
    const errorHandlerContent = `import { NextApiRequest, NextApiResponse } from 'next';

export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class AppError extends Error implements ApiError {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err: ApiError, req: NextApiRequest, res: NextApiResponse) => {
  const { statusCode = 500, message } = err;

  // Log error for monitoring
  console.error(\`API Error [\${statusCode}]: \${message}\`, {
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });

  res.status(statusCode).json({
    error: {
      message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,
      statusCode,
      timestamp: new Date().toISOString()
    }
  });
};

export const asyncHandler = (fn: Function) => (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};`;

    this.ensureDirectory('lib');
    fs.writeFileSync('lib/error-handler.ts', errorHandlerContent);
    this.results.enhancements.push('Enhanced error handling system');
    this.log('✅ Enhanced error handling created', 'SUCCESS');
  }

  // Create performance monitoring enhancement
  createPerformanceMonitoring() {
    this.log('Creating performance monitoring enhancement...', 'PROGRESS');
    
    const performanceMonitorContent = `import { NextApiRequest, NextApiResponse } from 'next';

interface PerformanceMetrics {
  responseTime: number;
  memoryUsage: number;
  timestamp: string;
  endpoint: string;
  method: string;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  recordMetric(metric: PerformanceMetrics) {
    this.metrics.push(metric);
    
    // Keep only last 1000 metrics to prevent memory leaks
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
  }

  getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  getAverageResponseTime(): number {
    if (this.metrics.length === 0) return 0;
    const total = this.metrics.reduce((sum, metric) => sum + metric.responseTime, 0);
    return total / this.metrics.length;
  }

  getMemoryUsage(): number {
    if (this.metrics.length === 0) return 0;
    const latest = this.metrics[this.metrics.length - 1];
    return latest ? latest.memoryUsage : 0;
  }
}

export const performanceMiddleware = (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  const startTime = Date.now();
  const startMemory = process.memoryUsage().heapUsed;

  res.on('finish', () => {
    const endTime = Date.now();
    const endMemory = process.memoryUsage().heapUsed;
    
    const monitor = PerformanceMonitor.getInstance();
    monitor.recordMetric({
      responseTime: endTime - startTime,
      memoryUsage: endMemory - startMemory,
      timestamp: new Date().toISOString(),
      endpoint: req.url || '',
      method: req.method || ''
    });
  });

  next();
};

export default PerformanceMonitor;`;

    this.ensureDirectory('lib');
    fs.writeFileSync('lib/performance-monitor.ts', performanceMonitorContent);
    this.results.enhancements.push('Performance monitoring system');
    this.log('✅ Performance monitoring created', 'SUCCESS');
  }

  // Create API rate limiting
  createRateLimiting() {
    this.log('Creating API rate limiting...', 'PROGRESS');
    
    const rateLimiterContent = `import { NextApiRequest, NextApiResponse } from 'next';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  message?: string;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class RateLimiter {
  private store: RateLimitStore = {};
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
    
    // Clean up expired entries every minute
    setInterval(() => {
      this.cleanup();
    }, 60000);
  }

  private cleanup() {
    const now = Date.now();
    Object.keys(this.store).forEach(key => {
      if (this.store[key].resetTime < now) {
        delete this.store[key];
      }
    });
  }

  private getKey(req: NextApiRequest): string {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    return \`rate_limit:\${ip}\`;
  }

  isAllowed(req: NextApiRequest): { allowed: boolean; remaining: number; resetTime: number } {
    const key = this.getKey(req);
    const now = Date.now();
    const windowStart = now - this.config.windowMs;

    if (!this.store[key] || this.store[key].resetTime < windowStart) {
      this.store[key] = {
        count: 1,
        resetTime: now + this.config.windowMs
      };
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime: this.store[key].resetTime
      };
    }

    if (this.store[key].count >= this.config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: this.store[key].resetTime
      };
    }

    this.store[key].count++;
    return {
      allowed: true,
      remaining: this.config.maxRequests - this.store[key].count,
      resetTime: this.store[key].resetTime
    };
  }
}

// Create rate limiter instances
export const apiRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
  message: 'Too many requests from this IP, please try again later.'
});

export const authRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
  message: 'Too many authentication attempts, please try again later.'
});

export const rateLimitMiddleware = (limiter: RateLimiter) => 
  (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    const result = limiter.isAllowed(req);
    
    res.setHeader('X-RateLimit-Limit', limiter['config'].maxRequests);
    res.setHeader('X-RateLimit-Remaining', result.remaining);
    res.setHeader('X-RateLimit-Reset', new Date(result.resetTime).toISOString());
    
    if (!result.allowed) {
      res.status(429).json({
        error: {
          message: limiter['config'].message || 'Rate limit exceeded',
          retryAfter: Math.ceil((result.resetTime - Date.now()) / 1000)
        }
      });
      return;
    }
    
    next();
  };`;

    this.ensureDirectory('lib');
    fs.writeFileSync('lib/rate-limiter.ts', rateLimiterContent);
    this.results.enhancements.push('API rate limiting system');
    this.log('✅ API rate limiting created', 'SUCCESS');
  }

  // Create database connection enhancement
  createDatabaseEnhancement() {
    this.log('Creating database connection enhancement...', 'PROGRESS');
    
    const dbConnectionContent = `import { MongoClient, Db, Collection } from 'mongodb';

interface DatabaseConfig {
  uri: string;
  dbName: string;
  maxPoolSize?: number;
  minPoolSize?: number;
  maxIdleTimeMS?: number;
}

class DatabaseManager {
  private static instance: DatabaseManager;
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private config: DatabaseConfig;

  private constructor(config: DatabaseConfig) {
    this.config = config;
  }

  static getInstance(config?: DatabaseConfig): DatabaseManager {
    if (!DatabaseManager.instance) {
      if (!config) {
        throw new Error('Database configuration required for first initialization');
      }
      DatabaseManager.instance = new DatabaseManager(config);
    }
    return DatabaseManager.instance;
  }

  async connect(): Promise<void> {
    if (this.client && this.client.topology?.isConnected()) {
      return;
    }

    try {
      this.client = new MongoClient(this.config.uri, {
        maxPoolSize: this.config.maxPoolSize || 10,
        minPoolSize: this.config.minPoolSize || 2,
        maxIdleTimeMS: this.config.maxIdleTimeMS || 30000,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });

      await this.client.connect();
      this.db = this.client.db(this.config.dbName);
      
      console.log('✅ Database connected successfully');
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
      console.log('✅ Database disconnected');
    }
  }

  getDatabase(): Db {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }

  getCollection<T = any>(name: string): Collection<T> {
    return this.getDatabase().collection<T>(name);
  }

  async healthCheck(): Promise<boolean> {
    try {
      if (!this.db) {
        return false;
      }
      await this.db.admin().ping();
      return true;
    } catch {
      return false;
    }
  }
}

// Initialize database with environment variables
const dbConfig: DatabaseConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
  dbName: process.env.MONGODB_DB_NAME || 'ziontechgroup',
  maxPoolSize: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10'),
  minPoolSize: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2'),
  maxIdleTimeMS: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000')
};

export const dbManager = DatabaseManager.getInstance(dbConfig);
export default DatabaseManager;`;

    this.ensureDirectory('lib');
    fs.writeFileSync('lib/database.ts', dbConnectionContent);
    this.results.enhancements.push('Database connection management');
    this.log('✅ Database enhancement created', 'SUCCESS');
  }

  // Create caching system
  createCachingSystem() {
    this.log('Creating caching system...', 'PROGRESS');
    
    const cacheContent = `interface CacheItem<T> {
  value: T;
  expiresAt: number;
  createdAt: number;
}

interface CacheConfig {
  defaultTTL: number; // Time to live in milliseconds
  maxSize: number;
  cleanupInterval: number;
}

class CacheManager<T = any> {
  private cache: Map<string, CacheItem<T>> = new Map();
  private config: CacheConfig;
  private cleanupTimer: NodeJS.Timeout | null = null;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      defaultTTL: config.defaultTTL || 5 * 60 * 1000, // 5 minutes
      maxSize: config.maxSize || 1000,
      cleanupInterval: config.cleanupInterval || 60 * 1000 // 1 minute
    };

    this.startCleanup();
  }

  private startCleanup() {
    this.cleanupTimer = setInterval(() => {
      this.cleanup();
    }, this.config.cleanupInterval);
  }

  private cleanup() {
    const now = Date.now();
    const keysToDelete: string[] = [];

    this.cache.forEach((item, key) => {
      if (item.expiresAt < now) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cache.delete(key));
  }

  set(key: string, value: T, ttl?: number): void {
    // Remove oldest items if cache is full
    if (this.cache.size >= this.config.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    const now = Date.now();
    const expiresAt = now + (ttl || this.config.defaultTTL);

    this.cache.set(key, {
      value,
      expiresAt,
      createdAt: now
    });
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    if (item.expiresAt < Date.now()) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    return item ? item.expiresAt > Date.now() : false;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  getStats() {
    const now = Date.now();
    let expired = 0;
    let active = 0;

    this.cache.forEach(item => {
      if (item.expiresAt < now) {
        expired++;
      } else {
        active++;
      }
    });

    return {
      total: this.cache.size,
      active,
      expired,
      hitRate: 0 // This would need to be tracked separately
    };
  }

  destroy() {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    this.clear();
  }
}

// Create cache instances for different purposes
export const apiCache = new CacheManager({
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  maxSize: 500
});

export const userCache = new CacheManager({
  defaultTTL: 15 * 60 * 1000, // 15 minutes
  maxSize: 100
});

export const staticCache = new CacheManager({
  defaultTTL: 60 * 60 * 1000, // 1 hour
  maxSize: 200
});

export default CacheManager;`;

    this.ensureDirectory('lib');
    fs.writeFileSync('lib/cache.ts', cacheContent);
    this.results.enhancements.push('Caching system');
    this.log('✅ Caching system created', 'SUCCESS');
  }

  // Create API documentation generator
  createApiDocumentation() {
    this.log('Creating API documentation generator...', 'PROGRESS');
    
    const apiDocContent = `import { NextApiRequest, NextApiResponse } from 'next';

interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
  parameters?: ApiParameter[];
  responses?: ApiResponse[];
  examples?: ApiExample[];
}

interface ApiParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  location: 'query' | 'body' | 'header' | 'path';
}

interface ApiResponse {
  status: number;
  description: string;
  schema?: any;
}

interface ApiExample {
  name: string;
  request: any;
  response: any;
}

class ApiDocumentationGenerator {
  private endpoints: ApiEndpoint[] = [];

  addEndpoint(endpoint: ApiEndpoint) {
    this.endpoints.push(endpoint);
  }

  generateOpenAPISpec() {
    const spec = {
      openapi: '3.0.0',
      info: {
        title: 'Zion Tech Group API',
        version: '1.0.0',
        description: 'API documentation for Zion Tech Group services'
      },
      servers: [
        {
          url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
          description: 'Development server'
        }
      ],
      paths: this.generatePaths(),
      components: {
        schemas: this.generateSchemas()
      }
    };

    return spec;
  }

  private generatePaths() {
    const paths: any = {};

    this.endpoints.forEach(endpoint => {
      if (!paths[endpoint.path]) {
        paths[endpoint.path] = {};
      }

      paths[endpoint.path][endpoint.method.toLowerCase()] = {
        summary: endpoint.description,
        parameters: endpoint.parameters?.map(param => ({
          name: param.name,
          in: param.location,
          required: param.required,
          schema: { type: param.type },
          description: param.description
        })),
        responses: endpoint.responses?.reduce((acc, response) => {
          acc[response.status] = {
            description: response.description,
            content: response.schema ? {
              'application/json': {
                schema: response.schema
              }
            } : undefined
          };
          return acc;
        }, {} as any)
      };
    });

    return paths;
  }

  private generateSchemas() {
    return {
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'object',
            properties: {
              message: { type: 'string' },
              statusCode: { type: 'number' },
              timestamp: { type: 'string', format: 'date-time' }
            }
          }
        }
      },
      Success: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          data: { type: 'object' },
          message: { type: 'string' }
        }
      }
    };
  }

  generateMarkdown() {
    let markdown = '# API Documentation\\n\\n';

    this.endpoints.forEach(endpoint => {
      markdown += \`## \${endpoint.method.toUpperCase()} \${endpoint.path}\\n\\n\`;
      markdown += \`\${endpoint.description}\\n\\n\`;

      if (endpoint.parameters && endpoint.parameters.length > 0) {
        markdown += '### Parameters\\n\\n';
        markdown += '| Name | Type | Required | Location | Description |\\n';
        markdown += '|------|------|----------|----------|-------------|\\n';
        
        endpoint.parameters.forEach(param => {
          markdown += \`| \${param.name} | \${param.type} | \${param.required ? 'Yes' : 'No'} | \${param.location} | \${param.description} |\\n\`;
        });
        markdown += '\\n';
      }

      if (endpoint.responses && endpoint.responses.length > 0) {
        markdown += '### Responses\\n\\n';
        endpoint.responses.forEach(response => {
          markdown += \`- **\${response.status}**: \${response.description}\\n\`;
        });
        markdown += '\\n';
      }

      if (endpoint.examples && endpoint.examples.length > 0) {
        markdown += '### Examples\\n\\n';
        endpoint.examples.forEach(example => {
          markdown += \`#### \${example.name}\\n\\n\`;
          markdown += \`**Request:**\\n\`;
          markdown += \`\`\`json\\n\${JSON.stringify(example.request, null, 2)}\\n\`\`\`\\n\\n\`;
          markdown += \`**Response:**\\n\`;
          markdown += \`\`\`json\\n\${JSON.stringify(example.response, null, 2)}\\n\`\`\`\\n\\n\`;
        });
      }

      markdown += '---\\n\\n';
    });

    return markdown;
  }
}

export const apiDocGenerator = new ApiDocumentationGenerator();

// API Documentation endpoint
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const format = req.query.format as string || 'json';
    
    if (format === 'markdown') {
      res.setHeader('Content-Type', 'text/markdown');
      res.status(200).send(apiDocGenerator.generateMarkdown());
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(apiDocGenerator.generateOpenAPISpec());
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}`;

    this.ensureDirectory('pages/api');
    fs.writeFileSync('pages/api/docs.ts', apiDocContent);
    this.results.enhancements.push('API documentation generator');
    this.log('✅ API documentation generator created', 'SUCCESS');
  }

  // Create monitoring dashboard
  createMonitoringDashboard() {
    this.log('Creating monitoring dashboard...', 'PROGRESS');
    
    const dashboardContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { performanceMiddleware, PerformanceMonitor } from '../../lib/performance-monitor';
import { dbManager } from '../../lib/database';
import { apiCache, userCache, staticCache } from '../../lib/cache';

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
    
    // Check database health
    const dbHealth = await dbManager.healthCheck();
    
    // Check cache health
    const cacheStats = {
      api: apiCache.getStats(),
      user: userCache.getStats(),
      static: staticCache.getStats()
    };
    
    // Get performance metrics
    const perfMonitor = PerformanceMonitor.getInstance();
    const avgResponseTime = perfMonitor.getAverageResponseTime();
    const memoryUsage = perfMonitor.getMemoryUsage();
    
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
        memoryUsage,
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
}`;

    this.ensureDirectory('pages/api');
    fs.writeFileSync('pages/api/health.ts', dashboardContent);
    this.results.enhancements.push('Monitoring dashboard');
    this.log('✅ Monitoring dashboard created', 'SUCCESS');
  }

  // Generate comprehensive report
  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      enhancements: this.results.enhancements,
      optimizations: this.results.optimizations,
      fixes: this.results.fixes,
      newFeatures: this.results.newFeatures,
      summary: {
        totalEnhancements: this.results.enhancements.length,
        totalOptimizations: this.results.optimizations.length,
        totalFixes: this.results.fixes.length,
        totalNewFeatures: this.results.newFeatures.length
      }
    };

    this.ensureDirectory('automation-reports');
    fs.writeFileSync('automation-reports/app-enhancement-report.json', JSON.stringify(report, null, 2));
    
    this.log('📊 App Enhancement Report Generated', 'SUCCESS');
    this.log(`⏱️ Total Duration: ${report.duration}`, 'INFO');
    this.log(`🚀 Enhancements: ${report.summary.totalEnhancements}`, 'SUCCESS');
    this.log(`⚡ Optimizations: ${report.summary.totalOptimizations}`, 'SUCCESS');
    this.log(`🔧 Fixes: ${report.summary.totalFixes}`, 'SUCCESS');
    this.log(`🆕 New Features: ${report.summary.totalNewFeatures}`, 'SUCCESS');
  }

  async run() {
    this.log('🚀 Starting App Enhancement Automation...', 'PROGRESS');
    
    try {
      this.createErrorHandlingEnhancement();
      this.createPerformanceMonitoring();
      this.createRateLimiting();
      this.createDatabaseEnhancement();
      this.createCachingSystem();
      this.createApiDocumentation();
      this.createMonitoringDashboard();
      
      this.generateReport();
      
      this.log('🎉 App Enhancement Automation completed successfully!', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`App Enhancement Automation failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run the app enhancement automation
if (require.main === module) {
  const automation = new AppEnhancementAutomation();
  automation.run().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error('App enhancement automation failed:', error);
    process.exit(1);
  });
}

module.exports = AppEnhancementAutomation;