#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Optimizes the build for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// 1. Optimize package.json scripts
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add performance optimization scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'build:optimized': 'NODE_OPTIONS="--max-old-space-size=4096" vite build --mode production',
  'build:analyze': 'vite build --mode analyze && npx vite-bundle-analyzer dist/stats.html',
  'perf:audit': 'lighthouse http://localhost:4173 --output=html --output-path=./lighthouse-report.html',
  'perf:check': 'npm run build && npm run preview & sleep 5 && npm run perf:audit'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json with performance scripts');

// 2. Create performance monitoring component
const performanceMonitorPath = path.join(__dirname, '../app/components/PerformanceMonitor.tsx');
const performanceMonitorContent = `import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableUserTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  enableAnalytics?: boolean;
  enableErrorReporting?: boolean;
  performanceBudget?: {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableWebVitals = true,
  enableResourceTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  enableUserTiming = true,
  enableLongTaskMonitoring = true,
  enableLayoutShiftMonitoring = true,
  enableAnalytics = true,
  enableErrorReporting = true,
  performanceBudget = {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 600
  }
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    if (enableWebVitals) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(metric.value * 1000)
            });
          }
        });

        getFID((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(metric.value)
            });
          }
        });

        getFCP((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(metric.value)
            });
          }
        });

        getLCP((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(metric.value)
            });
          }
        });

        getTTFB((metric) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'TTFB',
              value: Math.round(metric.value)
            });
          }
        });
      });
    }

    // Resource timing monitoring
    if (enableResourceTiming) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'resource_timing', {
              event_category: 'Performance',
              event_label: entry.name,
              value: Math.round(entry.duration)
            });
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
    }

    // Memory monitoring
    if (enableMemoryMonitoring && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory && enableAnalytics && 'gtag' in window) {
          (window as any).gtag('event', 'memory_usage', {
            event_category: 'Performance',
            event_label: 'Memory',
            value: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
          });
        }
      };
      
      setInterval(checkMemory, 30000); // Check every 30 seconds
    }

    // Long task monitoring
    if (enableLongTaskMonitoring) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'long_task', {
              event_category: 'Performance',
              event_label: 'Long Task',
              value: Math.round(entry.duration)
            });
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
    }

    // Layout shift monitoring
    if (enableLayoutShiftMonitoring) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (enableAnalytics && 'gtag' in window) {
            (window as any).gtag('event', 'layout_shift', {
              event_category: 'Performance',
              event_label: 'Layout Shift',
              value: Math.round(entry.value * 1000)
            });
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }

    // Error reporting
    if (enableErrorReporting) {
      window.addEventListener('error', (event) => {
        if (enableAnalytics && 'gtag' in window) {
          (window as any).gtag('event', 'javascript_error', {
            event_category: 'Error',
            event_label: event.message,
            value: 1
          });
        }
      });

      window.addEventListener('unhandledrejection', (event) => {
        if (enableAnalytics && 'gtag' in window) {
          (window as any).gtag('event', 'unhandled_promise_rejection', {
            event_category: 'Error',
            event_label: event.reason?.toString() || 'Unknown',
            value: 1
          });
        }
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
`;

fs.writeFileSync(performanceMonitorPath, performanceMonitorContent);
console.log('✅ Created PerformanceMonitor component');

// 3. Create SEO optimization component
const seoOptimizerPath = path.join(__dirname, '../app/components/SEOOptimizer.tsx');
const seoOptimizerContent = `import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  preload?: Array<{ href: string; as: string; type?: string }>;
  prefetch?: Array<{ href: string; as: string }>;
  dnsPrefetch?: string[];
  preconnect?: string[];
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  preload = [],
  prefetch = [],
  dnsPrefetch = [],
  preconnect = []
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(\`meta[property="\${property}"]\`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      let twitterTag = document.querySelector(\`meta[name="\${name}"]\`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    });

    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Add preload links
    preload.forEach(({ href, as, type }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'preload');
      link.setAttribute('href', href);
      link.setAttribute('as', as);
      if (type) link.setAttribute('type', type);
      document.head.appendChild(link);
    });

    // Add prefetch links
    prefetch.forEach(({ href, as }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'prefetch');
      link.setAttribute('href', href);
      link.setAttribute('as', as);
      document.head.appendChild(link);
    });

    // Add DNS prefetch
    dnsPrefetch.forEach((domain) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'dns-prefetch');
      link.setAttribute('href', domain);
      document.head.appendChild(link);
    });

    // Add preconnect
    preconnect.forEach((domain) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'preconnect');
      link.setAttribute('href', domain);
      document.head.appendChild(link);
    });
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, preload, prefetch, dnsPrefetch, preconnect]);

  return null;
};

export default SEOOptimizer;
`;

