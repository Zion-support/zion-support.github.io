#!/usr/bin/env node

/**
 * Performance Optimizer for Zion Tech Group Applications
 * Implements comprehensive performance improvements across the codebase
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.improvements = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async optimizeNextJSApp() {
    this.log('Starting Next.js performance optimizations...');
    
    try {
      // 1. Implement dynamic imports for heavy components
      await this.addDynamicImports();
      
      // 2. Add image optimization configuration
      await this.optimizeImages();
      
      // 3. Implement code splitting
      await this.implementCodeSplitting();
      
      // 4. Add performance monitoring
      await this.addPerformanceMonitoring();
      
      this.log('Next.js optimizations completed successfully');
    } catch (error) {
      this.log(`Next.js optimization failed: ${error.message}`, 'error');
      this.errors.push(error);
    }
  }

  async addDynamicImports() {
    this.log('Adding dynamic imports for heavy components...');
    
    const dynamicImportTemplate = `
// Dynamic import wrapper for performance optimization
export const dynamicImport = (importFunction) => {
  return React.lazy(() => importFunction());
};

// Usage example:
// const HeavyComponent = dynamicImport(() => import('./HeavyComponent'));
`;

    const utilsPath = path.join(this.projectRoot, 'src', 'utils');
    if (!fs.existsSync(utilsPath)) {
      fs.mkdirSync(utilsPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsPath, 'dynamicImports.tsx'), dynamicImportTemplate);
    this.improvements.push('Added dynamic imports utility');
  }

  async optimizeImages() {
    this.log('Configuring image optimization...');
    
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    let nextConfig = '';
    
    if (fs.existsSync(nextConfigPath)) {
      nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
    }
    
    const imageOptimizationConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'zion-tech.com', '*.zion-tech.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
};

module.exports = nextConfig;
`;

    fs.writeFileSync(nextConfigPath, imageOptimizationConfig);
    this.improvements.push('Configured Next.js image optimization');
  }

  async implementCodeSplitting() {
    this.log('Implementing code splitting strategies...');
    
    const codeSplittingUtils = `
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Code splitting utilities
export const createLazyComponent = (importFunc, fallback = null) => {
  return dynamic(importFunc, {
    loading: () => fallback || <div className="animate-pulse bg-gray-200 h-32 rounded" />,
    ssr: false
  });
};

// Route-based code splitting
export const withRouteSplitting = (Component) => {
  return dynamic(() => Promise.resolve(Component), {
    loading: () => <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  });
};

// Component-based code splitting
export const LazyComponent = ({ children, fallback }) => (
  <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 h-32 rounded" />}>
    {children}
  </Suspense>
);
`;

    const utilsPath = path.join(this.projectRoot, 'src', 'utils');
    if (!fs.existsSync(utilsPath)) {
      fs.mkdirSync(utilsPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsPath, 'codeSplitting.tsx'), codeSplittingUtils);
    this.improvements.push('Implemented code splitting utilities');
  }

  async addPerformanceMonitoring() {
    this.log('Adding performance monitoring...');
    
    const performanceMonitor = `
// Performance monitoring utilities
export class PerformanceMonitor {
  static measurePageLoad() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
        };
        
        console.log('Performance Metrics:', metrics);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_performance', {
            custom_parameter_1: metrics.domContentLoaded,
            custom_parameter_2: metrics.loadComplete,
          });
        }
      });
    }
  }

  static measureComponentRender(componentName, renderFunction) {
    const start = performance.now();
    const result = renderFunction();
    const end = performance.now();
    
    console.log(\`\${componentName} render time: \${end - start}ms\`);
    return result;
  }

  static measureAsyncOperation(operationName, operation) {
    const start = performance.now();
    return operation().finally(() => {
      const end = performance.now();
      console.log(\`\${operationName} completed in: \${end - start}ms\`);
    });
  }
}

// Web Vitals measurement
export const measureWebVitals = () => {
  if (typeof window !== 'undefined' && 'web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};
`;

    const utilsPath = path.join(this.projectRoot, 'src', 'utils');
    if (!fs.existsSync(utilsPath)) {
      fs.mkdirSync(utilsPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsPath, 'performance.ts'), performanceMonitor);
    this.improvements.push('Added performance monitoring utilities');
  }

  async optimizeDatabase() {
    this.log('Starting database optimizations...');
    
    try {
      // Add database indexing strategies
      await this.addDatabaseIndexes();
      
      // Implement connection pooling
      await this.implementConnectionPooling();
      
      this.log('Database optimizations completed');
    } catch (error) {
      this.log(`Database optimization failed: ${error.message}`, 'error');
      this.errors.push(error);
    }
  }

  async addDatabaseIndexes() {
    this.log('Adding database indexing strategies...');
    
    const indexStrategies = `
-- Database indexing strategies for performance optimization

-- User table indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);

-- Content table indexes
CREATE INDEX IF NOT EXISTS idx_content_type ON content(type);
CREATE INDEX IF NOT EXISTS idx_content_published ON content(published_at);
CREATE INDEX IF NOT EXISTS idx_content_author ON content(author_id);
CREATE INDEX IF NOT EXISTS idx_content_tags ON content USING GIN(tags);

-- Analytics indexes
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics(date);
CREATE INDEX IF NOT EXISTS idx_analytics_event ON analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_user ON analytics(user_id);

-- Composite indexes for common queries
CREATE INDEX IF NOT EXISTS idx_content_published_type ON content(published_at, type);
CREATE INDEX IF NOT EXISTS idx_analytics_date_event ON analytics(date, event_type);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_content_search ON content USING GIN(to_tsvector('english', title || ' ' || content));
`;

    const dbPath = path.join(this.projectRoot, 'database');
    if (!fs.existsSync(dbPath)) {
      fs.mkdirSync(dbPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(dbPath, 'indexes.sql'), indexStrategies);
    this.improvements.push('Added database indexing strategies');
  }

  async implementConnectionPooling() {
    this.log('Implementing database connection pooling...');
    
    const connectionPoolConfig = `
import { Pool } from 'pg';

// Database connection pool configuration
export const dbPool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'zion_tech',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  
  // Connection pool settings
  max: 20, // Maximum number of clients in the pool
  min: 5,  // Minimum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
  maxUses: 7500, // Close (and replace) a connection after it has been used 7500 times
  
  // SSL configuration for production
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Closing database pool...');
  await dbPool.end();
  process.exit(0);
});

export default dbPool;
`;

    const dbPath = path.join(this.projectRoot, 'database');
    if (!fs.existsSync(dbPath)) {
      fs.mkdirSync(dbPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(dbPath, 'connection.js'), connectionPoolConfig);
    this.improvements.push('Implemented database connection pooling');
  }

  async enhanceSecurity() {
    this.log('Starting security enhancements...');
    
    try {
      // Add security headers middleware
      await this.addSecurityHeaders();
      
      // Implement rate limiting
      await this.implementRateLimiting();
      
      // Add input validation
      await this.addInputValidation();
      
      this.log('Security enhancements completed');
    } catch (error) {
      this.log(`Security enhancement failed: ${error.message}`, 'error');
      this.errors.push(error);
    }
  }

  async addSecurityHeaders() {
    this.log('Adding security headers middleware...');
    
    const securityMiddleware = `
import { NextRequest, NextResponse } from 'next/server';

// Security headers configuration
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google-analytics.com *.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' *.googleapis.com",
    "img-src 'self' data: blob: *.google-analytics.com *.googletagmanager.com",
    "font-src 'self' *.gstatic.com",
    "connect-src 'self' *.google-analytics.com *.googletagmanager.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ')
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Add CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || 'http://localhost:3000');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
`;

    const middlewarePath = path.join(this.projectRoot, 'middleware.ts');
    fs.writeFileSync(middlewarePath, securityMiddleware);
    this.improvements.push('Added security headers middleware');
  }

  async implementRateLimiting() {
    this.log('Implementing rate limiting...');
    
    const rateLimiter = `
import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter (use Redis in production)
const rateLimitMap = new Map();

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

const defaultConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // limit each IP to 100 requests per windowMs
};

export function rateLimit(config: RateLimitConfig = defaultConfig) {
  return (request: NextRequest) => {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowStart = now - config.windowMs;
    
    // Clean old entries
    for (const [key, data] of rateLimitMap.entries()) {
      if (data.windowStart < windowStart) {
        rateLimitMap.delete(key);
      }
    }
    
    // Check current IP
    const ipData = rateLimitMap.get(ip);
    
    if (!ipData) {
      rateLimitMap.set(ip, {
        requests: 1,
        windowStart: now
      });
      return NextResponse.next();
    }
    
    if (ipData.requests >= config.maxRequests) {
      return new NextResponse('Too Many Requests', { status: 429 });
    }
    
    ipData.requests++;
    return NextResponse.next();
  };
}

// API rate limiting middleware
export function apiRateLimit(request: NextRequest) {
  const apiConfig: RateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 50, // limit each IP to 50 API requests per windowMs
  };
  
  return rateLimit(apiConfig)(request);
}
`;

    const utilsPath = path.join(this.projectRoot, 'src', 'utils');
    if (!fs.existsSync(utilsPath)) {
      fs.mkdirSync(utilsPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsPath, 'rateLimiter.ts'), rateLimiter);
    this.improvements.push('Implemented rate limiting utilities');
  }

  async addInputValidation() {
    this.log('Adding input validation...');
    
    const validationUtils = `
import { z } from 'zod';

// Common validation schemas
export const commonSchemas = {
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  url: z.string().url('Invalid URL'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone number'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
};

// Sanitization utilities
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
};

// Validation middleware
export const validateRequest = (schema: z.ZodSchema) => {
  return (req: any, res: any, next: any) => {
    try {
      const validatedData = schema.parse(req.body);
      req.validatedData = validatedData;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors
        });
      }
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
};

// API validation wrapper
export const validateApiRequest = (schema: z.ZodSchema) => {
  return async (request: Request) => {
    try {
      const body = await request.json();
      const validatedData = schema.parse(body);
      return { success: true, data: validatedData };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          error: 'Validation failed', 
          details: error.errors 
        };
      }
      return { success: false, error: 'Invalid request' };
    }
  };
};
`;

    const utilsPath = path.join(this.projectRoot, 'src', 'utils');
    if (!fs.existsSync(utilsPath)) {
      fs.mkdirSync(utilsPath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsPath, 'validation.ts'), validationUtils);
    this.improvements.push('Added input validation utilities');
  }

  async addTestingInfrastructure() {
    this.log('Setting up testing infrastructure...');
    
    try {
      // Add Jest configuration
      await this.setupJest();
      
      // Add Playwright for E2E testing
      await this.setupPlaywright();
      
      this.log('Testing infrastructure setup completed');
    } catch (error) {
      this.log(`Testing setup failed: ${error.message}`, 'error');
      this.errors.push(error);
    }
  }

  async setupJest() {
    this.log('Setting up Jest configuration...');
    
    const jestConfig = `
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
`;

    fs.writeFileSync(path.join(this.projectRoot, 'jest.config.js'), jestConfig);
    
    const jestSetup = `
import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }
  },
}))

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
`;

    fs.writeFileSync(path.join(this.projectRoot, 'jest.setup.js'), jestSetup);
    this.improvements.push('Set up Jest testing configuration');
  }

  async setupPlaywright() {
    this.log('Setting up Playwright for E2E testing...');
    
    const playwrightConfig = `
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
`;

    const e2ePath = path.join(this.projectRoot, 'e2e');
    if (!fs.existsSync(e2ePath)) {
      fs.mkdirSync(e2ePath, { recursive: true });
    }
    
    fs.writeFileSync(path.join(this.projectRoot, 'playwright.config.ts'), playwrightConfig);
    
    const sampleTest = `
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if the page title is correct
  await expect(page).toHaveTitle(/Zion Tech Group/);
  
  // Check if main navigation is present
  await expect(page.locator('nav')).toBeVisible();
  
  // Check if hero section is present
  await expect(page.locator('h1')).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Test navigation to services page
  await page.click('a[href="/services"]');
  await expect(page).toHaveURL(/.*services/);
  
  // Test navigation to contact page
  await page.click('a[href="/contact"]');
  await expect(page).toHaveURL(/.*contact/);
});

test('contact form works', async ({ page }) => {
  await page.goto('/contact');
  
  // Fill out the contact form
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message');
  
  // Submit the form
  await page.click('button[type="submit"]');
  
  // Check for success message
  await expect(page.locator('.success-message')).toBeVisible();
});
`;

    fs.writeFileSync(path.join(e2ePath, 'homepage.spec.ts'), sampleTest);
    this.improvements.push('Set up Playwright E2E testing');
  }

  async generateReport() {
    this.log('Generating improvement report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      totalImprovements: this.improvements.length,
      totalErrors: this.errors.length,
      improvements: this.improvements,
      errors: this.errors.map(error => ({
        message: error.message,
        stack: error.stack
      })),
      recommendations: [
        'Run npm install to install new dependencies',
        'Update environment variables for database and security settings',
        'Run tests with npm test to verify functionality',
        'Configure CI/CD pipeline with the new testing setup',
        'Set up monitoring and analytics in production',
        'Review and customize security headers for your specific needs',
        'Configure rate limiting based on your traffic patterns'
      ]
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'performance-improvements-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log('Improvement report generated: performance-improvements-report.json');
    return report;
  }

  async run() {
    this.log('🚀 Starting comprehensive performance optimization...');
    
    try {
      await this.optimizeNextJSApp();
      await this.optimizeDatabase();
      await this.enhanceSecurity();
      await this.addTestingInfrastructure();
      
      const report = await this.generateReport();
      
      this.log('✅ Performance optimization completed successfully!');
      this.log(`📊 Total improvements: ${report.totalImprovements}`);
      this.log(`❌ Total errors: ${report.totalErrors}`);
      
      if (this.errors.length > 0) {
        this.log('⚠️ Some optimizations encountered errors. Check the report for details.');
      }
      
      return report;
    } catch (error) {
      this.log(`💥 Fatal error during optimization: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the optimizer if this script is executed directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;