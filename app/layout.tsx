import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - AI, Micro SaaS & IT Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of enterprise-grade AI solutions, innovative micro SaaS products, and comprehensive IT services. Transform your business with cutting-edge technology.',
  keywords: 'AI solutions, micro SaaS, IT services, artificial intelligence, business automation, enterprise software, technology consulting',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI, Micro SaaS & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, innovative micro SaaS products, and comprehensive IT services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI, Micro SaaS & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI, Micro SaaS & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, innovative micro SaaS products, and comprehensive IT services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        {children}
      </body>
    </html>
  )
}