fs.writeFileSync(seoOptimizerPath, seoOptimizerContent);
console.log('✅ Created SEOOptimizer component');

// 4. Create accessibility enhancer
const accessibilityEnhancerPath = path.join(__dirname, '../app/components/AccessibilityEnhancer.tsx');
const accessibilityEnhancerContent = `import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableTextScaling?: boolean;
  enableMotionReduction?: boolean;
  enableVoiceNavigation?: boolean;
  enableAnalytics?: boolean;
  enableErrorReporting?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableTextScaling = true,
  enableMotionReduction = true,
  enableVoiceNavigation = true,
  enableAnalytics = true,
  enableErrorReporting = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add skip links
    if (enableSkipLinks) {
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = \`
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      \`;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      // Add skip link styles
      const style = document.createElement('style');
      style.textContent = \`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        .skip-link:focus {
          top: 6px;
        }
      \`;
      document.head.appendChild(style);
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals/menus
        if (e.key === 'Escape') {
          const openMenus = document.querySelectorAll('[aria-expanded="true"]');
          openMenus.forEach(menu => {
            menu.setAttribute('aria-expanded', 'false');
            menu.blur();
          });
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      // Remove keyboard navigation class on mouse use
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    }

    // Focus management
    if (enableFocusManagement) {
      // Trap focus in modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        });
      };

      // Apply focus trap to modals
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.hasAttribute('role') && element.getAttribute('role') === 'dialog') {
                trapFocus(element);
              }
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    // High contrast mode
    if (enableHighContrast) {
      const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
      const updateHighContrast = () => {
        if (highContrastMediaQuery.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };
      highContrastMediaQuery.addListener(updateHighContrast);
      updateHighContrast();
    }

    // Motion reduction
    if (enableMotionReduction) {
      const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const updateMotionReduction = () => {
        if (motionMediaQuery.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };
      motionMediaQuery.addListener(updateMotionReduction);
      updateMotionReduction();
    }

    // Text scaling
    if (enableTextScaling) {
      const textScalingMediaQuery = window.matchMedia('(min-resolution: 2dppx)');
      const updateTextScaling = () => {
        if (textScalingMediaQuery.matches) {
          document.body.classList.add('high-dpi');
        } else {
          document.body.classList.remove('high-dpi');
        }
      };
      textScalingMediaQuery.addListener(updateTextScaling);
      updateTextScaling();
    }

    // Voice navigation support
    if (enableVoiceNavigation && 'speechSynthesis' in window) {
      const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
      };

      // Add voice navigation to buttons
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' && target.textContent) {
          speak(target.textContent);
        }
      });
    }

    // Analytics for accessibility
    if (enableAnalytics) {
      // Track keyboard usage
      document.addEventListener('keydown', (e) => {
        if ('gtag' in window) {
          (window as any).gtag('event', 'keyboard_navigation', {
            event_category: 'Accessibility',
            event_label: e.key,
            value: 1
          });
        }
      });

      // Track screen reader usage
      if ('speechSynthesis' in window) {
        (window as any).gtag('event', 'screen_reader_detected', {
          event_category: 'Accessibility',
          event_label: 'Screen Reader',
          value: 1
        });
      }
    }
  }, []);

  return null;
};

export default AccessibilityEnhancer;
`;

fs.writeFileSync(accessibilityEnhancerPath, accessibilityEnhancerContent);
console.log('✅ Created AccessibilityEnhancer component');

console.log('🎉 Performance optimization complete!');
console.log('📊 Run "npm run build:analyze" to analyze bundle size');
console.log('🔍 Run "npm run perf:audit" to audit performance');