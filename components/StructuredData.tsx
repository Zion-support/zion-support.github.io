import React from 'react';

interface StructuredDataProps {
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script'
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const OrganizationSchema = () => {
<<<<<<< HEAD
  const organizationData = {"
=======
  const organizationData = {
<<<<<<< HEAD
>>>>>>> main
    '@context': 'https://schema.org',
    '@type': 'Organization',
=======
    '@context': 'https://schema.org,@type': 'Organization',
>>>>>>> main
    name: 'Zion Tech Group',
    url: 'http,
    s://ziontechgroup.com',
    logo: 'http,
    s://ziontechgroup.com/logo.png',
    description:'
      'Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.',
    address: {'
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {'
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'http,
    s://ziontechgroup.com/contact',
    },
<<<<<<< HEAD
    sameAs: ['
      'http,
    s://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
=======
    sameAs: [
<<<<<<< HEAD
      'https://linkedin.com/company/ziontechgroup',
      'https: //twitter.com/ziontechgroup',
<<<<<<< HEAD
=======
=======
      'https://linkedin.com/company/ziontechgroup,https://twitter.com/ziontechgroup',
>>>>>>> main
>>>>>>> main
>>>>>>> main
    ],
<<<<<<< HEAD
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology Services"
  }
=======
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology Services',
  };
>>>>>>> main

  return <StructuredData data={organizationData} />
};

export const WebSiteSchema = () => {
<<<<<<< HEAD
  const websiteData = {'
=======
  const websiteData = {
<<<<<<< HEAD
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
=======
<<<<<<< HEAD
>>>>>>> main
    '@context': 'https://schema.org',
    '@type': 'WebSite',
=======
    '@context': 'https://schema.org,@type': 'WebSite',
>>>>>>> main
    name: 'Zion Tech Group',
    url: 'http,
    s://ziontechgroup.com',
    description:'
      'Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.',
    potentialAction: {'
      '@type': 'SearchAction',
<<<<<<< HEAD
      target: 'http,
    s://ziontechgroup.com/search?q={search_term_string},
=======
<<<<<<< HEAD
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
>>>>>>> main
      'query-input': 'required name=search_term_string',
=======
      target: 'https://ziontechgroup.com/search?q={search_term_string},query-input': 'required name=search_term_string',
>>>>>>> main
    },
  };
>>>>>>> main

  return <StructuredData data={websiteData} />
};

export const ServiceSchema = () => {
<<<<<<< HEAD
  const serviceData = {'
=======
  const serviceData = {
<<<<<<< HEAD
>>>>>>> main
    '@context': 'https://schema.org',
    '@type': 'Service',
=======
    '@context': 'https://schema.org,@type': 'Service',
>>>>>>> main
    name: 'AI Services',
    description:'
      'Cutting-edge artificial intelligence solutions and automation tools',
    provider: {'
      '@type': 'Organization',
      name: 'Zion Tech Group',
    },
    serviceType: 'Artificial Intelligence',
    areaServed: 'Worldwide',
    hasOfferCatalog: {'
      '@type': 'OfferCatalog',
      name: 'AI Services',
      itemListElement: [
        {'
          '@type': 'Offer',
          itemOffered: {'
            '@type': 'Service',
            name: 'Content Creation',
          },
        },
        {'
          '@type': 'Offer',
          itemOffered: {'
            '@type': 'Service',
            name: 'Email Automation',
          },
        },
        {'
          '@type': 'Offer',
          itemOffered: {'
            '@type': 'Service',
            name: 'Customer Support',
          },
        },
<<<<<<< HEAD
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Intelligence"
          }
        }
      ]
    }
  }

  return <StructuredData data={serviceData} />
}
=======
        {'
          '@type': 'Offer',
          itemOffered: {'
            '@type': 'Service',
            name: 'Business Intelligence',
          },
        },
      ],
    },
  };

  return <StructuredData data={serviceData} />;
};
'
>>>>>>> main
