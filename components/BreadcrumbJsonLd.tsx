import React from 'react';
import Head from 'next/head';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  breadcrumbs: BreadcrumbItem[];
}

const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ breadcrumbs }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default BreadcrumbJsonLd;