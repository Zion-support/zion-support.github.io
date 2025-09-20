// SEO utilities and structured data

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

// Generate structured data for organization
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Holdings",
  "url": "https://zion.app",
  "logo": "https://zion.app/logo.png",
  "description": "Leading AI technology company providing innovative solutions for business transformation",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://twitter.com/zionholdings",
    "https://linkedin.com/company/zion-holdings"
  ]
});

// Generate structured data for website
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zion Holdings",
  "url": "https://zion.app",
  "description": "AI-powered business solutions and technology services",
  "publisher": {
    "@type": "Organization",
    "name": "Zion Holdings"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://zion.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

// Generate breadcrumb structured data
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Generate FAQ structured data
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Generate article structured data
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Holdings",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zion.app/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "image": article.image,
  "url": article.url
});

// Generate product structured data
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price?: string;
  currency?: string;
  availability?: string;
  brand?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": product.brand || "Zion Holdings"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": product.currency || "USD",
    "availability": product.availability || "https://schema.org/InStock"
  }
});

// Generate sitemap data
export const generateSitemapData = () => {
  const baseUrl = 'https://zion.app';
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/ai-2025`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-2026-breakthrough-revolution`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    }
  ];
};

// Generate robots.txt content
export const generateRobotsTxt = () => `User-agent: *
Allow: /

Sitemap: https://zion.app/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;

// Meta tag generator
export const generateMetaTags = (seoData: SEOData) => {
  const tags = [
    { name: 'title', content: seoData.title },
    { name: 'description', content: seoData.description },
    { name: 'keywords', content: seoData.keywords?.join(', ') },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: seoData.title },
    { property: 'og:description', content: seoData.description },
    { property: 'og:type', content: seoData.ogType || 'website' },
    { property: 'og:url', content: seoData.canonical },
    { property: 'og:image', content: seoData.ogImage },
    { name: 'twitter:card', content: seoData.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: seoData.title },
    { name: 'twitter:description', content: seoData.description },
    { name: 'twitter:image', content: seoData.ogImage }
  ];

  return tags.filter(tag => tag.content);
};