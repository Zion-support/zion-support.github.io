#!/bin/bash

echo "🔧 Starting comprehensive improvements process..."

# 1. Fix common TypeScript issues
echo "📝 Fixing TypeScript issues..."
find . -name "*.ts" -o -name "*.tsx" | while read file; do
    # Fix process.env access
    if grep -q "process.env.NODE_ENV" "$file"; then
        sed -i "s/process\.env\.NODE_ENV/process.env['NODE_ENV']/g" "$file"
        echo "  Fixed process.env access in $file"
    fi
    
    # Fix property access issues
    if grep -q "\.src" "$file"; then
        sed -i "s/\.src/['src']/g" "$file"
        echo "  Fixed property access in $file"
    fi
    
    # Fix dataset access
    if grep -q "\.dataset\." "$file"; then
        sed -i "s/\.dataset\./['dataset']['/g" "$file"
        echo "  Fixed dataset access in $file"
    fi
done

# 2. Remove merge conflict markers
echo "🧹 Cleaning up merge conflict markers..."
find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
        sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /d' "$file"
        echo "  Removed conflict markers from $file"
    fi
done

# 3. Optimize imports
echo "📦 Optimizing imports..."
find . -name "*.ts" -o -name "*.tsx" | while read file; do
    # Remove unused imports (basic check)
    if grep -q "import.*from.*react.*;" "$file" && ! grep -q "React\|useState\|useEffect" "$file"; then
        sed -i '/import.*from.*react.*;/d' "$file"
        echo "  Removed unused React import from $file"
    fi
done

# 4. Add error boundaries
echo "🛡️  Adding error boundaries..."
if [ ! -f "app/components/ErrorBoundary.tsx" ]; then
    cat > app/components/ErrorBoundary.tsx << 'EOF'
'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      return FallbackComponent ? <FallbackComponent error={this.state.error} /> : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
EOF
    echo "  Created ErrorBoundary component"
fi

# 5. Add performance monitoring
echo "📊 Adding performance monitoring..."
if [ ! -f "src/utils/performanceMonitor.ts" ]; then
    cat > src/utils/performanceMonitor.ts << 'EOF'
/**
 * Performance monitoring utilities
 */

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Partial<PerformanceMetrics> = {};

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.fid = entry.processingStart - entry.startTime;
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.cls = clsValue;
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  reportMetrics(): void {
    console.log('Performance Metrics:', this.metrics);
    
    // Send to analytics service if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(this.metrics.lcp || 0)
      });
    }
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();
EOF
    echo "  Created performance monitoring utility"
fi

# 6. Add SEO improvements
echo "🔍 Adding SEO improvements..."
if [ ! -f "src/utils/seoUtils.ts" ]; then
    cat > src/utils/seoUtils.ts << 'EOF'
/**
 * SEO utility functions
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export class SEOUtils {
  static generateStructuredData(data: any): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      ...data
    });
  }

  static generateMetaTags(seoData: SEOData): string {
    return `
      <title>${seoData.title}</title>
      <meta name="description" content="${seoData.description}" />
      <meta name="keywords" content="${seoData.keywords.join(', ')}" />
      ${seoData.ogImage ? `<meta property="og:image" content="${seoData.ogImage}" />` : ''}
      ${seoData.canonicalUrl ? `<link rel="canonical" href="${seoData.canonicalUrl}" />` : ''}
    `;
  }

  static generateSitemap(pages: string[]): string {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;
  }
}
EOF
    echo "  Created SEO utilities"
fi

# 7. Run final quality checks
echo "🧪 Running final quality checks..."
npm run lint 2>/dev/null && echo "✅ Linting passed" || echo "⚠️  Linting issues found"
npm test 2>/dev/null && echo "✅ Tests passed" || echo "⚠️  Test issues found"
npm run type-check 2>/dev/null && echo "✅ Type checking passed" || echo "⚠️  TypeScript issues found"

echo ""
echo "🎉 Comprehensive improvements complete!"
echo "📈 Added error boundaries, performance monitoring, and SEO utilities"