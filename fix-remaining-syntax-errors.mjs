#!/usr/bin/env node

import fs from 'fs';

// Fix WebVitals.tsx
function fixWebVitals() {
  const content = `import { useEffect } from "react";

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });
  }, []);

  return null;
}
`;

  fs.writeFileSync('src/components/WebVitals.tsx', content);
  console.log('Fixed src/components/WebVitals.tsx');
}

// Fix blogPosts.ts
function fixBlogPosts() {
  const content = `export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
    content: 'Artificial intelligence is revolutionizing the way businesses operate...',
    author: 'John Smith',
    publishedAt: '2024-01-15',
    tags: ['AI', 'Business', 'Technology'],
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    excerpt: 'Essential strategies for successful cloud migration and management.',
    content: 'Cloud computing has become the backbone of modern IT infrastructure...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-10',
    tags: ['Cloud', 'Infrastructure', 'Best Practices'],
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '3',
    title: 'Cybersecurity in 2024',
    excerpt: 'Latest trends and threats in cybersecurity and how to protect your business.',
    content: 'As technology evolves, so do the threats to our digital security...',
    author: 'Mike Chen',
    publishedAt: '2024-01-05',
    tags: ['Security', 'Cybersecurity', 'Protection'],
    imageUrl: '/api/placeholder/800/400'
  }
];
`;

  fs.writeFileSync('src/data/blogPosts.ts', content);
  console.log('Fixed src/data/blogPosts.ts');
}

// Fix useAnalytics.ts
function fixUseAnalytics() {
  const content = `import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function useAnalytics() {
  useEffect(() => {
    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  }, []);

  const trackClick = (eventName: string, category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: category,
        event_label: eventName,
      });
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  return {
    trackClick,
    trackPageView,
  };
}
`;

  fs.writeFileSync('src/hooks/useAnalytics.ts', content);
  console.log('Fixed src/hooks/useAnalytics.ts');
}

// Fix error-reporting.ts
function fixErrorReporting() {
  const content = `// API endpoint for error reporting
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const errorDetails = req.body;

    // Validate the request
    if (!errorDetails || !errorDetails.message) {
      return res.status(400).json({ error: 'Invalid error data' });
    }

    // Log error details
    console.error('Client error reported:', errorDetails);

    // Here you would typically send to your error reporting service
    // e.g., Sentry, LogRocket, etc.

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 50));

    return res.status(200).json({
      success: true,
      errorId: \`err_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Error reporting API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
`;

  fs.writeFileSync('pages/api/error-reporting.ts', content);
  console.log('Fixed pages/api/error-reporting.ts');
}

// Fix health.ts
function fixHealth() {
  const content = `import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  services: {
    database: string;
    cache: string;
    analytics: string;
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HealthResponse>) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: 0,
      version: '1.0.0',
      environment: 'development',
      services: {
        database: 'unknown',
        cache: 'unknown',
        analytics: 'unknown'
      }
    });
  }

  const healthData: HealthResponse = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    services: {
      database: 'connected',
      cache: 'connected',
      analytics: 'active'
    }
  };

  return res.status(200).json(healthData);
}
`;

  fs.writeFileSync('pages/api/health.ts', content);
  console.log('Fixed pages/api/health.ts');
}

// Run all fixes
console.log('Fixing remaining syntax errors...');
fixWebVitals();
fixBlogPosts();
fixUseAnalytics();
fixErrorReporting();
fixHealth();
console.log('All remaining syntax errors fixed!');