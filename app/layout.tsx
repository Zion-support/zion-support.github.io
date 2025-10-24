import type { Metadata } from 'next'
import './globals.css'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import AnalyticsMonitor from './components/AnalyticsMonitor'

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <EnhancedErrorBoundary>
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <AnalyticsMonitor />
          {children}
        </EnhancedErrorBoundary>
      </body>
    </html>
  )
}
