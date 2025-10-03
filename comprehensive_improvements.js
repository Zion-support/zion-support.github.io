#!/usr/bin/env node

/**
 * Comprehensive Code Improvements Script
 * This script will enhance the codebase with modern best practices
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive code improvements...');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Performance optimizations
const performanceOptimizations = {
  'src/utils/performance.ts': `
// Enhanced performance monitoring with modern APIs
export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToFirstByte: 0
  };

  private observers: PerformanceObserver[] = [];

  constructor(private config: PerformanceConfig = {}) {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;
    
    // Use modern Performance Observer API
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeResources();
  }

  private observeLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    }
  }

  private observeFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    }
  }

  private observeCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    }
  }

  private observeFCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.firstContentfulPaint = fcpEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    }
  }

  private observeResources(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          // Monitor slow resources
          if (entry.duration > 1000) {
            console.warn(\`Slow resource: \${entry.name} took \${entry.duration}ms\`);
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public async reportMetrics(): Promise<void> {
    const report = {
      timestamp: Date.now(),
      url: window.location.href,
      metrics: this.metrics,
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection ? {
        effectiveType: (navigator as any).connection.effectiveType,
        downlink: (navigator as any).connection.downlink
      } : null
    };

    if (this.config.reportUrl) {
      await this.sendToAnalytics(report);
    } else {
      this.storeLocally(report);
    }
  }

  private async sendToAnalytics(report: any): Promise<void> {
    try {
      await fetch(this.config.reportUrl!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      });
    } catch (error) {
      console.error('Failed to send performance metrics:', error);
    }
  }

  private storeLocally(report: any): void {
    try {
      const existingReports = JSON.parse(localStorage.getItem('performance-reports') || '[]');
      existingReports.unshift(report);
      // Keep only last 10 reports
      existingReports.splice(10);
      localStorage.setItem('performance-reports', JSON.stringify(existingReports));
    } catch (error) {
      console.error('Failed to store performance metrics locally:', error);
    }
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

interface PerformanceMetrics {
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
}

interface PerformanceConfig {
  reportUrl?: string;
  sampleRate?: number;
}

// Image optimization utilities
export class ImageOptimizer {
  static createResponsiveImage(src: string, alt: string, sizes: string[]): string {
    const baseSrc = src.replace(/\\.[^/.]+$/, '');
    const extension = src.split('.').pop();

    const srcset = sizes
      .map(size => \`\${baseSrc}-\${size}w.\${extension} \${size}w\`)
      .join(', ');

    return \`<img src="\${src}" srcset="\${srcset}" alt="\${alt}" loading="lazy" />\`;
  }

  static preloadCriticalImages(imageUrls: string[]): void {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
}

// Bundle analysis utilities
export class BundleAnalyzer {
  static analyzeBundle(): void {
    if (import.meta.env.DEV) {
      console.log('Bundle Analysis:');
      
      // Analyze loaded scripts
      const scripts = document.querySelectorAll('script[src]');
      console.log(\`Scripts loaded: \${scripts.length}\`);
      
      // Analyze loaded stylesheets
      const styles = document.querySelectorAll('link[rel="stylesheet"]');
      console.log(\`Stylesheets loaded: \${styles.length}\`);
      
      // Analyze resource timing
      const resources = performance.getEntriesByType('resource');
      const totalSize = resources.reduce((sum, resource) => {
        return sum + ((resource as any).transferSize || 0);
      }, 0);
      
      console.log(\`Total resource size: \${(totalSize / 1024 / 1024).toFixed(2)} MB\`);
      console.log(\`Total resources: \${resources.length}\`);
    }
  }

  static getLargestResources(limit: number = 10): any[] {
    const resources = performance.getEntriesByType('resource');
    return resources
      .filter(resource => (resource as any).transferSize > 0)
      .sort((a, b) => (b as any).transferSize - (a as any).transferSize)
      .slice(0, limit);
  }
}
`
};

// Security enhancements
const securityEnhancements = {
  'src/utils/security.ts': `
// Enhanced security utilities
export class SecurityManager {
  private static instance: SecurityManager;
  private sessionId: string;
  private csrfToken: string;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.csrfToken = this.generateToken();
  }

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  private generateSessionId(): string {
    const existingSessionId = sessionStorage.getItem('sessionId');
    if (existingSessionId) {
      return existingSessionId;
    }
    
    const sessionId = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    sessionStorage.setItem('sessionId', sessionId);
    return sessionId;
  }

  private static generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getCsrfToken(): string {
    return this.csrfToken;
  }

  public validateInput(input: string): boolean {
    // Basic XSS protection
    const dangerousPatterns = [
      /<script[^>]*>.*?<\\/script>/gi,
      /javascript:/gi,
      /on\\w+\\s*=/gi,
      /<iframe[^>]*>.*?<\\/iframe>/gi
    ];

    return !dangerousPatterns.some(pattern => pattern.test(input));
  }

  public sanitizeHtml(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  public async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  public generateSecureRandomString(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
}

// Content Security Policy utilities
export class CSPManager {
  static generateNonce(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode.apply(null, Array.from(array)));
  }

  static createCSPHeader(nonce: string): string {
    return \`default-src 'self'; script-src 'self' 'nonce-\${nonce}'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https:; font-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';\`;
  }
}

// Rate limiting utilities
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  public isAllowed(key: string, maxRequests: number = 100, windowMs: number = 60000): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(key, validRequests);
    
    return true;
  }

  public reset(key: string): void {
    this.requests.delete(key);
  }
}
`
};

// SEO enhancements
const seoEnhancements = {
  'src/utils/seoOptimizer.ts': `
// Enhanced SEO optimization utilities
export class SEOOptimizer {
  private static instance: SEOOptimizer;

  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  public generateMetaTags(pageData: {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: string;
  }): string {
    const {
      title,
      description,
      keywords = [],
      image = '/og-image.jpg',
      url = window.location.href,
      type = 'website'
    } = pageData;

    return \`
      <title>\${this.escapeHtml(title)}</title>
      <meta name="description" content="\${this.escapeHtml(description)}">
      <meta name="keywords" content="\${keywords.join(', ')}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="\${type}">
      <meta property="og:url" content="\${url}">
      <meta property="og:title" content="\${this.escapeHtml(title)}">
      <meta property="og:description" content="\${this.escapeHtml(description)}">
      <meta property="og:image" content="\${image}">
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="\${url}">
      <meta property="twitter:title" content="\${this.escapeHtml(title)}">
      <meta property="twitter:description" content="\${this.escapeHtml(description)}">
      <meta property="twitter:image" content="\${image}">
      
      <!-- Additional SEO -->
      <meta name="robots" content="index, follow">
      <meta name="author" content="Zion Tech Group">
      <link rel="canonical" href="\${url}">
    \`;
  }

  public generateStructuredData(data: any): string {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading AI and technology solutions provider",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://github.com/Zion-Holdings",
        "https://linkedin.com/company/zion-tech-group"
      ],
      ...data
    };

    return \`<script type="application/ld+json">\${JSON.stringify(structuredData)}</script>\`;
  }

  public optimizeImages(images: string[]): string[] {
    return images.map(img => {
      // Add WebP support with fallback
      const baseName = img.replace(/\\.[^/.]+$/, '');
      return \`
        <picture>
          <source srcset="\${baseName}.webp" type="image/webp">
          <source srcset="\${baseName}.jpg" type="image/jpeg">
          <img src="\${img}" alt="Optimized image" loading="lazy">
        </picture>
      \`;
    });
  }

  public generateSitemap(pages: Array<{url: string, lastmod?: string, priority?: number}>): string {
    const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${pages.map(page => \`
  <url>
    <loc>\${page.url}</loc>
    <lastmod>\${page.lastmod || new Date().toISOString()}</lastmod>
    <priority>\${page.priority || 0.8}</priority>
  </url>
\`).join('')}
</urlset>\`;

    return sitemap;
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
`
};

// Accessibility enhancements
const accessibilityEnhancements = {
  'src/utils/enhancedAccessibility.ts': `
// Enhanced accessibility utilities
export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private focusTrapStack: HTMLElement[] = [];

  public static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  public initializeAccessibility(): void {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupFocusManagement();
    this.setupColorContrast();
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      // Skip links functionality
      if (event.key === 'Tab' && event.target instanceof HTMLElement) {
        const skipLink = event.target.closest('.skip-link');
        if (skipLink) {
          event.preventDefault();
          const target = document.querySelector((skipLink as HTMLAnchorElement).href);
          if (target) {
            (target as HTMLElement).focus();
          }
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        this.closeModals();
      }
    });
  }

  private setupScreenReaderSupport(): void {
    // Add live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);

    // Announce page changes
    this.announceToScreenReader('Page loaded successfully');
  }

  private setupFocusManagement(): void {
    // Focus trap for modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('.modal[aria-hidden="false"]');
        if (modal) {
          this.trapFocus(modal as HTMLElement, event);
        }
      }
    });
  }

  private setupColorContrast(): void {
    // Check color contrast ratios
    const elements = document.querySelectorAll('[style*="color"], [style*="background"]');
    elements.forEach(element => {
      this.checkColorContrast(element as HTMLElement);
    });
  }

  public announceToScreenReader(message: string): void {
    const liveRegion = document.querySelector('[aria-live]');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public trapFocus(container: HTMLElement, event: KeyboardEvent): void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  public setAriaExpanded(element: HTMLElement, expanded: boolean): void {
    element.setAttribute('aria-expanded', expanded.toString());
  }

  public setAriaHidden(element: HTMLElement, hidden: boolean): void {
    element.setAttribute('aria-hidden', hidden.toString());
  }

  private checkColorContrast(element: HTMLElement): void {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    // Basic contrast check (simplified)
    if (color === backgroundColor) {
      console.warn('Potential contrast issue detected:', element);
    }
  }

  private closeModals(): void {
    const modals = document.querySelectorAll('.modal[aria-hidden="false"]');
    modals.forEach(modal => {
      this.setAriaHidden(modal as HTMLElement, true);
      modal.classList.remove('active');
    });
  }

  public createSkipLink(targetId: string, text: string = 'Skip to main content'): HTMLAnchorElement {
    const skipLink = document.createElement('a');
    skipLink.href = \`#\${targetId}\`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    skipLink.style.cssText = \`
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    \`;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    return skipLink;
  }
}
`
};

// Main execution
async function runImprovements() {
  try {
    log('Starting comprehensive code improvements...', 'blue');

    // Apply performance optimizations
    log('Applying performance optimizations...', 'yellow');
    for (const [file, content] of Object.entries(performanceOptimizations)) {
      const filePath = path.join(process.cwd(), file);
      const dir = path.dirname(filePath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, content.trim());
      log(\`✓ Updated \${file}\`, 'green');
    }

    // Apply security enhancements
    log('Applying security enhancements...', 'yellow');
    for (const [file, content] of Object.entries(securityEnhancements)) {
      const filePath = path.join(process.cwd(), file);
      const dir = path.dirname(filePath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, content.trim());
      log(\`✓ Updated \${file}\`, 'green');
    }

    // Apply SEO enhancements
    log('Applying SEO enhancements...', 'yellow');
    for (const [file, content] of Object.entries(seoEnhancements)) {
      const filePath = path.join(process.cwd(), file);
      const dir = path.dirname(filePath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, content.trim());
      log(\`✓ Updated \${file}\`, 'green');
    }

    // Apply accessibility enhancements
    log('Applying accessibility enhancements...', 'yellow');
    for (const [file, content] of Object.entries(accessibilityEnhancements)) {
      const filePath = path.join(process.cwd(), file);
      const dir = path.dirname(filePath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, content.trim());
      log(\`✓ Updated \${file}\`, 'green');
    }

    log('\\n🎉 Comprehensive improvements completed successfully!', 'green');
    log('\\nSummary of improvements:', 'cyan');
    log('• Enhanced performance monitoring with modern APIs', 'green');
    log('• Improved security with CSRF protection and input validation', 'green');
    log('• Enhanced SEO with structured data and meta tags', 'green');
    log('• Improved accessibility with keyboard navigation and screen reader support', 'green');
    log('• Added image optimization and bundle analysis utilities', 'green');

  } catch (error) {
    log(\`❌ Error during improvements: \${error.message}\`, 'red');
    process.exit(1);
  }
}

// Run the improvements
runImprovements();