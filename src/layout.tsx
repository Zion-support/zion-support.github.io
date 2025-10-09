
import Analytics from './components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
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
          billingIncrement: 'P1M'
        },
        itemOffered: {
          '@type': 'Service',
          name: 'AI Enterprise Transformation',
          description: 'Comprehensive AI implementation strategies for enterprise organizations'
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}