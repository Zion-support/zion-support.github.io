// SEO utility
export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
}

export class SEOEnhancer {
  private config: SEOConfig

  constructor(config: SEOConfig = {}) {
    this.config = config
  }

  generateMetaTags(config: SEOConfig = {}): Record<string, string> {
    const mergedConfig = { ...this.config, ...config }
    
    return {
      title: mergedConfig.title || 'Default Title',
      description: mergedConfig.description || 'Default Description',
      keywords: mergedConfig.keywords?.join(', ') || '',
      canonical: mergedConfig.canonical || '',
      'og:title': mergedConfig.title || 'Default Title',
      'og:description': mergedConfig.description || 'Default Description',
      'og:image': mergedConfig.ogImage || '',
      'og:url': mergedConfig.canonical || '',
      'twitter:card': 'summary_large_image',
      'twitter:title': mergedConfig.title || 'Default Title',
      'twitter:description': mergedConfig.description || 'Default Description',
      'twitter:image': mergedConfig.ogImage || ''
    }
  }

  updateDocumentTitle(title: string): void {
    if (typeof document !== 'undefined') {
      document.title = title
    }
  }

  updateMetaTag(name: string, content: string): void {
    if (typeof document !== 'undefined') {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
  }
}

export default SEOEnhancer