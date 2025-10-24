import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import ErrorBoundary from './components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - Professional Technology Solutions',
  description: 'Leading provider of professional technology solutions and services for modern businesses.',
  keywords: 'technology, solutions, services, professional, business',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Professional Technology Solutions',
    description: 'Leading provider of professional technology solutions and services for modern businesses.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Professional Technology Solutions',
    description: 'Leading provider of professional technology solutions and services for modern businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}