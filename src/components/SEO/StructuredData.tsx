import Head from 'next/head';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'Organization',
  data,
}) => {
  const getDefaultData = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/logo.png',
          description: 'Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-ZION-TECH',
            contactType: 'customer service',
            availableLanguage: 'English',
          },
          sameAs: [
            'https://twitter.com/ziontechgroup',
            'https://linkedin.com/company/zion-tech-group',
            'https://github.com/zion-tech-group',
          ],
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Development',
            'Quantum Computing',
            'Blockchain Infrastructure',
            'Cloud Solutions',
            'Cybersecurity',
            'Digital Transformation',
            'Micro SaaS Development',
          ],
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Official website of Zion Tech Group - Leading technology solutions provider',
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ziontechgroup.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Technology Solutions',
          description: 'Comprehensive technology solutions including AI development, quantum computing, blockchain infrastructure, and digital transformation services.',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
          },
          serviceType: 'Technology Consulting',
          areaServed: 'Worldwide',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://ziontechgroup.com/contact',
            serviceSmsNumber: '+1-555-ZION-TECH',
          },
        };

      default:
        return data || {};
    }
  };

  const structuredData = data || getDefaultData();

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />
    </Head>
  );
};

export default StructuredData;