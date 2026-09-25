'use client';

export default function BreadcrumbSchema({ path, title, serviceName, serviceDescription }: { path?: string; title?: string; serviceName?: string; serviceDescription?: string }) {
  const url = `https://ziontechgroup.com${path || ''}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ziontechgroup.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://ziontechgroup.com/services/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title || serviceName || 'Service',
        item: url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
