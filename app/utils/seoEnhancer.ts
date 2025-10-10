'use client';
/**;
 * SEO Enhancement Utilities;
 * Tools to improve search engine optimization;
 */;
// Generate meta tags;
export const generateMetaTags = (data: {
// Generate meta tags}
export const generateMetaTags = (data: {}
// title: string,;
// description: string,;
// keywords?: string;
// canonical?: string;
// ogTitle?: string;
// ogDescription?: string;
// ogImage?: string;
// twitterCard?: string;
// twitterTitle?: string;
// twitterDescription?: string;
// twitterImage?: string}) => {}
  const tags = [;
    { name: 'title', content: data.title },;
    { name: 'description', content: data.description },;
    { name: 'keywords', content: data.keywords || '' },;
    { name: 'robots', content: 'index, follow' },;
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },;
    { name: 'author', content: 'Zion Holdings' },;
    { name: 'canonical', content: data.canonical || '' },;
    { property: 'og:title', content: data.ogTitle || data.title },;
    {}
      property: '[^']*',
      content: data.ogDescription || data.description},;
    { property: 'og:image', content: data.ogImage || '/og-image.webp' },;
    { property: 'og:type', content: 'website' },;
    { property: 'og:site_name', content: 'Zion Holdings' },;
    {}
      name: '[^']*',
      content: data.twitterCard || 'summary_large_image'},;
    { name: 'twitter:title', content: data.twitterTitle || data.title },;
    {}
      name: '[^']*',
      content: data.twitterDescription || data.description},;
    {}
      name: '[^']*',
      content: data.twitterImage || data.ogImage || '[^']*',
// Generate meta tags;
export const generateMetaTags = (dat,;
  a: {/* TODO: Fix JSX expression */})}) => {/* TODO: Fix JSX expression */}
  t: data.title },;
    {/* TODO: Fix JSX expression */}
  t: data.description },;
    {/* TODO: Fix JSX expression */}
  t: data.keywords || '' },;
    {/* TODO: Fix JSX expression */}
  t: 'index, follow' },;
    {/* TODO: Fix JSX expression */}
  t: 'width=device-width, initial-scale=1' },;
    {/* TODO: Fix JSX expression */}
  t: 'Zion Holdings' },;
    {/* TODO: Fix JSX expression */}
  t: data.canonical || '' },;
    {/* TODO: Fix JSX expression */}
  t: data.ogTitle || data.title },;
    {/* TODO: Fix JSX expression */}
    },;
    {/* TODO: Fix JSX expression */}
  t: data.ogImage || '/og-image.jpg' },;
    {/* TODO: Fix JSX expression */}
  t: 'website' },;
    {/* TODO: Fix JSX expression */}
  t: 'Zion Holdings' },;
    {/* TODO: Fix JSX expression */}
    },;
    {/* TODO: Fix JSX expression */}
  t: data.twitterTitle || data.title },;
    {/* TODO: Fix JSX expression */}
    },;
    {/* TODO: Fix JSX expression */}
    }];
  return tags}
// SEO Config interface;
interface SEOConfig {
  title: string,;
  description: string,;
// SEO Config interface}
interface SEOConfig {}
  title: string;
  description: string;
  keywords: stringService Feature}
}
// Default SEO config;
const defaultSEOConfig: SEOConfig = {
  title: 'Zion Holdings';
  description: 'Leading provider of AI-powered business solutions';
  keywords: Service Feature;
// Default SEO config}
const defaultSEOConfig: SEOConfig = {}
  title: '[^']*',
  description: '[^']*',
  keywords: Service Feature,;
  canonicalUrl: '[^']*',
  ogImage: '[^']*',
  ogType: '[^']*',
  twitterCard: '[^']*',
  twitterSite: '[^']*',
  twitterCreator: '@zionholdings'}
  structuredData: {},;
  robots: '[^']*',
  language: '[^']*',
  locale: '[^']*',
  siteName: '[^']*',
  author: 'Zion Holdings'}
