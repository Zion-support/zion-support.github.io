// Define metadata type for compatibility
export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  authors: Array<{ name: string }>;
  creator: string;
  publisher: string;
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
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    creator: string;
  };
  verification: {
    google: string;
    yandex: string;
    yahoo: string;
    other: {
      me: string[];
    };
  };
  alternates: {
    canonical: string;
  };
  category: string;
}

export const defaultMetadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions for businesses worldwide',
  keywords: ['AI', 'IT solutions', 'technology', 'business automation'],
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
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide',
    creator: '@ziontechgroup',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['https://ziontechgroup.com'],
    },
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
  category: 'technology',
};