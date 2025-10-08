import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AnalyticsProvider from './components/AnalyticsProvider';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PWAInstaller from './components/PWAInstaller';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';
import SEOHead from './components/SEOHead';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechCompany',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    services: [
      'AI Solutions',
      'Quantum Computing',
      'Autonomous Systems',
      'Digital Transformation',
      'Cloud Services',
      'Automation',
      'Business Intelligence'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-600-9898',
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
<<<<<<< HEAD
    offers: [
      {
        '@type': 'Offer',
        category: 'AI Solutions',
        description: 'Enterprise AI solutions, digital transformation, and cloud services',
        price: '1500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1500',
          priceCurrency: 'USD',
          billingIncrement: 'P1M'
        }
      },
      {
        '@type': 'Offer',
        category: 'Digital Transformation',
        description: 'Process automation, legacy system modernization, and workflow optimization',
        price: '2500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '2500',
          priceCurrency: 'USD',
          billingIncrement: 'P1M'
        }
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '39.8283',
        longitude: '-75.5795'
      },
      geoRadius: '1000000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Enterprise Transformation',
            description: 'Comprehensive AI implementation strategies for enterprise organizations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Automation',
            description: 'Process automation and workflow optimization services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Infrastructure',
            description: 'Cloud migration and infrastructure optimization services'
          }
        }
      ]
    offers: {
      '@type': 'Offer',
      category: 'AI and IT Services',
      priceRange: '$1500-$5000+',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <html lang='en'>
      <head>
        <SEOHead 
          structuredData={structuredData}
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#4f46e5' />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className='antialiased'>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PerformanceMonitor />
              <PerformanceOptimizer />
              <PWAInstaller />
              {children}
            </AccessibilityEnhancer>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
