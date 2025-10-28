import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - Advanced Technology Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of advanced technology solutions, AI integration, and digital transformation services.',
  keywords: [
    'technology solutions',
    'AI integration',
    'digital transformation',
    'software development',
    'consulting',
    'innovation'
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
    title: 'Zion Tech Group - Advanced Technology Solutions',
    description: 'Leading provider of advanced technology solutions, AI integration, and digital transformation services.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced Technology Solutions',
    description: 'Leading provider of advanced technology solutions, AI integration, and digital transformation services.',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};