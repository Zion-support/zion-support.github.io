// Define metadata type for compatibility
export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  authors: Array<{ name: string }>;
  creator: string;
  publisher: string;
  robots: {
    email: boolean;
    address: boolean;
    telephone: boolean;
  };
  metadataBase: URL;
  alternates: {
    canonical: string;
  };
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
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
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
  };
}

export const defaultMetadata: Metadata = {
  title: 'Zion Tech Group - AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions for businesses worldwide',
  keywords: [
    'technology consulting',
    'AI solutions',
    'IT services',
    'software development',
    'digital transformation'
  ],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: {
    email: true,
    address: true,
    telephone: true
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: 'https://ziontechgroup.com'
  },
  openGraph: {
    title: 'Zion Tech Group - AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide',
    images: ['https://ziontechgroup.com/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};