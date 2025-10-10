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
  tags?: string[]}
export class SEOManager {
  private config: SEOConfig
  constructor(config: SEOConfig) {
    this.config;

export const addStructuredData = (data: any): void => {
  if (typeof document === 'undefined') ;

return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = createStructuredData(data)
  document.head.appendChild(script)}
}