// Define metadata type for compatibility
export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  authors: Array<{ name: string,,,}>;
  creator: string;
  publisher: string;
  contact: {
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
    images: Array<{ url: string,,,}>;
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

  keywords: [
    'technology consulting',,,,
    'AI solutions',
    'IT services'
  ],
  authors: [{ name: 'Zion Tech Group',,,}],
  {creator: 'Zion Tech Group',,,},
  {publisher: 'Zion Tech Group',,,},
  contact: {
    email: true,,,,
    {address: true,,,},
    {telephone: true,,},},
  {metadataBase: new URL('https://ziontechgroup.com'),,,},
  alternates: {
    canonical: 'https://ziontechgroup.com',,,},
  openGraph: {
    title: 'Zion Tech Group',,,,
    {description: 'Advanced AI and IT Solutions',,,},
    {url: 'https://ziontechgroup.com',,,},
    {siteName: 'Zion Tech Group',,,},
    images: [{ url: '/og-image.jpg',,,}]
  },
  twitter: {
    card: 'summary_large_image',,,,
    {title: 'Zion Tech Group',,,},
    {description: 'Advanced AI and IT Solutions',,,},
    images: ['/og-image.jpg'],,,},
  robots: {
    index: true,,,,
    {follow: true,,,},
    googleBot: {
      index: true,,,,
      {follow: true,,,},
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};