import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AnalyticsProvider from './components/AnalyticsProvider';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import EnhancedSEOOptimizer from './components/EnhancedSEOOptimizer';
import PWAInstaller from './components/PWAInstaller';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';

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
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
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
    }
  };

  // Enhanced SEO data
  const seoData = {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
    keywords: ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'business intelligence'],
    canonical: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    twitterCard: 'summary_large_image',
    structuredData,
    robots: 'index, follow',
    language: 'en',
    author: 'Zion Tech Group',
    publisher: 'Zion Tech Group'
  };

  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Critical CSS */}
        <link rel="preload" href="/css/critical.css" as="style" />
        <link rel="stylesheet" href="/css/critical.css" />
        
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#4f46e5' />
        
        {/* Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => console.log('SW registered'))
                    .catch(error => console.log('SW registration failed'));
                });
              }
            `
          }}
        />
      </head>
      <body className='antialiased'>
        <EnhancedErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
          <AnalyticsProvider>
            <EnhancedAccessibilityEnhancer>
              <EnhancedSEOOptimizer seoData={seoData}>
                <PerformanceMonitor />
                <PerformanceOptimizer />
                <PWAInstaller />
                {children}
              </EnhancedSEOOptimizer>
            </EnhancedAccessibilityEnhancer>
          </AnalyticsProvider>
        </EnhancedErrorBoundary>
        
        {/* Performance monitoring script */}
        <script src="/js/performance-monitor.js" defer></script>
      </body>
    </html>
  );
}
