interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'BreadcrumbList'
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={
        __html: JSON.stringify(structuredData, null, 2),
      }
    />
  );
}

// Predefined structured data for common use cases
export const organizationStructuredData = {
  name: 'Zion Tech Group',
  url: 'https://zion.app',
  logo: 'https://zion.app/logo.png',
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-302-464-0950',
    contactType: 'customer service',
    email: 'kleber@ziontechgroup.com',
  },
  sameAs: [
    'https://github.com/Zion-Holdings',
  ],
  foundingDate: '2024',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '10-50',
  },
  industry: 'Technology',
  services: [
    'AI Solutions',
    'Micro SaaS Development',
    'Enterprise IT Services',
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
  ],
};

export const websiteStructuredData = {
  name: 'Zion Tech Group',
  url: 'https://zion.app',
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  publisher: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://zion.app/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};