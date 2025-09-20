/**
 * Advanced metadata optimization utilities
 */

export interface MetadataConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  author: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
  wordCount?: number;
}

export interface StructuredDataConfig {
  type: 'article' | 'product' | 'organization' | 'website' | 'breadcrumb' | 'faq' | 'howto';
  data: Record<string, any>;
}

export class MetadataOptimizer {
  private config: MetadataConfig;
  private structuredData: StructuredDataConfig[] = [];

  constructor(config: MetadataConfig) {
    this.config = config;
  }

  public generateOptimizedMetadata() {
    return {
      title: this.optimizeTitle(),
      description: this.optimizeDescription(),
      keywords: this.optimizeKeywords(),
      canonical: this.config.canonicalUrl,
      robots: this.generateRobotsMeta(),
      openGraph: this.generateOpenGraphMeta(),
      twitter: this.generateTwitterMeta(),
      article: this.generateArticleMeta(),
      other: this.generateAdditionalMeta(),
    };
  }

  private optimizeTitle(): string {
    let title = this.config.title;
    
    // Ensure title is within optimal length (50-60 characters)
    if (title.length > 60) {
      title = title.substring(0, 57) + '...';
    }
    
    // Add brand name if not present and there's space
    if (!title.toLowerCase().includes('zion') && title.length < 50) {
      title += ' | Zion Holdings';
    }
    
    return title;
  }

  private optimizeDescription(): string {
    let description = this.config.description;
    
    // Ensure description is within optimal length (150-160 characters)
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    }
    
    // Ensure it's at least 120 characters for better SEO
    if (description.length < 120) {
      description += ' Learn more about our AI solutions and enterprise services.';
    }
    
