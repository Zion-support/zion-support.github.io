  description?: string
  keywords?: string
  canonicalUrl?: string;  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: object
  noIndex?: boolean
  noFollow?: boolean}
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  const siteName  = '
  const siteUrl  = '
  const fullOgImage  = ogImage.startsWith('http'
    ? description.substring(0, 157) + '
  const defaultStructuredData  = {"@context': 'https://schema.org',"@type': 'Organization'
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.'
    address: {"@type': 'PostalAddress'
      addressLocality: 'Middletown'
      addressRegion: 'DE'
      addressCountry: 'US'
    contactPoint: {"@type': 'ContactPoint'
      telephone: '+1-302-464-0950'
      contactType: 'customer service'
      email: 'kleber@ziontechgroup.com'
    sameAs: ["https://www.linkedin.com/company/zion-tech-group',"https://github.com/ziontechgroup'
      <meta name ="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'
      <meta name ="googlebot" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'