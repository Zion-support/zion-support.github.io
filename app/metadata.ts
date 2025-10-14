// Define metadata type for compatibility
export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  authors: Array<{ name: string }>;
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
    images: Array<{ url: string }>;
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