// Generate structured data;
export const generateStructuredData = (;) => {
  return (
    $3
  )}
  const baseStructure = {}
    '@context': 'https: //schema.org'}) => {}
  const baseStructure = {}
    '@context': '[^']*',
    '@type': data.type,;
    name: data.name;
    description: data.description;
    url: data.url || '[^']*',
    logo: data.logo || '[^']*',
    sameAs: data.sameAs || Service Feature}
  }
  return { ...baseStructure, ...data }
}
// SEO Enhancer class;
export class SEOEnhancer {
  private static instance: SEOEnhancer,;
// SEO Enhancer class}
export class SEOEnhancer {}
  private static instance: SEOEnhancer;
  private config: SEOConfig}
  constructor(config: Partial<SEOConfig> = {}) {}</SEOConfig></<<<SEOConfig>this</SEOConfig></SEOConfig>.config = { ...defaultSEOConfig, ...config }
  }
  static getInstance(config?: Partial<SEOConfig>): SEOEnhancer {}
    if (!SEOEnhancer.instance) {}
      SEOEnhancer.instance = new SEOEnhancer(config)}
    }
    return SEOEnhancer.instance}
  // Update page title;
  updateTitle(title: string) {,;
    if (typeof document !== 'undefined') {,}
      document.title = title}
    }
  }
  // Update meta description;
  updateDescription(description: string) {,}
    this.updateMetaTag('description', description)}
  }
  // Update meta keywords;
  updateKeywords(keywords: stringService Feature) {,}
    this.updateMetaTag('keywords', keywords.join(', '))}
  }
  // Update canonical URL;
  updateCanonicalUrl(url: string) {
    let canonical = document.querySelector('linkService Feature') as HTMLLinkElement;
    if (!canonical) {,;
      canonical = document.createElement('link'),;
      canonical.rel = '[^']*',
  // Update page title}
  updateTitle(title: string) {}
    if (typeof document !== 'undefined') {}
      document.title = title}
    }
  }
  // Update meta description;
  updateDescription(description: string) {}
    this.updateMetaTag('description', description)}
  }
  // Update meta keywords;
  updateKeywords(keywords: stringService Feature) {}
    this.updateMetaTag('keywords', keywords.join(', '))}
  }
  // Update canonical URL;
  updateCanonicalUrl(url: string) {}
    let canonical = document.querySelector('linkService Feature') as HTMLLinkElement;
    if (!canonical) {}
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical)}
    }
    canonical.href = url}
  // Update Open Graph tags;
  updateOpenGraph(config: Partial<SEOConfig>) {,;
,;
  // Update Open Graph tags}
  updateOpenGraph(config: Partial<SEOConfig>) {}
    if (config.publishedTime) {}
      ogTags.push({ property: 'og:published_time', content: config.publishedTime })}
    if (config.modifiedTime) {}
      ogTags.push({ property: 'og:modified_time', content: config.modifiedTime })}
    if (config.section) {}
      ogTags.push({ property: 'og:section', content: config.section })}
    if (config.tags) {}
      ogTags.push({ property: 'og:tags', content: config.tags.join(', ') })}
    ogTags.forEach(({ property, content }) => {}
      this.updateMetaTag(property, content)}
    })}
  // Update Twitter Card tags;
  updateTwitterCard(config: Partial<SEOConfig>) {,;
  // Update Twitter Card tags}
  updateTwitterCard(config: Partial<SEOConfig>) {}
    const twitterTags = [}
      { name: 'twitter:card', content: config.twitterCard || this.config.twitterCard },;
      { name: 'twitter:site', content: config.twitterSite || this.config.twitterSite },;
      { name: 'twitter:creator', content: config.twitterCreator || this.config.twitterCreator },;
      { name: 'twitter:title', content: config.title || this.config.title },;
      { name: 'twitter:description', content: config.description || this.config.description },;
      { name: 'twitter:image', content: config.ogImage || this.config.ogImage }];
    twitterTags.forEach(({ name, content }) => {}
      this.updateMetaTag(name, content)}
    })}
  // Update structured data;
  updateStructuredData(data: Record<string, unknown>) {
  // Update structured data}
  updateStructuredData(data: Record<string, unknown>) {}
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    // Remove existing structured data;
    const existingScript = document.querySelector('scriptService Feature');
    if (existingScript) {}
      existingScript.remove()}
