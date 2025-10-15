import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Zion Tech Group - AI & Technology Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of AI solutions, cloud infrastructure, and digital transformation services. Empowering businesses with cutting-edge technology.',
  keywords: [
    'AI solutions',
    'cloud infrastructure',
    'digital transformation',
    'machine learning',
    'artificial intelligence',
    'technology consulting',
    'software development',
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
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Leading provider of AI solutions, cloud infrastructure, and digital transformation services.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Leading provider of AI solutions, cloud infrastructure, and digital transformation services.',
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
};