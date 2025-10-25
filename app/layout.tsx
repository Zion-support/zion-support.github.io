import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import SEOEnhancer from './components/SEOEnhancer'
import PWAInstaller from './components/PWAInstaller'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zion.app'),
  title: 'Zion Tech Group - Advanced AI & IT Solutions',
  description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: 'AI solutions, IT services, cybersecurity, cloud computing, digital transformation, machine learning, artificial intelligence, data analytics, blockchain, IoT',
  authors: [{ name: 'Zion Tech Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Advanced AI & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://zion.app',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Register service worker
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Measure page load time
                  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
                  console.log('Page load time:', loadTime + 'ms')
                  
                  // Track Core Web Vitals
                  if ('web-vitals' in window) {
                    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                      getCLS(console.log)
                      getFID(console.log)
                      getFCP(console.log)
                      getLCP(console.log)
                      getTTFB(console.log)
                    })
                  }
                })
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer>
          <Analytics />
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <SEOEnhancer />
          <ErrorBoundary>
            <Header />
            <main id="main-content" className="pt-16">
              {children}
            </main>
            <Footer />
            <PWAInstaller />
          </ErrorBoundary>
        </PerformanceOptimizer>
      </body>
    </html>
  )
}