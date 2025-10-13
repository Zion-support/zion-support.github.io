<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-61d5

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
interface StructuredDataProps {
<<<<<<< HEAD
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function StructuredData({ className = '', children }: StructuredDataProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function StructuredData({ className = '', children, ...props }: StructuredDataProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          "name": data.name || "Zion Tech Group",
          "url": data.url || "https://ziontechgroup.com",
          "logo": data.logo || "https://ziontechgroup.com/logo.svg",
          "description": data.description || "Leading provider of AI and IT solutions",
          "address": data.address || {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": data.contactPoint || {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": data.sameAs || [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
        };

      case 'WebSite':
        return {
          ...baseData,
          "name": data.name || "Zion Tech Group",
          "url": data.url || "https://ziontechgroup.com",
          "potentialAction": data.potentialAction || {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'WebPage':
        return {
          ...baseData,
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "isPartOf": data.isPartOf || {
            "@type": "WebSite",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com"
          },
          "breadcrumb": data.breadcrumb
        };

      case 'Service':
        return {
          ...baseData,
          "name": data.name,
          "description": data.description,
          "provider": data.provider || {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "areaServed": data.areaServed || "US",
          "hasOfferCatalog": data.hasOfferCatalog
        };

      case 'FAQPage':
        return {
          ...baseData,
          "mainEntity": data.mainEntity || []
        };

      case 'BreadcrumbList':
        return {
          ...baseData,
          "itemListElement": data.itemListElement || []
        };

      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData(), null, 2)}
      </script>
    </Helmet>
  );
};
=======

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

export default StructuredData;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
};

export default StructuredData;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return JSON.stringify(baseData);
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {getStructuredData()}
      </script>
    </Helmet>
  );
}

// Predefined structured data templates
export const organizationSchema = {
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/logo.png',
  description: 'Leading provider of AI-powered solutions, software development, and IT services.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://twitter.com/ziontechgroup',
    'https://linkedin.com/company/ziontechgroup',
    'https://github.com/ziontechgroup'
  ]
};

export const websiteSchema = {
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  description: 'Advanced AI and IT Solutions',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ziontechgroup.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const serviceSchema = (serviceName: string, description: string) => ({
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group'
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://ziontechgroup.com/contact'
  }
});
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
=======
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-61d5
