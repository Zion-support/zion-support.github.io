import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

export default function RootLayout({
  children,
}: {)
    children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/assets/vendor-ConSr3PY.js" as="script" crossOrigin="" />
        </li><link rel="preload" href="/assets/index-BRi0Fmgq.js" as="script" crossOrigin="" />
        </li><link rel="preload" href="/assets/index-C1QbpZNs.css" as="style" />
        </li><link rel="icon" href="/favicon.ico" />
        </li><link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        </li><link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <meta name="color-scheme" content="dark light"  />{/* Preconnect to external domains */}</meta>
        </meta><link rel="preconnect" href="https://fonts.googleapis.com" />
        </li><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""  />{/* Fonts */}</li><link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
         />{/* Structured Data */}</link>
        </link><script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com',
              logo: 'https://ziontechgroup.com/logo.webp',
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
                  name: 'Digital Transformation',)
    description: 'Business modernization and process automation',
                },
              ],
            }),
          }}
        />
      </head>
      <body className='antialiased'>
        <EnhancedSEOHead />
        <AccessibilityEnhancer />
        <PerformanceMonitor />
        <ServiceWorkerRegistration >{children}</ServiceWorkerRegistration>
      </ServiceWorkerRegistration>
    </html>
  );
}