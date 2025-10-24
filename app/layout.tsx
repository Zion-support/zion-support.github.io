import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import PerformanceMonitor from './components/PerformanceMonitor'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EnhancedErrorBoundary>
          <AccessibilityEnhancer />
          <PerformanceMonitor />
          {children}
        </EnhancedErrorBoundary>
      </body>
    </html>
  )
}