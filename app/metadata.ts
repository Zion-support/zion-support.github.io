// Define metadata type for compatibility
interface Metadata {
  title: value,
        description: string;
  keywords: value,
        authors: Array<{ name: value,
        creator: string;
  publisher: value,
        formatDetection: {
    email: value,
        address: boolean;
    telephone: boolean;
  };
  metadataBase: value,
        alternates: {
    canonical: string;
  };
  openGraph: value,
        title: string;
    description: value,
        url: string;
    siteName: value,
        images: Array<{
      url: value,
        width: number;
      height: value,
        alt: string;
    }>;
    locale: value,
        type: string;
  };
  twitter: value,
        card: string;
    title: value,
        description: string;
    images: string[];
  };
  robots: value,
        index: boolean;
    follow: value,
        googleBot: {
      index: value,
        follow: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
  };
}

export const metadata: value,
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
  formatDetection: value,
        email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: value,
        canonical: '/',
  },
  openGraph: value,
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
  },
  twitter: value,
        card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered solutions, cloud architecture, and cutting-edge technology services for businesses worldwide.',
    images: ['/og-image.jpg'],
  },
  robots: value,
        index: true,
    follow: true,
    googleBot: value,
        index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
