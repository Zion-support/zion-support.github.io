export default function StructuredData() {
  const tools = [
    {
      name: 'Zion Tech Group AI Tools',
      description: 'Free AI-powered developer tools including JSON to TypeScript converter, CSS minifier, regex tester, API request builder, and more.',
      url: 'https://ziontechgroup.com',
    },
    {
      name: 'AI Tools Directory',
      description: 'A comprehensive directory of 89+ free AI tools for developers, designers, and teams. Categories include Data Conversion, Code Intelligence, Security & Crypto, DevOps, Design & UI, SEO, Accessibility, and more.',
      url: 'https://ziontechgroup.com/ai-tools',
    },
    {
      name: 'AI Labs',
      description: 'Experimental AI-powered business intelligence tools including ROI calculators, opportunity radar, growth loop designer, and autonomous decision-making systems.',
      url: 'https://ziontechgroup.com/ai-lab',
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services with 89+ free developer tools.',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        }),
      }}
    />
  );
}