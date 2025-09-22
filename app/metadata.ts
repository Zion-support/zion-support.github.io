import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  keywords: 'AI solutions, micro SaaS, IT services, technology consulting, automation',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
