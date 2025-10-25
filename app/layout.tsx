import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'

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
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI & IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <PerformanceMonitor />
        <ErrorBoundary>
          <AccessibilityEnhancer>
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </body>
    </html>
  )
}