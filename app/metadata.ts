import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services for enterprises worldwide.',
  keywords: [
    'AI Solutions',
    'Cloud Computing',
    'Digital Transformation',
    'Machine Learning',
    'Data Analytics',
    'Cybersecurity',
    'DevOps',
    'Enterprise Software'
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
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services for enterprises worldwide.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services for enterprises worldwide.',
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

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '/'
): Metadata {
  return {
    ...defaultMetadata,
    title: `${title} | Zion Tech Group`,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | Zion Tech Group`,
      description,
      url: `https://ziontechgroup.com${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | Zion Tech Group`,
      description,
    },
  };
}