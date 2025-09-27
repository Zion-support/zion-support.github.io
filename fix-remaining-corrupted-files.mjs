#!/usr/bin/env node

import fs from 'fs';

// Fix SEO.tsx
const seoContent = `import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

export default function SEO({ 
  title = "Zion Tech Group", 
  description = "Leading technology solutions for modern businesses",
  keywords = ["technology", "solutions", "AI", "cloud"],
  image = "/api/placeholder/1200/630"
}: SEOProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </head>
  );
}
`;

// Fix WebVitals.tsx
const webVitalsContent = `import { useEffect } from "react";

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
}

export default function WebVitals() {
  useEffect(() => {
    const reportWebVitals = (metric: WebVitalsMetric) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

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

// Fix useAnalytics.ts
const useAnalyticsContent = `import { useEffect } from 'react';

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

// Fix errorHandling.ts
const errorHandlingContent = `/**
 * Comprehensive error handling utilities
 * Provides comprehensive error management functions
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
}

export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, code: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export function handleError(error: Error | AppError, errorInfo?: ErrorInfo): void {
  console.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    ...errorInfo,
  });

  // Send to error reporting service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
    });
  }
}

export function createErrorBoundary(Component: React.ComponentType<any>) {
  return class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      handleError(error, {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorBoundary: 'ErrorBoundary',
      });
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="error-boundary">
            <h2>Something went wrong.</h2>
            <p>We're sorry, but something unexpected happened.</p>
          </div>
        );
      }

      return <Component {...this.props} />;
    }
  };
}
`;

// Fix analytics.ts API
const analyticsApiContent = `// API endpoint for analytics events
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { events, session } = req.body;

    // Validate the request
    if (!events || !Array.isArray(events)) {
      return res.status(400).json({ error: "Invalid events data" });
    }

    // Process analytics events
    const processedEvents = events.map((event: any) => ({
      ...event,
      timestamp: new Date().toISOString(),
      sessionId: session?.id || 'anonymous',
    }));

    // Here you would typically send to your analytics service
    console.log('Analytics events received:', processedEvents);

    return res.status(200).json({ 
      success: true, 
      processed: processedEvents.length 
    });
  } catch (error) {
    console.error('Analytics API error:', error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
`;

// Write all files
console.log('Fixing remaining corrupted files...');

fs.writeFileSync('src/components/SEO.tsx', seoContent);
console.log('Fixed src/components/SEO.tsx');

fs.writeFileSync('src/components/WebVitals.tsx', webVitalsContent);
console.log('Fixed src/components/WebVitals.tsx');

fs.writeFileSync('src/hooks/useAnalytics.ts', useAnalyticsContent);
console.log('Fixed src/hooks/useAnalytics.ts');

fs.writeFileSync('src/utils/errorHandling.ts', errorHandlingContent);
console.log('Fixed src/utils/errorHandling.ts');

fs.writeFileSync('pages/api/analytics.ts', analyticsApiContent);
console.log('Fixed pages/api/analytics.ts');

console.log('All remaining corrupted files fixed!');