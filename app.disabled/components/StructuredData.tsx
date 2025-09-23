<<<<<<< HEAD
"use client";

import React from 'react';

<<<<<<< HEAD
type StructuredDataProps = {
	type: string;
	data: Record<string, unknown>;
=======
interface StructuredDataProps {
  type: string;
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6fc7
};

export default function StructuredData({ type, data }: StructuredDataProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": type,
		...data,
	};
	return (
		<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
	);
}

export const organizationSchema = {
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  logo: 'https://ziontechgroup.com/images/logo.png',
  description: 'Leading provider of cutting-edge AI solutions, cloud computing, and digital transformation services.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service'
  }
};

export const websiteSchema = {
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  description: 'Leading provider of cutting-edge AI solutions, cloud computing, and digital transformation services.',
  publisher: {
    '@type': 'Organization',
    name: 'Zion Tech Group'
  }
};

export const serviceSchema = {
  '@type': 'Service',
  name: 'AI Solutions & Digital Transformation',
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group'
  },
  description: 'Comprehensive AI solutions, cloud computing, and digital transformation services to transform your business.',
  serviceType: 'Technology Services'
};
=======
'use client';

import React from 'react';

interface StructuredDataProps {
	type: string;
	data: unknown;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': type,
		...data,
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6ba1
