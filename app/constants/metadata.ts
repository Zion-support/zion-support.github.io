import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - Leading Technology Solutions Provider',
    template: '%s | Zion Tech Group'
  },
  description: 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services. Expert team delivering exceptional results.',
  keywords: ['AI solutions', 'IT services', 'technology consulting', 'cloud architecture', 'software development'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - Leading Technology Solutions Provider',
    description: 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading Technology Solutions Provider',
    description: 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services.',
    creator: '@ziontechgroup',
  },
}
;