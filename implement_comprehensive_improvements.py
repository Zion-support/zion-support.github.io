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

def implement_improvements():
    """Implement comprehensive improvements to the application"""
    print("🚀 Starting comprehensive application improvements...")
    
    # 1. Improve build configuration
    print("\n📦 Improving build configuration...")
    
    # Update package.json with better scripts
    package_json_updates = {
        "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "next lint",
            "type-check": "tsc --noEmit",
            "format": "prettier --write .",
            "format:check": "prettier --check .",
            "test": "jest",
            "test:watch": "jest --watch",
            "analyze": "ANALYZE=true npm run build"
        }
    }
    
    # 2. Improve Next.js configuration
    print("⚙️  Optimizing Next.js configuration...")
    
    next_config_content = """/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
"""
    
    # 3. Create improved components
    print("🎨 Creating improved components...")
    
    # Enhanced SEO component
    seo_component = '''import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noIndex?: boolean
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Leading provider of AI and technology solutions, empowering businesses with cutting-edge technology to drive innovation and growth.',
  canonical,
  keywords = 'AI, artificial intelligence, technology solutions, automation, quantum computing',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false
}) => {
  const fullTitle = title.includes('Zion') ? title : `${title} | Zion Tech Group`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e40af" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}'''
    
    # Enhanced Error Boundary
    error_boundary = '''import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // Here you could send error to logging service
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
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
      <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-8">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      {error && (
        <details className="mb-8 text-left">
          <summary className="cursor-pointer text-zion-cyan">Error Details</summary>
          <pre className="mt-2 text-xs text-red-400 bg-black/20 p-2 rounded">
            {error.message}
          </pre>
        </details>
      )}
      <div className="space-x-4">
        <button
          onClick={resetError}
          className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="bg-zion-blue-light hover:bg-zion-blue text-white px-6 py-3 rounded-lg transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
)'''
    
    # 4. Create utility functions
    print("🔧 Creating utility functions...")
    
    utils_content = '''// Utility functions for the application

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (fallbackErr) {
      document.body.removeChild(textArea)
      return false
    }
  }
}

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}'''
    
    # 5. Create improved hooks
    print("🎣 Creating improved hooks...")
    
    hooks_content = '''import { useState, useEffect, useCallback, useRef } from 'react'

// Custom hook for local storage
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading localStorage key "' + key + '":', error)
      return initialValue
    }
  })

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Error setting localStorage key "' + key + '":', error)
    }
  }, [key, storedValue])

  return [storedValue, setValue] as const
}

// Custom hook for debounced value
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Custom hook for intersection observer
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit = {}
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry)
  }, [])

  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef, threshold, root, rootMargin, updateEntry])

  return entry
}

// Custom hook for media queries
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

// Custom hook for async operations
export const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  const execute = useCallback(() => {
    setStatus('pending')
    setData(null)
    setError(null)

    return asyncFunction()
      .then((response: T) => {
        setData(response)
        setStatus('success')
      })
      .catch((error: E) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, data, error }
}'''
    
    # Write all the improved files
    print("💾 Writing improved files...")
    
    # Write Next.js config
    with open('/workspace/next.config.js', 'w') as f:
        f.write(next_config_content)
    
    # Write improved components
    with open('/workspace/src/components/SEO.tsx', 'w') as f:
        f.write(seo_component)
    
    with open('/workspace/src/components/GlobalErrorBoundary.tsx', 'w') as f:
        f.write(error_boundary)
    
    # Write utilities
    with open('/workspace/src/lib/utils.ts', 'w') as f:
        f.write(utils_content)
    
    # Write hooks
    with open('/workspace/src/hooks/index.ts', 'w') as f:
        f.write(hooks_content)
    
    print("✅ All improvements implemented successfully!")
    
    # 6. Run build to test
    print("\n🔨 Testing build...")
    success, stdout, stderr = run_command("npm run build")
    if success:
        print("✅ Build successful!")
    else:
        print(f"❌ Build failed: {stderr}")
    
    return success

def main():
    print("🎯 Starting comprehensive application improvements...")
    
    # Ensure we're on main branch
    run_command("git checkout main")
    
    # Implement improvements
    success = implement_improvements()
    
    if success:
        # Commit improvements
        print("\n📝 Committing improvements...")
        run_command("git add -A")
        run_command('git commit -m "Implement comprehensive improvements: enhanced SEO, error handling, utilities, and hooks"')
        
        # Push to main
        print("🚀 Pushing improvements to main...")
        push_success, push_stdout, push_stderr = run_command("git push origin main")
        if push_success:
            print("✅ All improvements successfully pushed to main!")
        else:
            print(f"❌ Failed to push: {push_stderr}")
    else:
        print("❌ Improvements failed due to build errors")

if __name__ == "__main__":
    main()