// Define metadata type for compatibility
interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  authors: Array<{ name: string }>;
  creator: string;
  publisher: string;
  formatDetection: {
    email: boolean;
    address: boolean;
    telephone: boolean;
  };
  metadataBase: URL;
  alternates: {
    canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    locale: string;
    type: string;
  twitter: {
    card: string;
    images: string[];
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
}

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered solutions, cloud architecture, and cutting-edge technology services for businesses worldwide.',
  keywords: [
    'AI solutions',
    'cloud architecture',
    'web development',
    'mobile apps',
    'data analytics',
    'DevOps',
    'machine learning',
    'artificial intelligence',
    'technology consulting'
  ],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
    canonical: '/',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered solutions, cloud architecture, and cutting-edge technology services for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Advanced AI and IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
    index: true,
    follow: true,
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },