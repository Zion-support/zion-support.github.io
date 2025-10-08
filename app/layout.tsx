import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import AnalyticsProvider from './components/AnalyticsProvider';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PWAInstaller from './components/PWAInstaller';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <html lang='en' />
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta 
          name='description' 
          content='Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.' 
        />
        <meta 
          name='keywords' 
          content='AI solutions, enterprise AI, digital transformation, automation, cloud services' 
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='theme-color' content='#4f46e5' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='canonical' href='https://ziontechgroup.com/' />
        
        {/* Open Graph */}
        <meta property='og:title' content='Zion Tech Group - AI & IT Solutions' />
        <meta property='og:description' content='Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.' />
        <meta property='og:url' content='https://ziontechgroup.com' />
        <meta property='og:site_name' content='Zion Tech Group' />
        <meta property='og:image' content='https://ziontechgroup.com/og-image.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Zion Tech Group - AI & IT Solutions' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Zion Tech Group - AI & IT Solutions' />
        <meta name='twitter:description' content='Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.' />
        <meta name='twitter:image' content='https://ziontechgroup.com/og-image.jpg' />
        
        {/* Robots */}
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1' />
        <meta name='google-site-verification' content='your-google-verification-code' />
        
        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className='antialiased'>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PerformanceMonitor />
              <PWAInstaller />
              {children}
            </AccessibilityEnhancer>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
      </div>
    </HelmetProvider>
  );
}
