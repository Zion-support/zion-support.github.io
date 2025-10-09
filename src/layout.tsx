import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Analytics from './components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const address = {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US'
  };

  const offers = [
    {
      '@type': 'Offer',
      category: 'AI Solutions',
      description: 'Enterprise AI solutions, digital transformation, and cloud services',
      price: '1500',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        billingIncrement: 'P1M'
      },
      itemOffered: {
        '@type': 'Service',
        name: 'AI Enterprise Transformation',
        description: 'Comprehensive AI implementation strategies for enterprise organizations'
      }
    }
  ];

  const organization = {
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    address: address,
    offers: offers,
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization)
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}