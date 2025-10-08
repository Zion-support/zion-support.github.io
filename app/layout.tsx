import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import AnalyticsProvider from './components/AnalyticsProvider';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PWAInstaller from './components/PWAInstaller';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';

const metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  keywords: [
    'AI solutions',
    'enterprise AI',
    'digital transformation',
    'automation',
    'cloud services',
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
    title: 'Zion Tech Group - AI & IT Solutions',
    description:
      'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI & IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & IT Solutions',
    description:
      'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    images: ['https://ziontechgroup.com/og-image.jpg'],
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description:
      'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <html lang='en'  />
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description}  />
        <meta name='keywords' content={metadata.keywords.join(', ')}  />
        <meta name='author' content={metadata.authors[0].name}  />
        <meta name='creator' content={metadata.creator}  />
        <meta name='publisher' content={metadata.publisher}  />
        <meta name='format-detection' content='email: false, address: false, telephone: false'  />
        <meta name='robots' content='index, follow'  />
        <meta name='theme-color' content='#4f46e5'  />
        <meta name='viewport' content='width=device-width, initial-scale=1'  />
        
        {/* Open Graph */}
        <meta property='og:title' content={metadata.openGraph.title}  />
        <meta property='og:description' content={metadata.openGraph.description}  />
        <meta property='og:url' content={metadata.openGraph.url}  />
        <meta property='og:site_name' content={metadata.openGraph.siteName}  />
        <meta property='og:image' content={metadata.openGraph.images[0].url}  />
        <meta property='og:locale' content={metadata.openGraph.locale}  />
        <meta property='og:type' content={metadata.openGraph.type}  />
        
        {/* Twitter */}
        <meta name='twitter:card' content={metadata.twitter.card}  />
        <meta name='twitter:title' content={metadata.twitter.title}  />
        <meta name='twitter:description' content={metadata.twitter.description}  />
        <meta name='twitter:image' content={metadata.twitter.images[0]}  />
        
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico'  />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'  />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'  />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'  />
        <link rel='manifest' href='/site.webmanifest'  />
        
        {/* Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className='antialiased'>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PerformanceMonitor  />
              <PWAInstaller  />
              {children}
            </AccessibilityEnhancer>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
      </div>
    </HelmetProvider>
  );
}
