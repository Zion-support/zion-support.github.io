import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions for modern enterprises. Transform your business with cutting-edge technology and achieve unprecedented growth.',
  keywords: ['AI', 'IT Solutions', 'Technology', 'Enterprise', 'Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Digital Transformation'],
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
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for modern enterprises. Transform your business with cutting-edge technology.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI and IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for modern enterprises.',
    images: ['/og-image.svg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com',
              logo: 'https://ziontechgroup.com/logo.png',
              description: 'Leading provider of AI and IT solutions for modern enterprises',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '364 E Main St STE 1008',
                addressLocality: 'Middletown',
                addressRegion: 'DE',
                postalCode: '19709',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-302-464-0950',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://facebook.com/ziontechgroup',
                'https://twitter.com/ziontechgroup',
                'https://linkedin.com/company/ziontechgroup',
                'https://instagram.com/ziontechgroup',
                'https://youtube.com/@ziontechgroup',
                'https://github.com/ziontechgroup',
              ],
              service: [
                {
                  '@type': 'Service',
                  name: 'AI Services',
                  description: 'Advanced artificial intelligence solutions',
                },
                {
                  '@type': 'Service',
                  name: 'IT Services',
                  description: 'Comprehensive IT support and infrastructure',
                },
                {
                  '@type': 'Service',
                  name: 'Digital Transformation',
                  description: 'Business modernization and process automation',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}