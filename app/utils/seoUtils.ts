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
