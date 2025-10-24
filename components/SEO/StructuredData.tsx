<<<<<<< HEAD
import React from 'react'
"use client"
interface StructuredDataProps {
className?: string
}
}
const StructuredData: React.FC<StructuredDataProps> = ({ className = '' ,}) => {
return (</StructuredDataProps>,
    <div className={className}></div>h2>StructuredData</h2>p>This component is under construction.</p>/div>
  )
}
;
export default StructuredData;
=======
import React from 'react';
import Head from 'next/head';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Article';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'Organization',
  data
}) => {
  const defaultData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Zion Tech Group',
    description: 'Leading technology solutions for modern businesses',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    }
  };

  const structuredData = data || defaultData;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default StructuredData;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
