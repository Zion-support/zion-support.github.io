import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PerformanceMonitor from './components/PerformanceMonitor'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './components/ThemeProvider'
import StructuredData, { organizationSchema, websiteSchema, serviceSchema } from './components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
  keywords: ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    title: 'Zion Tech Group - Advanced AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <StructuredData data={serviceSchema} />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="zion-theme">
          <PerformanceMonitor />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}