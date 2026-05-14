import { AI_LAB_TOOLS, type AILabTool } from '../ai-lab/ai-lab-tools';
import { whatsNewItems } from '../features/featuredItems';
import { allServices, getPopularServices } from '../data/servicesData';

const siteUrl = 'https://ziontechgroup.com';
const companyName = 'Zion Tech Group';
const companyDescription =
  'AI-powered solutions, cybersecurity, and digital transformation services. We help businesses scale with intelligent automation, cloud infrastructure, and cutting-edge AI tools.';

// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyName,
  description: companyDescription,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      availableLanguage: ['English'],
      areaServed: 'US',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'sales',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      email: 'kleber@ziontechgroup.com',
      contactType: 'technical support',
      availableLanguage: ['English'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US',
  },
  sameAs: [
    `${siteUrl}/twitter`,
    `${siteUrl}/linkedin`,
    `${siteUrl}/github`,
    `${siteUrl}/youtube`,
  ],
  areaServed: ['United States', 'Worldwide'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI and IT Services',
    itemListElement: allServices.map((s, i) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
        url: `${siteUrl}${s.href}`,
        category: s.category,
      },
      priceCurrency: 'USD',
      lowPrice: s.pricing.basic,
      highPrice: s.pricing.enterprise,
    })),
  },
};

// WebSite schema with search action
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: companyName,
  url: siteUrl,
  description: companyDescription,
  publisher: {
    '@type': 'Organization',
    name: companyName,
    url: siteUrl,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: ['en-US', 'en'],
};

// ItemList schema for all developer tools
const toolItems = whatsNewItems.map((item, i) => ({
  '@type': 'ListItem',
  position: i + 1,
  item: {
    '@type': 'WebPage',
    name: item.title,
    description: item.description,
    url: `${siteUrl}${item.href}`,
    about: {
      '@type': 'Thing',
      name: item.title,
    },
  },
}));

// AI Lab tools ItemList
const aiLabItems = AI_LAB_TOOLS.map((tool, i) => ({
  '@type': 'ListItem',
  position: i + 1,
  item: {
    '@type': 'WebPage',
    name: tool.title,
    description: tool.shortDescription,
    url: `${siteUrl}${tool.href}`,
    about: {
      '@type': 'Thing',
      name: tool.title,
      additionalType: tool.category,
    },
  },
}));

// Service pages ItemList
const serviceItems = allServices.map((s, i) => ({
  '@type': 'ListItem',
  position: i + 1,
  item: {
    '@type': 'Service',
    name: s.title,
    description: s.description,
    url: `${siteUrl}${s.href}`,
    serviceType: s.category,
    areaServed: 'Worldwide',
    provider: {
      '@type': 'Organization',
      name: companyName,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${s.title} Plans`,
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Basic',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: s.pricing.basic,
            priceCurrency: 'USD',
            billingIncrement: 1,
          },
        },
        {
          '@type': 'Offer',
          name: 'Pro',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: s.pricing.pro,
            priceCurrency: 'USD',
            billingIncrement: 1,
          },
        },
        {
          '@type': 'Offer',
          name: 'Enterprise',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: s.pricing.enterprise,
            priceCurrency: 'USD',
            billingIncrement: 1,
          },
        },
      ],
    },
  },
}));

// FAQ schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What AI services does Zion Tech Group offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Zion Tech Group offers ${allServices.length}+ AI and IT services including ${allServices
          .slice(0, 5)
          .map((s) => s.title)
          .join(', ')}, and more. Each service includes Basic, Pro, and Enterprise pricing tiers.`,
      },
    },
    {
      '@type': 'Question',
      name: 'How many free AI tools are available on the site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Zion Tech Group provides ${
          whatsNewItems.length + AI_LAB_TOOLS.length
        } free AI-powered tools covering categories like data conversion, code intelligence, security, SEO, accessibility, and developer productivity. All tools run client-side in the browser — no API keys or accounts required.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does Zion Tech Group serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zion Tech Group serves businesses across technology, finance, healthcare, e-commerce, and enterprise sectors with AI-powered solutions for automation, cybersecurity, cloud infrastructure, data engineering, and mobile development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Zion Tech Group for a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `You can reach Zion Tech Group by phone at +1 302 464 0950 or email at kleber@ziontechgroup.com. The office is located at 364 E Main St STE 1008, Middletown, DE 19709.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Zion AI tools different from other AI tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zion AI tools are built with a 12-provider LLM fallback chain (Ollama, Groq, Gemini, HuggingFace, Cerebras, Cloudflare, DeepSeek, Mistral, Together AI, Fireworks, Cohere, OpenRouter) ensuring resilience against rate limits. They feature per-provider cooldowns, exponential backoff with jitter, and run autonomously with self-healing capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the site use schema markup for SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Zion Tech Group uses comprehensive JSON-LD structured data including Organization, WebSite, ItemList, FAQPage, Service, and BreadcrumbList schemas to enhance search engine understanding and enable rich results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AI Lab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The AI Lab is an experimental zone featuring ${
          AI_LAB_TOOLS.length
        } cutting-edge AI tools including autonomous agents, ROI calculators, competitive intelligence, SEO audit agents, code quality analyzers, and business intelligence dashboards. Tools are categorized by maturity: Live, Experimental, and Planned.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data safe when using Zion tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Zion tools run entirely client-side in your browser — your data never leaves your device. For server-side AI features, data is processed securely and not stored. The site employs HTTPS, Content Security Policy headers, and follows security best practices.',
      },
    },
  ],
};

// BreadcrumbList schema for key pages
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AI Tools',
      item: `${siteUrl}/ai-tools`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI Lab',
      item: `${siteUrl}/ai-lab`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Services',
      item: `${siteUrl}/services`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Automation',
      item: `${siteUrl}/automation`,
    },
  ],
};

// Popular tools for ItemList
const popularTools = [...whatsNewItems, ...AI_LAB_TOOLS.filter((t) => t.status === 'live')].slice(0, 50);
const popularToolItems = popularTools.map((t, i) => ({
  '@type': 'ListItem',
  position: i + 1,
  item: {
    '@type': 'WebPage',
    name: 'title' in t ? t.title : '',
    description: 'shortDescription' in t ? t.shortDescription : t.description,
    url: `${siteUrl}${'href' in t ? t.href : ''}`,
  },
}));

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'All AI Developer Tools',
            description:
              'Browse all free AI-powered developer tools from Zion Tech Group including JSON converters, code analyzers, SEO optimizers, security tools, and productivity utilities.',
            url: `${siteUrl}/ai-tools`,
            mainEntity: {
              '@type': 'ItemList',
              name: 'AI Developer Tools',
              numberOfItems: whatsNewItems.length,
              itemListElement: toolItems,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'AI Lab — Experimental AI Tools',
            description:
              `Explore ${AI_LAB_TOOLS.length} autonomous AI tools for business intelligence, automation, SEO, code quality, and more. Built with a 12-provider LLM fallback chain for maximum resilience.`,
            url: `${siteUrl}/ai-lab`,
            mainEntity: {
              '@type': 'ItemList',
              name: 'AI Lab Tools',
              numberOfItems: AI_LAB_TOOLS.length,
              itemListElement: aiLabItems,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'AI Services & Solutions',
            description: 'Professional AI and IT services with flexible pricing for businesses of all sizes.',
            url: `${siteUrl}/services`,
            numberOfItems: allServices.length,
            itemListElement: serviceItems,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}