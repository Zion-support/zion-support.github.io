import Analytics from './components/Analytics';;
import React from 'react';;
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';;
import Footer from '../components/Footer';;
import Analytics from './components/Analytics';;
export default function RootLayout({;
children}: {
children: React.ReactNode
  }) {;
const structuredData={'@context': 'https: //schema.org'},
    '@type': 'TechCompany',;,
name: 'Zion Tech Group',;,
url: 'https://ziontechgroup.com',;,
logo: 'https://ziontechgroup.com/logo.png',;,
description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',;,
foundingDate: '2020',;,
numberOfEmployees: '50-100',;,
industry: 'Technology',;,
services: [
      'AI Solutions',
      'Quantum Computing',
      'Autonomous Systems',
      'Digital Transformation',
      'Cloud Services',
      'Automation',
      'Business Intelligence'
    ],;,
contactPoint: {
      '@type': 'ContactPoint',;,
telephone: '+1-302-464-0950',;,
contactType: 'Customer Service',;,
areaServed: 'US',;,
availableLanguage: 'en'},;,
sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',;,
address: {
    '@type': 'PostalAddress',;,
streetAddress: '364 E Main St STE 1008',;,
addressLocality: 'Middletown',;,
addressRegion: 'DE',;,
postalCode: '19709',;,
addressCountry: 'US',;,
offers: [
      {;
const address={'@type': 'PostalAddress'},;,
streetAddress: '364 E Main St STE 1008',;,
addressLocality: 'Middletown',;,
addressRegion: 'DE',;,
postalCode: '19709',;,
addressCountry: 'US',;,
offers: [
  // TODO: Add items]
      {// TODO: Add content
  }
}
        '@type': 'Offer',;,
category: 'AI Solutions',;,
description: 'Enterprise AI solutions, digital transformation, and cloud services',;,
price: '1500',;,
priceCurrency: 'USD',;,
priceSpecification: {
          '@type': 'PriceSpecification',;,
billingIncrement:         ,;
$4}
        category: 'Digital Transformation',;,
description: 'Process automation, legacy system modernization, and workflow optimization',;,
price: '2500',;,
serviceArea: {
      '@type': 'GeoCircle',;,
geoMidpoint: {
        '@type': 'GeoCoordinates',;,
latitude: '39.8283',;,
longitude:       ,;,
geoRadiusgeoRadius: '1000000',
hasOfferCatalog: {
      '@type': 'OfferCatalog',;,
name: 'AI Technology Services',;,
itemListElement: [,
itemOffered: {
            '@type': 'Service',;,
name: 'AI Enterprise Transformation',;,
description:             ,;,
name$5: 'Digital Automation',;,
description:             ,;,
name$5: 'Cloud Infrastructure',;,
description:       ,;
$4]
  }
  return (;
        {/* Primary meta tags */}
        {/* Favicons */}
        {/* Enhanced SEO meta tags */}
        {/* Resource hints for better performance */}
        {/* Open Graph / Facebook */}
        {/* Twitter */}
        {/* Enhanced Twitter Card tags */}
type='application/ld+json';
dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData)}}}
        />
          {children}
  );
export default RootLayout;,
priceSpecification: {
    // TODO: Add content
  }
}
          '@type': 'PriceSpecification',;,
billingIncrement: 'P1M'
        }
  itemOffered: {
    // TODO: Add content
  }
}
            '@type': 'Service',;,
name: 'AI Enterprise Transformation',;,
description: 'Comprehensive AI implementation strategies for enterprise organizations';
export default SrcPage,
}
</li></li></li></li></li></li></li></li></li></li></li>