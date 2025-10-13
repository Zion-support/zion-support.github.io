import Analytics from './components/Analytics';';
import React from 'react';';
import { Link } from 'react-router-dom';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';';
import Analytics from './components/Analytics';';';
export default function RootLayout({
  // TODO: Add properties
}
  // TODO: Add properties
}
  children}: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    children: React.ReactNode
  }) {;
const structuredData = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    '@context': 'https://schema.org','
    '@type': 'TechCompany','
    name: 'Zion Tech Group','
    url: 'https://ziontechgroup.com','
    logo: 'https://ziontechgroup.com/logo.png','
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.','
    foundingDate: '2020','
    numberOfEmployees: '50-100','
    industry: 'Technology','
    services: [
  // TODO: Add items
]
  // TODO: Add items
]
      'AI Solutions','
      'Quantum Computing','
      'Autonomous Systems','
      'Digital Transformation','
      'Cloud Services','
      'Automation','
      'Business Intelligence''
    ],
    contactPoint: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      '@type': 'ContactPoint','
      telephone: '+1-302-464-0950','
      contactType: 'Customer Service','
      areaServed: 'US','
      availableLanguage: 'en'},'
    sameAs: [
  // TODO: Add items
]
  // TODO: Add items
]
      'https://twitter.com/ziontechgroup','
      'https://linkedin.com/company/ziontechgroup','
    address: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    '@type': 'PostalAddress','
      streetAddress: '364 E Main St STE 1008','
      addressLocality: 'Middletown','
      addressRegion: 'DE','
      postalCode: '19709','
      addressCountry: 'US','
    offers: [
  // TODO: Add items
]
  // TODO: Add items
]
      {;
const address = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    '@type': 'PostalAddress','
    streetAddress: '364 E Main St STE 1008','
    addressLocality: 'Middletown','
    addressRegion: 'DE','
    postalCode: '19709','
    addressCountry: 'US','
    offers: [
  // TODO: Add items
]
  // TODO: Add items
]
  // TODO: Add items]
      {// TODO: Add content
  }
}
        '@type': 'Offer','
        category: 'AI Solutions','
        description: 'Enterprise AI solutions, digital transformation, and cloud services','
        price: '1500','
        priceCurrency: 'USD','
        priceSpecification: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          '@type': 'PriceSpecification','
          billingIncrement:         ,
$4}
        category: 'Digital Transformation','
        description: 'Process automation, legacy system modernization, and workflow optimization','
        price: '2500','
    serviceArea: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      '@type': 'GeoCircle','
      geoMidpoint: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        '@type': 'GeoCoordinates','
        latitude: '39.8283','
        longitude:       ,
geoRadiusgeoRadius: '1000000''
    hasOfferCatalog: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      '@type': 'OfferCatalog','
      name: 'AI Technology Services','
      itemListElement: [
  // TODO: Add items
]
  // TODO: Add items
]
          itemOffered: {
  // TODO: Add properties
}
  // TODO: Add properties
}
            '@type': 'Service','
            name: 'AI Enterprise Transformation','
            description:             ,
name$5: 'Digital Automation','
            description:             ,
name$5: 'Cloud Infrastructure','
            description:       ,
$4]
  }
  return (
  // TODO: Add parameters
)
    <html lang='en'>'
<head>
<meta charSet="UTF-8" />"
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />"
        {/* Primary meta tags */}
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />"
<meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence" />"
<meta name="theme-color" content="#4f46e5" />"
<meta name="color-scheme" content="dark light" />"
<meta name="author" content="Zion Tech Group" />"
<meta name="robots" content="index, follow" />"
<meta name="googlebot" content="index, follow" />"
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />'
<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />'
<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />'
<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />'
<link rel='manifest' href='/site.webmanifest' />'
<meta name='theme-color' content='#4f46e5' />'
        {/* Enhanced SEO meta tags */}
        <meta name='publisher' content='Zion Tech Group' />'
<meta name='copyright' content='Zion Tech Group' />'
<meta name='language' content='en' />'
<meta name='revisit-after' content='3 days' />'
<meta name='distribution' content='global' />'
<meta name='rating' content='general' />'
<meta name='format-detection' content='telephone=yes' />'
<meta name='mobile-web-app-capable' content='yes' />'
<meta name='apple-mobile-web-app-capable' content='yes' />'
<meta name='apple-mobile-web-app-status-bar-style' content='default' />'
<meta name='apple-mobile-web-app-title' content='Zion Tech Group' />'
<meta name='application-name' content='Zion Tech Group' />'
<meta name='msapplication-TileColor' content='#4f46e5' />'
<meta name='msapplication-config' content='/browserconfig.xml' />'
<link rel='canonical' href='https://ziontechgroup.com' />'
<link rel='alternate' hrefLang='en' href='https://ziontechgroup.com' />'
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />"
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />"
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />"
<link rel="dns-prefetch" href="https://www.google-analytics.com" />"
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />"
<meta property="og:url" content="https://ziontechgroup.com" />"
<meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />"
<meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />"
<meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />"
<meta property="og:image:width" content="1200" />"
<meta property="og:image:height" content="630" />"
<meta property="og:site_name" content="Zion Tech Group" />"
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />"
<meta name="twitter:url" content="https://ziontechgroup.com" />"
<meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />"
<meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />"
<meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />"
<meta name="twitter:site" content="@ziontechgroup" />"
<meta name="twitter:creator" content="@ziontechgroup" />"
        {/* Enhanced Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />'
<meta name='twitter:title' content='Zion Tech Group - AI & Technology Solutions' />'
<meta name='twitter:description' content='Transform your business with cutting-edge AI solutions and digital transformation services.' />'
<meta name='twitter:image' content='https://ziontechgroup.com/og-image.jpg' />'
<meta name='twitter:site' content='@ziontechgroup' />'
<meta name='twitter:creator' content='@ziontechgroup' />'
<script
          type='application/ld+json''
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
<body className='antialiased'>'
<ErrorBoundary>
<PerformanceMonitor />
<Analytics />
          {children}
        </ErrorBoundary></body>
</html>
  );
export default RootLayout;
        priceSpecification: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // TODO: Add content
  }
}
          '@type': 'PriceSpecification','
          billingIncrement: 'P1M''
        }
  itemOffered: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // TODO: Add content
  }
}
            '@type': 'Service','
            name: 'AI Enterprise Transformation','
            description: 'Comprehensive AI implementation strategies for enterprise organizations';';
export default SrcPage,;
}
  </script></li>
</li></li>
</li></li>
</li></li>
</li></li>
</li></li>
}}}