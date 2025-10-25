import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { metadata } from './constants/metadata'
import { viewport } from './constants/viewport'

const inter = Inter({ subsets: ['latin'] })

<<<<<<< HEAD
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
=======
export { metadata, viewport }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0ece

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
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
      <body className={inter.className}>
        <Analytics />
        <PerformanceMonitor />
        <AccessibilityEnhancer />
        <ErrorBoundary>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
=======
      <body className={inter.className}>
        {children}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0ece
      </body>
    </html>
  )
}