// SEO Config interface;
interface SEOConfig {/* TODO: Fix JSX expression */}
}
// Default SEO config;
const,;
  defaultSEOConfig: SEOConfig = {/* TODO: Fix JSX expression */}
  a: {},;
  robot,;
  s: '[^']*',
  languag,;
  e: '[^']*',
  local,;
  e: '[^']*',
  siteNam,;
  e: '[^']*',
  autho,;
  r: 'Zion Holdings'}
// Generate structured data;
export const generateStructuredData = (dat,;
  a: {/* TODO: Fix JSX expression */})}) => {/* TODO: Fix JSX expression */}
  }
  return { ...baseStructure, ...data }
}
// SEO Enhancer class;
export class SEOEnhancer {/* TODO: Fix JSX expression */}
  g: Partial<SEOConfig> = {}) {/* TODO: Fix JSX expression */}
    this.config = { ...defaultSEOConfig, ...config }
  }
  static getInstance(config?: Partial<SEOConfig>): SEOEnhancer {/* TODO: Fix JSX expression */}
    }
    return SEOEnhancer.instance}
  // Update page title;
  updateTitle(titl);
  e: string) {/* TODO: Fix JSX expression */}
    }
  }
  // Update meta description;
  updateDescription(descriptio);
  n: string) {/* TODO: Fix JSX expression */}
  }
  // Update meta keywords;
  updateKeywords(keyword);
  s: stringService Feature;
    if (config.publishedTime) {/* TODO: Fix JSX expression */}
  t: config.publishedTime })}
    if (config.modifiedTime) {/* TODO: Fix JSX expression */}
  t: config.modifiedTime })}
    if (config.section) {/* TODO: Fix JSX expression */}
  t: config.section })}
    if (config.tags) {/* TODO: Fix JSX expression */}
  t: config.tags.join(', ') })}
    ogTags.forEach(({ property, content }) => {/* TODO: Fix JSX expression */}
    })}
  // Update Twitter Card tags;
  updateTwitterCard(confi);
  g: Partial<SEOConfig>) {/* TODO: Fix JSX expression */}
  t: config.twitterCard || this.config.twitterCard },;
      {/* TODO: Fix JSX expression */}
  t: config.twitterSite || this.config.twitterSite },;
      {/* TODO: Fix JSX expression */}
  t: config.twitterCreator || this.config.twitterCreator },;
      {/* TODO: Fix JSX expression */}
  t: config.title || this.config.title },;
      {/* TODO: Fix JSX expression */}
  t: config.description || this.config.description },;
      {/* TODO: Fix JSX expression */}
  t: config.ogImage || this.config.ogImage }];
    twitterTags.forEach(({ name, content }) => {/* TODO: Fix JSX expression */}
    })}
  // Update structured data;
  updateStructuredData(dat);
  a: Record<string, unknown>) {/* TODO: Fix JSX expression */}
    }
    document.head.appendChild(script)}
  // Update robots meta tag;
  updateRobots(robots: string) {,}
    this.updateMetaTag('robots', robots)}
  }
  // Update language;
  updateLanguage(language: string) {,;
    if (typeof document !== 'undefined') {,}
      document.documentElement.lang = language}
    }
  }
  // Update author;
  updateAuthor(author: string) {,}
    this.updateMetaTag('author', author)}
  }
  // Helper method to update meta tags;
  private updateMetaTag(nameOrProperty: string, content: string) {,;
    if (typeof document === 'undefined') return}
    let meta = document.querySelector(});
      `metaService Feature);
    ) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      if (nameOrProperty.startsWith('og: ') || nameOrProperty.startsWith('twitter:')) {,;
  // Update robots meta tag}
  updateRobots(robots: string) {}
    this.updateMetaTag('robots', robots)}
  }
  // Update language;
  updateLanguage(language: string) {}
    if (typeof document !== 'undefined') {}
      document.documentElement.lang = language}
    }
  }
  // Update author;
  updateAuthor(author: string) {}
    this.updateMetaTag('author', author)}
  }
  // Helper method to update meta tags;
  private updateMetaTag(nameOrProperty: string, content: string) {}
    if (typeof document === 'undefined') return;
    let meta = document.querySelector(});
      `metaService Feature;
    ) as HTMLMetaElement;
    if (!meta) {}
      meta = document.createElement('meta');
      if (nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('twitter:')) {}
        meta.setAttribute('property', nameOrProperty)}
      } else {}
        meta.setAttribute('name', nameOrProperty)}
  // Update robots meta tag;
  updateRobots(robot);
  s: string) {/* TODO: Fix JSX expression */}
  }
  // Update language;
  updateLanguage(languag);
  e: string) {/* TODO: Fix JSX expression */}
    }
  }
  // Update author;
  updateAuthor(autho);
  r: string) {/* TODO: Fix JSX expression */}
  }
  // Helper method to update meta tags;
  private updateMetaTag(nameOrPropert,;
  y: string, conten);
  t: string) {/* TODO: Fix JSX expression */}
      `metaService Feature*>
${pages;
  .map(,;
  // Generate sitemap;
  generateSitemap()}
    pages: Array<{ url: string; lastmod: string; changefreq: string; priority: string }>;
  ) {}
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>;
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
${pages}
  .map();
    page => `  <url>}
    <loc>${page.url}</loc>;
    <lastmod>${page.lastmod}</lastmod>;
    <changefreq>${page.changefreq}</changefreq>);
    <priority>${page.priority}</priority>);
  </url>);
  );
  .join('\n')}
