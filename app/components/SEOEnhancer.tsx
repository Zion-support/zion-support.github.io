  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
  structuredData?: unknown;}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({"
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.'
  keywords = ['AI', 'IT solutions', 'automation', 'digital transformation', 'Zion Tech Group'
  image = '/images/og-image.jpg'
  url = typeof window !== 'undefined' ? window.location.href : '
  type = 'website'
    if (structuredData) {const script  = document.createElement('script'
      script.type = '
  const metaTags  = [{ name: 'description'
    { name: 'keywords', content: keywords.join(', '
    { name: 'author', content: 'Zion Tech Group'
    { name: 'robots', content: '_index, follow'
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0'
    { property: 'og:title'
    { property: 'og:description'
    { property: 'og:image'
    { property: 'og:url'
    { property: 'og:type'
    { property: 'og:site_name', content: 'Zion Tech Group'
    { name: 'twitter:card', content: 'summary_large_image'
    { name: 'twitter:title'
    { name: 'twitter:description'
    { name: 'twitter:image'
    { name: 'theme-color', content: '#0066cc'
    { name: 'msapplication-TileColor', content: '#0066cc'
    { name: 'apple-mobile-web-app-capable', content: 'yes'
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default'