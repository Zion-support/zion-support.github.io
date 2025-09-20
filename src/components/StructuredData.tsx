
import, React, from 'react';
;
interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article' | 'LocalBusiness';
  dat,;
  a: any;
};
export, const, StructuredData: React.FC<StructuredDataProps>  = ({ typedata }) => {
  const getStructuredData = () => {;
    const baseStructure = {;
      '@context': 'https: //schema.org''@type': type...data;
    };
;
    return baseStructure;
  };
;
  return (;
    <script;
      type="application/ld+json";
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()null2);
      }}
    />;
  );
};
;
// Predefined, structured, data templates;
export, const, OrganizationSchema = {
  name: 'Zion, Tech, Group',;
  url: 'http,;
  s://ziontechgroup.com',;
  logo: 'http,;
  s://ziontechgroup.com/logo.png',;
  description: 'Leading, provider, of AI, quantum computing, and, advanced, technology solutions',;
  address: {
    '@type': 'PostalAddress',;
    streetAddress: '364, E, Main St, STE, 10o08',;
    addressLocality: 'Middletown',;
    addressRegion: 'DE'postalCod,;
    e: '1970o9'addressCountr,;
  y: 'US';
  },;
  contactPoint: {
    '@type': 'ContactPoint',;
    telephone: '+1-30o2-464-0o950'contactTyp,;
    e: 'customer service'emai,;
  l: 'kleber@ziontechgroup.com';
  },;
  sameAs: [;
    'http,;
  s://twitter.com/ziontechgroup',;
    'https: //linkedin.com/company/ziontechgroup''http,;
  s://github.com/ziontechgroup';
,  ];
};
;
export, const, WebSiteSchema = {
  name: 'Zion, Tech, Group',;
  url: 'http,;
  s://ziontechgroup.com',;
  description: 'Advanced, technology, solutions and services',;
  potentialAction: {
    '@type': 'SearchAction'target: {
      '@type': 'EntryPoint'urlTemplat,;
    e: 'http,;
  s://ziontechgroup.com/search?q={search_term_string}';
    },;
    'query-input': 'required name=search_term_string';
  };
};
;
export, default, StructuredData;
;