</urlset>`;
    return sitemap}
  // Generate robots.txt;
  generateRobotsTxt(disallowPaths: stringService Feature) {}
    const robots = `User-agent: *;
Allow: /`}
${disallowPaths.map(path => `Disallow: ${path}`).join('\n')}
Sitemap: ${this.config.canonicalUrl}/sitemap.xml`;
    return robots}
  // Initialize SEO;
  initialize(config?: Partial<SEOConfig>) {
  // Initialize SEO}
  initialize(config?: Partial<SEOConfig>) {}
    if (typeof document === 'undefined') return}
    const finalConfig = { ...this.config, ...config }
    this.updateTitle(finalConfig.title);
    this.updateDescription(finalConfig.description);
    this.updateKeywords(finalConfig.keywords);
    this.updateCanonicalUrl(finalConfig.canonicalUrl);
    this.updateOpenGraph(finalConfig);
    this.updateTwitterCard(finalConfig);
    this.updateRobots(finalConfig.robots);
    this.updateLanguage(finalConfig.language);
    this.updateAuthor(finalConfig.author);
    if (Object.keys(finalConfig.structuredData).length > 0) {}
      this.updateStructuredData(finalConfig.structuredData)}
    }
  }
  // Get current SEO data;
  getCurrentSEO() {}
    if (typeof document === 'undefined') return {}
    return {
      title: document.title;
      description: document.querySelector('metaService Feature')?.getAttribute('content') || '',}
    return {}
      title: document.title,;
      description:;
        document.querySelector('metaService Feature')?.getAttribute('content') || '[^']*',
      keywords: document.querySelector('metaService Feature')?.getAttribute('content') || '[^']*',
      canonical: document.querySelector('linkService Feature')?.getAttribute('href') || ''}
    }
  }
}
// Generate structured data with type-specific properties;
export const generateAdvancedStructuredData = (;) => {
  return (
    $3
  )}
  const baseStructure = {}
    '@context': 'https: //schema.org'}) => {}
  const baseStructure = {}
    '@context': '[^']*',
    '@type': data.type,;
    name: data.name;
    description: data.description;
    url: data.url || '[^']*',
    logo: data.logo || '[^']*',
    sameAs: data.sameAs || Service Feature}
  }
  // Add type-specific properties;
  if (data.type === 'Organization') {
    return {
      ...baseStructure,;
      address: {,;
  // Add type-specific properties}
  if (data.type === 'Organization') {}
    return {}
      ...baseStructure,;
      address: {}
// '@type': '[^']*',
// addressCountry: 'US'},;
      contactPoint: {,}
      contactPoint: {}
        '@type': '[^']*',
        telephone: '[^']*',
        contactType: 'customer service'}
  // Generate sitemap;
  generateSitemap(page,;
  s: Array<{/* TODO: Fix JSX expression */}
  y: string }>);
  ) {/* TODO: Fix JSX expression */}
    <loc>${page.url}</loc>;
    <lastmod>${page.lastmod}</lastmod>;
    <changefreq>${page.changefreq}</changefreq>;
    <priority>${page.priority}</priority>`;
  </url>`;
  );
  .join(';
')}`;
</urlset>`;
    return sitemap}
  // Generate robots.txt;
  generateRobotsTxt(disallowPath);
  s: stringService Feature) {/* TODO: Fix JSX expression */}`;
  w: ${path}`).join(';
')}
Sitema,`;
  p: ${this.config.canonicalUrl}/sitemap.xml`;
    return robots}
  // Initialize SEO;
  initialize(config?: Partial<SEOConfig>) {/* TODO: Fix JSX expression */}
    const finalConfig = { ...this.config, ...config }
    this.updateTitle(finalConfig.title);
    this.updateDescription(finalConfig.description);
    this.updateKeywords(finalConfig.keywords);
    this.updateCanonicalUrl(finalConfig.canonicalUrl);
    this.updateOpenGraph(finalConfig);
    this.updateTwitterCard(finalConfig);
    this.updateRobots(finalConfig.robots);
    this.updateLanguage(finalConfig.language);
    this.updateAuthor(finalConfig.author);
    if (Object.keys(finalConfig.structuredData).length > 0) {/* TODO: Fix JSX expression */}
    }
  }
  // Get current SEO data;
  getCurrentSEO() {/* TODO: Fix JSX expression */}
    if (typeof document === 'undefined') return {}
    return {/* TODO: Fix JSX expression */}
    }
  }
}
// Generate structured data with type-specific properties;
export const generateAdvancedStructuredData = (dat,;
  a: {/* TODO: Fix JSX expression */})}) => {/* TODO: Fix JSX expression */}
  }
  // Add type-specific properties;
  if (data.type === 'Organization') {/* TODO: Fix JSX expression */}
      },;
      contactPoin,;
  t: {/* TODO: Fix JSX expression */}
      }
    }
  }
  if (data.type === 'WebSite') {}
    return {}
      ...baseStructure,;
      potentialAction: {,;
        '@type': '[^']*',
        target: {,}
      potentialAction: {}
        '@type': '[^']*',
        target: {}
          '@type': 'EntryPoint',`}
          urlTemplate: `${data.url}/search?q={search_term_string}
  if (data.type === 'WebSite') {/* TODO: Fix JSX expression */}`;
  e: `${data.url}/search?q={search_term_string}`},;
        'query-input': 'required name=search_term_string'}
    }
  }
  if (data.type === 'Article') {}
    return {}
      ...baseStructure,;
      author: {,;
        '@type': 'Organization',}
        name: 'Zion Holdings'}
      },;
      publisher: {,;
        '@type': '[^']*',
        name: '[^']*',
        logo: {,}
      author: {}
        '@type': '[^']*',
        name: 'Zion Holdings'}
      },;
      publisher: {}
        '@type': '[^']*',
        name: '[^']*',
        logo: {}
          '@type': '[^']*',
          url: data.logo || '/logo.webp'}
        }
      },;
      datePublished: new Date().toISOString(),;
      dateModified: new Date().toISOString()}
  }
  return baseStructure}
