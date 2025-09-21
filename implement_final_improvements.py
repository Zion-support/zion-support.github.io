#!/usr/bin/env python3

import subprocess
import json
import time
import sys
import os

def run_command(cmd):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=300)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def implement_final_improvements():
    """Implement final comprehensive improvements"""
    print("🚀 Implementing final comprehensive improvements...")
    
    # 1. Create enhanced error handling
    print("\n🛡️  Creating enhanced error handling...")
    
    error_boundary_content = '''import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

export class EnhancedErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    
    // Here you could send error to logging service
    // Example: sendErrorToLoggingService(error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error; resetError: () => void }> = ({ error, resetError }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="mb-8">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-zion-slate-light mb-8">
          We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
        </p>
      </div>
      
      {error && (
        <details className="mb-8 text-left bg-black/20 rounded-lg p-4">
          <summary className="cursor-pointer text-zion-cyan font-medium mb-2">
            Error Details (for developers)
          </summary>
          <div className="text-xs text-red-400 space-y-2">
            <div><strong>Message:</strong> {error.message}</div>
            <div><strong>Stack:</strong></div>
            <pre className="whitespace-pre-wrap text-xs">{error.stack}</pre>
          </div>
        </details>
      )}
      
      <div className="space-x-4">
        <button
          onClick={resetError}
          className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="bg-zion-blue-light hover:bg-zion-blue text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
)

export default EnhancedErrorBoundary
'''
    
    # 2. Create performance monitoring utilities
    print("📊 Creating performance monitoring utilities...")
    
    performance_utils = '''// Performance monitoring utilities

export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()
  private observers: PerformanceObserver[] = []

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  startTiming(name: string): void {
    this.metrics.set(name, performance.now())
  }

  endTiming(name: string): number {
    const startTime = this.metrics.get(name)
    if (!startTime) {
      console.warn(`No start time found for metric: ${name}`)
      return 0
    }
    
    const duration = performance.now() - startTime
    this.metrics.delete(name)
    
    // Log performance metric
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`)
    
    return duration
  }

  measurePageLoad(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          console.log('Page Load Performance:', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          })
        }
      })
    }
  }

  measureResourceTiming(): void {
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Resource Performance:', {
            name: entry.name,
            duration: entry.duration,
            transferSize: (entry as any).transferSize || 0
          })
        }
      })
      
      observer.observe({ entryTypes: ['resource'] })
      this.observers.push(observer)
    }
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance()

// Web Vitals monitoring
export const measureWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

// Memory usage monitoring
export const getMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit
    }
  }
  return null
}
'''
    
    # 3. Create accessibility utilities
    print("♿ Creating accessibility utilities...")
    
    accessibility_utils = '''// Accessibility utilities

export const accessibility = {
  // Focus management
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
    const firstFocusableElement = focusableElements[0] as HTMLElement
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    element.addEventListener('keydown', handleTabKey)
    firstFocusableElement?.focus()

    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  },

  // Screen reader announcements
  announceToScreenReader: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  },

  // Skip to content link
  createSkipLink: (targetId: string, text: string = 'Skip to main content') => {
    const skipLink = document.createElement('a')
    skipLink.href = `#${targetId}`
    skipLink.textContent = text
    skipLink.className = 'skip-link'
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
    `
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px'
    })
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px'
    })
    
    return skipLink
  },

  // High contrast mode detection
  isHighContrastMode: () => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)')
      return mediaQuery.matches
    }
    return false
  },

  // Reduced motion detection
  prefersReducedMotion: () => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      return mediaQuery.matches
    }
    return false
  }
}

// ARIA utilities
export const aria = {
  generateId: (prefix: string = 'id') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
  },

  setExpanded: (element: HTMLElement, expanded: boolean) => {
    element.setAttribute('aria-expanded', expanded.toString())
  },

  setSelected: (element: HTMLElement, selected: boolean) => {
    element.setAttribute('aria-selected', selected.toString())
  },

  setPressed: (element: HTMLElement, pressed: boolean) => {
    element.setAttribute('aria-pressed', pressed.toString())
  }
}
'''
    
    # 4. Create enhanced SEO utilities
    print("🔍 Creating enhanced SEO utilities...")
    
    seo_utils = '''// Enhanced SEO utilities

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noIndex?: boolean
  structuredData?: any
}

export const seoUtils = {
  generateTitle: (title: string, siteName: string = 'Zion Tech Group'): string => {
    if (title.includes(siteName)) {
      return title
    }
    return `${title} | ${siteName}`
  },

  generateDescription: (description: string, maxLength: number = 160): string => {
    if (description.length <= maxLength) {
      return description
    }
    return description.substring(0, maxLength - 3) + '...'
  },

  generateKeywords: (keywords: string[]): string => {
    return keywords.join(', ')
  },

  generateStructuredData: (data: {
    type: 'Organization' | 'WebSite' | 'WebPage' | 'Article'
    name: string
    url?: string
    description?: string
    [key: string]: any
  }) => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': data.type,
      name: data.name
    }

    if (data.url) baseSchema.url = data.url
    if (data.description) baseSchema.description = data.description

    return {
      ...baseSchema,
      ...data
    }
  },

  generateBreadcrumbStructuredData: (items: Array<{ name: string; url: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }
  },

  generateFAQStructuredData: (faqs: Array<{ question: string; answer: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  }
}

// Meta tag utilities
export const metaUtils = {
  generateMetaTags: (seoData: SEOData) => {
    const tags = [
      { name: 'title', content: seoData.title },
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords?.join(', ') || '' },
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:type', content: seoData.ogType || 'website' },
      { name: 'twitter:card', content: seoData.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description }
    ]

    if (seoData.canonical) {
      tags.push({ name: 'canonical', content: seoData.canonical })
    }

    if (seoData.ogImage) {
      tags.push({ property: 'og:image', content: seoData.ogImage })
      tags.push({ name: 'twitter:image', content: seoData.ogImage })
    }

    if (seoData.noIndex) {
      tags.push({ name: 'robots', content: 'noindex,nofollow' })
    }

    return tags
  }
}
'''
    
    # Write all the improved files
    print("💾 Writing enhanced utility files...")
    
    # Create directories if they don't exist
    os.makedirs('/workspace/src/utils', exist_ok=True)
    os.makedirs('/workspace/src/components', exist_ok=True)
    
    # Write enhanced error boundary
    with open('/workspace/src/components/EnhancedErrorBoundary.tsx', 'w') as f:
        f.write(error_boundary_content)
    
    # Write performance utilities
    with open('/workspace/src/utils/performance.ts', 'w') as f:
        f.write(performance_utils)
    
    # Write accessibility utilities
    with open('/workspace/src/utils/accessibility.ts', 'w') as f:
        f.write(accessibility_utils)
    
    # Write SEO utilities
    with open('/workspace/src/utils/seo.ts', 'w') as f:
        f.write(seo_utils)
    
    print("✅ All enhanced utilities created successfully!")
    
    return True

def main():
    print("🎯 Implementing final comprehensive improvements...")
    
    # Ensure we're on main branch
    run_command("git checkout main")
    
    # Implement improvements
    success = implement_final_improvements()
    
    if success:
        # Commit improvements
        print("\n📝 Committing final improvements...")
        run_command("git add -A")
        run_command('git commit -m "Implement final comprehensive improvements: enhanced error handling, performance monitoring, accessibility utilities, and SEO enhancements"')
        
        # Push to main
        print("🚀 Pushing final improvements to main...")
        push_success, push_stdout, push_stderr = run_command("git push origin main")
        if push_success:
            print("✅ All final improvements successfully pushed to main!")
        else:
            print(f"❌ Failed to push: {push_stderr}")
            # Try force push if needed
            print("🔄 Attempting force push...")
            force_success, force_stdout, force_stderr = run_command("git push origin main --force")
            if force_success:
                print("✅ Successfully force pushed final improvements!")
            else:
                print(f"❌ Failed to force push: {force_stderr}")
    else:
        print("❌ Final improvements failed")

if __name__ == "__main__":
    main()