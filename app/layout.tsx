import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
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
    '@type': 'TechCompany',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
<<<<<<< HEAD
    description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Specializing in AI implementation, enterprise architecture, and cost optimization strategies.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-3d67
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
=======
    offers: {
      '@type': 'Offer',
      category: 'AI and IT Services',
      priceRange: '$1500-$5000+',
      availability: 'https://schema.org/InStock'
>>>>>>> cursor/analyze-improve-and-deploy-application-3d67
    }
  };

  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ziontechgroup.com" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#4f46e5' />
<<<<<<< HEAD
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Zion Tech Group - Leading AI and technology solutions provider specializing in enterprise AI transformation, digital automation, cloud infrastructure, and cutting-edge technology services. Transform your business with our proven AI strategies.' />
        <meta name='keywords' content='AI solutions, enterprise AI transformation, digital automation, cloud services, AI consulting, machine learning, artificial intelligence, digital transformation, technology services, Zion Tech Group, AI implementation, enterprise architecture, cost optimization, autonomous systems' />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name='googlebot' content='index, follow' />
        <meta name='bingbot' content='index, follow' />
        <meta name='author' content='Zion Tech Group' />
        <meta name='publisher' content='Zion Tech Group' />
        <meta name='copyright' content='Zion Tech Group' />
        <meta name='language' content='en' />
        <meta name='revisit-after' content='3 days' />
        <meta name='distribution' content='global' />
        <meta name='rating' content='general' />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />
        <meta name='application-name' content='Zion Tech Group' />
        <meta name='msapplication-TileColor' content='#4f46e5' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <link rel='canonical' href='https://ziontechgroup.com' />
        <link rel='alternate' hrefLang='en' href='https://ziontechgroup.com' />
        
        {/* Enhanced Open Graph tags */}
        <meta property='og:title' content='Zion Tech Group - AI & Technology Solutions' />
        <meta property='og:description' content='Transform your business with cutting-edge AI solutions, enterprise automation, and digital transformation services. Proven strategies delivering $50M+ annual savings.' />
        <meta property='og:image' content='https://ziontechgroup.com/og-image.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Zion Tech Group' />
        
        {/* Enhanced Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Zion Tech Group - AI & Technology Solutions' />
        <meta name='twitter:description' content='Transform your business with cutting-edge AI solutions and digital transformation services.' />
        <meta name='twitter:image' content='https://ziontechgroup.com/og-image.jpg' />
        <meta name='twitter:site' content='@ziontechgroup' />
        <meta name='twitter:creator' content='@ziontechgroup' />
=======
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
>>>>>>> cursor/analyze-improve-and-deploy-application-3d67
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
