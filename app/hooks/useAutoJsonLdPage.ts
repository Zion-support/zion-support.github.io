'use client';

import React, { useEffect, useState } from 'react';
import { usePathname} from 'next/navigation';
import JsonLd from '../components/JsonLd';

export function useAutoJsonLdPage() {
  const pathname = usePathname();

  const siteUrl = 'https://ziontechgroup.com';
  const orgName = 'Zion Tech Group';
  const fullUrl = `${siteUrl}${pathname || '/'}`;

  // Keep the server snapshot and the first browser render identical.
  const [pageMetadata, setPageMetadata] = useState({
    title: orgName,
    description: `${orgName} service page.`,
  });
  useEffect(() => {
    setPageMetadata({
      title: document.title.replace(/\s*\|.*$/, '').trim() || orgName,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content')
        || `${orgName} service page.`,
    });
  }, [pathname]);
  const { title, description } = pageMetadata;

  const pathSegments = (pathname || '/').split('/').filter(Boolean);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: fullUrl,
    name: title,
    description,
  };

  if (pathSegments.length > 0) {
    const items = pathSegments.map((segment, index) => {
      const urlSegment = `/${pathSegments.slice(0, index + 1).join('/')}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: decodeURIComponent(segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())),
        item: `${siteUrl}${urlSegment}/`,
      };
    });
    (schema as Record<string, unknown>)['breadcrumb'] = {
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  }

  return schema;
}

export function AutoJsonLd() {
  const schema = useAutoJsonLdPage();
  return React.createElement(JsonLd, { data: schema });
}
