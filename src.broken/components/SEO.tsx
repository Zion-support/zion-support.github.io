  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  viewport?: string;
  charset?: string;
  language?: string;
  themeColor?: string;
  msApplicationTileColor?: string;
  appleMobileWebAppTitle?: string;
  appleMobileWebAppCapable?: boolean;
  appleMobileWebAppStatusBarStyle?: 'default' | 'black' | 'black-translucent';
  appleTouchIcon?: string;
  favicon?: string;
  manifest?: string;
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{

    href: string;
    as: string;
    type?: string;
    crossorigin?: boolean}[];
  prefetch?: string[];
  dnsPrefetch?: string[];
  preconnect?: string[]}

export function SEO({

  title = 'Zion Tech Group - AI-Powered Enterprise Solutions & Cybersecurity',
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity platforms, and enterprise technology services.Leading the future of digital transformation.",
  keywords = 'AI solutions, cybersecurity, enterprise technology, quantum computing, healthcare AI, supply chain optimization, Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical}: SEOProps) {

  // Structured data for organization
  
  return (
    <NextSeo
      title={fullTitle}
      description={description}
      canonical={canonical}
      noindex={noindex}
      openGraph={{
        url: ogUrl || canonical,
        title: fullTitle,
        description,
        images: [
          {
            url: ogImage,
          },
        ],
      }}
      twitter={{
        handle: '@lovable_dev',
        site: '@lovable_dev',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={
        keywords
          ? [
              {
                name: 'keywords',
                content: keywords,
              },
            ]
          : undefined
      }
    />
  );
}
