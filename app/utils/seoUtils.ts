// SEO utilities for the application
  ogImage?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}
export class SEOManager {private config: SEOConfig,}
constructor(config: SEOConfig) {,
    this.config = config;}}
public updateConfig(newConfig: Partial<SEOConfig>): void {,}}this.config = {...this.config, ...newConfig}this.applyConfig();
  }
public getConfig(): SEOConfig {}}return {...this.config}}}
private applyConfig(): void {if (typeof document === 'undefined') return;}
// Update title;
    document.title = this.config.title;
// Update meta description;
    this.updateMetaTag('description', this.config.description);
// Update meta keywords;
    this.updateMetaTag('keywords', this.config.keywords.join(', '));
// Update canonical URL;
    this.updateCanonicalUrl();
// Update Open Graph tags;
    this.updateOpenGraphTags();
// Update Twitter Card tags;
    this.updateTwitterTags();
// Update robots meta;
    if (this.config.robots) {
      this.updateMetaTag('robots', this.config.robots)}}
// Update author;
    if (this.config.author) {this.updateMetaTag('author', this.config.author)}}
// Update published time;
    if (this.config.publishedTime) {this.updateMetaTag('article:published_time', this.config.publishedTime)}}
// Update modified time;
    if (this.config.modifiedTime) {this.updateMetaTag('article:modified_time', this.config.modifiedTime)}}
// Update section;
    if (this.config.section) {this.updateMetaTag('article:section', this.config.section)}}
// Update tags;
    if (this.config.tags) {this.config.tags.forEach(tag => {)
        this.addMetaTag('article:tag', tag)}})
    }
  }
private updateMetaTag(name: string, content: string): void {,}
    if (typeof document === 'undefined') return;}let meta = document.querySelector(`meta[name="${name)}"]`) as HTMLMetaElement;
    if (!meta) {meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta)}}
    meta.content = content;
  }
private updateCanonicalUrl(): void {if (typeof document === 'undefined' || !this.config.canonicalUrl) return;}
let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical)}}
    canonical.href = this.config.canonicalUrl;
  }
private updateOpenGraphTags(): void {if (typeof document === 'undefined') return;}
const ogTags = [}{ property: 'og:title', content: this.config.ogTitle || this.config.title ,},;
      {property: 'og:description', content: this.config.ogDescription || this.config.description ,},;
      {property: 'og:type', content: this.config.ogType || 'website' ,},;
      {property: 'og:url', content: this.config.canonicalUrl || window.location.href ,},;
    ]
if (this.config.ogImage) {}ogTags.push({property: 'og:image', content: this.config.ogImage ,)})
    }
ogTags.forEach(tag => {)
    this.updateMetaTagByProperty(tag.property, tag.content)}})
  }
private updateTwitterTags(): void {if (typeof document === 'undefined') return;}
const twitterTags = [}{ name: 'twitter:card', content: this.config.twitterCard || 'summary_large_image' ,},;
      {name: 'twitter:title', content: this.config.twitterTitle || this.config.title ,},;
      {name: 'twitter:description', content: this.config.twitterDescription || this.config.description ,},;
    ]
if (this.config.twitterImage) {}twitterTags.push({name: 'twitter:image', content: this.config.twitterImage ,)})
    }
twitterTags.forEach(tag => {)
    this.updateMetaTag(tag.name, tag.content)}})
  }
private updateMetaTagByProperty(property: string, content: string): void {,}
    if (typeof document === 'undefined') return;}let meta = document.querySelector(`meta[property="${property)}"]`) as HTMLMetaElement;
    if (!meta) {meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta)}}
    meta.content = content;
  }
private addMetaTag(name: string, content: string): void {,}
    if (typeof document === 'undefined') return;
const meta = document.createElement('meta')
    meta.name = name;
    meta.content = content,
    document.head.appendChild(meta)}}
}
// Utility functions;
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {,
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
  if (cleanContent.length <= maxLength) {
    return cleanContent;}}
  return cleanContent.substring(0, maxLength - 3) + '...';
}
})
}
export const addStructuredData = (data: any): void => {,
    if (typeof document === 'undefined') return;
// Utility functions
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim()
  if (cleanContent.length <= maxLength) {
    return cleanContent
  }
  }
  return cleanContent.substring(0, maxLength - 3) + '...'
}
})
}
export const addStructuredData = (data: any): void => {
    if (typeof document === 'undefined') return
const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = createStructuredData(data),
  document.head.appendChild(script)}}
}
}