// Generate sitemap data;
export const generateSitemapData = useCallback((...args) => {
  return {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9';
      url: pages.map(page => ({),;
        loc: page.url;),;
        lastmod: page.lastModified),;
        changefreq: page.changeFrequency),;
// Generate sitemap data}
export const generateSitemapData = useCallback((...args) => {}
  return {}
    urlset: {}
      '@xmlns': '[^']*',
      url: pages.map(page => ({)}
        loc: page.url,;
        lastmod: page.lastModified,;
        changefreq: page.changeFrequency,;
        priority: page.priority}
      }))}
  }
}
// Generate robots.txt content;
export const generateRobotsTxt = useCallback((...args) => {`}
  const disallowRules = disallowPaths.map(path => `Disallow: ${path}`).join('\n');
  return `User-agent: *,;
${disallowRules}
Sitemap: ${sitemapUrl}`}
// SEO validation;
export const validateSEOData = (data: {// title: string; description: string; url: string}) => {}
  if (data.type === 'Article') {/* TODO: Fix JSX expression */}
      },;
      publishe,;
  r: {/* TODO: Fix JSX expression */}
        }
      },;
      datePublishe,;
  d: new Date().toISOString(),;
      dateModifie,;
  d: new Date().toISOString()}
  }
  return baseStructure}
// Generate sitemap data;
export const generateSitemapData = (page,;
  s: Array<{/* TODO: Fix JSX expression */}
  }>);
) => {/* TODO: Fix JSX expression */}
      }))}
  }
}
// Generate robots.txt content;
export const generateRobotsTxt = (sitemapUr,;
  l: string, disallowPath);
  s: stringService Feature) => {/* TODO: Fix JSX expression */}`;
  w: ${path}`).join(';
');`;
  return `User-agen,;
  t: *;
${disallowRules}
Sitema,`;
  p: ${sitemapUrl}`}
// SEO validation;
export const validateSEOData = (;
  const issues: stringService Feature;
  // Check title length;
  if (data.title.length < 30) {}
    issues.push('Title is too short (recommended: 30-60 characters)')}
  } else if (data.title.length > 60) {}
    issues.push('Title is too long (recommended: 30-60 characters)')}
  }
  // Check description length;
  if (data.description.length < 120) {
  // Check description length}
  if (data.description.length < 120) {}
    issues.push('Description is too short (recommended: 120-160 characters)')}
  } else if (data.description.length > 160) {}
    issues.push('Description is too long (recommended: 120-160 characters)')}
  }
  // Check URL format;
  if (!data.url.startsWith('http')) {
  // Check URL format}
  if (!data.url.startsWith('http')) {}
    issues.push('URL should start with http:// or https://')}
  }
  return issues}
// Generate breadcrumb data;
export const generateBreadcrumbData = useCallback((...args) => {
  return {
    '@context': '[^']*',
// Generate breadcrumb data}
export const generateBreadcrumbData = useCallback((...args) => {}
  return {}
    '@context': '[^']*',
    '@type': '[^']*',
    itemListElement: breadcrumbs.map((crumb, index) => ({}
      '@type': '[^']*',
      position: index + 1;
      name: crumb.name;
      item: crumb.url}
    }))}
}
// Initialize SEO enhancements;
export const initializeSEOEnhancements = useCallback((...args) => {
  if (typeof document === 'undefined') return;
  // Add structured data for organization;
  const organizationData = generateStructuredData({);
    type: 'Organization');
    name: 'Zion Holdings');
    description: 'Leading provider of AI-powered business solutions');
    url: 'https://zion.app'),;
    logo: 'https://zion.app/logo.webp'),;
// Initialize SEO enhancements}
export const initializeSEOEnhancements = useCallback((...args) => {}
  if (typeof document === 'undefined') return;
  // Add structured data for organization;
  const organizationData = generateStructuredData({)}
    type: '[^']*',
    name: '[^']*',
    description: '[^']*',
    url: '[^']*',
    logo: '[^']*',
    sameAs: ['https://twitter.com/zionholdings', 'https://linkedin.com/company/zion-holdings']}
  });
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(organizationData);
  document.head.appendChild(script)}
  if (data.title.length < 30) {
    issues.push('Title is too short (recommended: 30-60 characters)')}
  } else if (data.title.length > 60) {
    issues.push('Title is too long (recommended: 30-60 characters)')}
  }
  // Check description length;
  if (data.description.length < 120) {/* TODO: Fix JSX expression */}
  } else if (data.description.length > 160) {/* TODO: Fix JSX expression */}
  }
  // Check URL format;
  if (!data.url.startsWith('http')) {/* TODO: Fix JSX expression */}
  }
  return issues}
// Generate breadcrumb data;
export const generateBreadcrumbData = (breadcrumb,;
  s: Array<{/* TODO: Fix JSX expression */}
  }>);
) => {/* TODO: Fix JSX expression */}
    }))}
}
// Initialize SEO enhancements;
export const initializeSEOEnhancements = () => {/* TODO: Fix JSX expression */}
  });
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(organizationData);
  document.head.appendChild(script)}
"`;