    return description;
  }

  private optimizeKeywords(): string {
    const keywords = [...this.config.keywords];
    
    // Add relevant AI and tech keywords if not present
    const techKeywords = ['AI', 'artificial intelligence', 'machine learning', 'automation', 'enterprise solutions'];
    techKeywords.forEach(keyword => {
      if (!keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))) {
        keywords.push(keyword);
      }
    });
    
    // Limit to 10 keywords maximum
    return keywords.slice(0, 10).join(', ');
  }

  private generateRobotsMeta(): string {
    const directives = ['index', 'follow'];
    
    // Add noindex for certain content types
    if (this.config.ogType === 'article' && this.config.publishedTime) {
      const publishedDate = new Date(this.config.publishedTime);
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      
      if (publishedDate < oneYearAgo) {
        directives.push('noarchive');
      }
    }
    
    return directives.join(', ');
  }

  private generateOpenGraphMeta() {
    return {
      title: this.config.title,
      description: this.config.description,
      url: this.config.canonicalUrl,
      siteName: 'Zion Holdings',
      images: [
        {
          url: this.config.ogImage,
          width: 1200,
          height: 630,
          alt: this.config.title,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: this.config.ogType,
      ...(this.config.publishedTime && { publishedTime: this.config.publishedTime }),
      ...(this.config.modifiedTime && { modifiedTime: this.config.modifiedTime }),
      ...(this.config.section && { section: this.config.section }),
      ...(this.config.tags && { tags: this.config.tags }),
      ...(this.config.author && { authors: [this.config.author] }),
    };
  }

  private generateTwitterMeta() {
    return {
      card: this.config.twitterCard,
      title: this.config.title,
      description: this.config.description,
      images: [this.config.ogImage],
      creator: '@ZionHoldings',
      site: '@ZionHoldings',
    };
  }

  private generateArticleMeta() {
    if (this.config.ogType !== 'article') return undefined;
    
    return {
      publishedTime: this.config.publishedTime,
      modifiedTime: this.config.modifiedTime,
      section: this.config.section,
      tags: this.config.tags,
      authors: [this.config.author],
      ...(this.config.readingTime && { readingTime: this.config.readingTime }),
      ...(this.config.wordCount && { wordCount: this.config.wordCount }),
    };
  }

  private generateAdditionalMeta() {
    return {
      'google-site-verification': 'your-google-verification-code',
      'msvalidate.01': 'your-bing-verification-code',
      'theme-color': '#0066cc',
      'color-scheme': 'light dark',
      'viewport': 'width=device-width, initial-scale=1.0',
      'format-detection': 'telephone=no',
      'referrer': 'strict-origin-when-cross-origin',
    };
  }

  public addStructuredData(config: StructuredDataConfig) {
    this.structuredData.push(config);
  }

  public generateStructuredDataScript(): string {
    const structuredDataArray = this.structuredData.map(config => {
      const baseStructure = {
        '@context': 'https://schema.org',
        '@type': this.getSchemaType(config.type),
        ...config.data,
      };

      // Add common properties
      if (config.type === 'article') {
        baseStructure.headline = this.config.title;
        baseStructure.description = this.config.description;
        baseStructure.author = {
          '@type': 'Organization',
          name: 'Zion Holdings',
        };
        baseStructure.publisher = {
          '@type': 'Organization',
          name: 'Zion Holdings',
          logo: {
            '@type': 'ImageObject',
            url: 'https://zion.app/logo.png',
          },
        };
        if (this.config.publishedTime) {
          baseStructure.datePublished = this.config.publishedTime;
        }
        if (this.config.modifiedTime) {
          baseStructure.dateModified = this.config.modifiedTime;
        }
      }

      return baseStructure;
    });

    return JSON.stringify(structuredDataArray.length === 1 ? structuredDataArray[0] : structuredDataArray);
  }

  private getSchemaType(type: string): string {
    const typeMap: Record<string, string> = {
      article: 'Article',
      product: 'Product',
      organization: 'Organization',
      website: 'WebSite',
      breadcrumb: 'BreadcrumbList',
      faq: 'FAQPage',
      howto: 'HowTo',
    };
    
    return typeMap[type] || 'WebPage';
  }

  public generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
    this.addStructuredData({
      type: 'breadcrumb',
      data: {
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      },
    });
  }

  public generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
    this.addStructuredData({
      type: 'faq',
      data: {
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    });
  }

  public generateHowToStructuredData(steps: Array<{ name: string; text: string; image?: string }>) {
    this.addStructuredData({
      type: 'howto',
      data: {
        name: this.config.title,
        description: this.config.description,
        step: steps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
          ...(step.image && {
            image: {
              '@type': 'ImageObject',
              url: step.image,
            },
          }),
        })),
      },
    });
  }

  public generateProductStructuredData(productData: {
    name: string;
    description: string;
    price?: number;
    currency?: string;
    availability?: string;
    brand?: string;
    image?: string;
    rating?: number;
    reviewCount?: number;
  }) {
    this.addStructuredData({
      type: 'product',
      data: {
        name: productData.name,
        description: productData.description,
        ...(productData.price && {
          offers: {
            '@type': 'Offer',
            price: productData.price,
            priceCurrency: productData.currency || 'USD',
            availability: productData.availability || 'InStock',
          },
        }),
        ...(productData.brand && { brand: productData.brand }),
        ...(productData.image && {
          image: {
            '@type': 'ImageObject',
            url: productData.image,
          },
        }),
        ...(productData.rating && {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: productData.rating,
            reviewCount: productData.reviewCount || 1,
          },
        }),
      },
    });
  }

  public generateOrganizationStructuredData() {
    this.addStructuredData({
      type: 'organization',
      data: {
        name: 'Zion Holdings',
        url: 'https://zion.app',
        logo: 'https://zion.app/logo.png',
        description: 'Leading AI innovation and enterprise solutions',
        foundingDate: '2020',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-0123',
          contactType: 'customer service',
        },
        sameAs: [
          'https://twitter.com/ZionHoldings',
          'https://linkedin.com/company/zion-holdings',
          'https://github.com/Zion-Holdings',
        ],
      },
    });
  }

  public generateWebsiteStructuredData() {
    this.addStructuredData({
      type: 'website',
      data: {
        name: 'Zion Holdings',
        url: 'https://zion.app',
        description: 'AI innovation and enterprise solutions',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://zion.app/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    });
  }

  public generateSitemapEntries(): Array<{
    url: string;
    lastmod: string;
    changefreq: string;
    priority: number;
  }> {
    return [
      {
        url: this.config.canonicalUrl,
        lastmod: this.config.modifiedTime || new Date().toISOString().split('T')[0],
        changefreq: this.config.ogType === 'article' ? 'monthly' : 'weekly',
        priority: this.config.ogType === 'article' ? 0.8 : 1.0,
      },
    ];
  }

  public generateMetaTags(): string {
    const metadata = this.generateOptimizedMetadata();
    const tags: string[] = [];

    // Basic meta tags
    tags.push(`<title>${metadata.title}</title>`);
    tags.push(`<meta name="description" content="${metadata.description}" />`);
    tags.push(`<meta name="keywords" content="${metadata.keywords}" />`);
    tags.push(`<meta name="robots" content="${metadata.robots}" />`);

    // Canonical URL
    if (metadata.canonical) {
      tags.push(`<link rel="canonical" href="${metadata.canonical}" />`);
    }

    // Open Graph tags
    if (metadata.openGraph) {
      tags.push(`<meta property="og:title" content="${metadata.openGraph.title}" />`);
      tags.push(`<meta property="og:description" content="${metadata.openGraph.description}" />`);
      tags.push(`<meta property="og:url" content="${metadata.openGraph.url}" />`);
      tags.push(`<meta property="og:type" content="${metadata.openGraph.type}" />`);
      tags.push(`<meta property="og:site_name" content="${metadata.openGraph.siteName}" />`);
      tags.push(`<meta property="og:image" content="${metadata.openGraph.images[0].url}" />`);
      tags.push(`<meta property="og:image:width" content="${metadata.openGraph.images[0].width}" />`);
      tags.push(`<meta property="og:image:height" content="${metadata.openGraph.images[0].height}" />`);
    }

    // Twitter Card tags
    if (metadata.twitter) {
      tags.push(`<meta name="twitter:card" content="${metadata.twitter.card}" />`);
      tags.push(`<meta name="twitter:title" content="${metadata.twitter.title}" />`);
      tags.push(`<meta name="twitter:description" content="${metadata.twitter.description}" />`);
      tags.push(`<meta name="twitter:image" content="${metadata.twitter.images[0]}" />`);
    }

    // Additional meta tags
    if (metadata.other) {
      Object.entries(metadata.other).forEach(([key, value]) => {
        tags.push(`<meta name="${key}" content="${value}" />`);
      });
    }

    // Structured data
    if (this.structuredData.length > 0) {
      tags.push(`<script type="application/ld+json">${this.generateStructuredDataScript()}</script>`);
    }

    return tags.join('\n');
  }
}