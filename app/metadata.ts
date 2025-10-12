// Define metadata type for compatibility;
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
    images: Array;
;
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
]]
