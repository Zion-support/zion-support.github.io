import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - AI & IT Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of cutting-edge artificial intelligence and information technology solutions that help modern businesses scale, innovate, and succeed in the digital age.',
  keywords: [
    'AI solutions',
    'artificial intelligence',
    'IT services',
    'machine learning',
    'digital transformation',
    'cloud infrastructure',
    'cybersecurity',
    'business intelligence',
    'micro SaaS',
    'data analytics'
  ],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zion.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of cutting-edge artificial intelligence and information technology solutions for modern businesses.',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of cutting-edge artificial intelligence and information technology solutions for modern businesses.',
    images: ['/og-image.jpg'],
    creator: '@ziontechgroup',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}