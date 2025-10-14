  description: string
  keywords: string
  canonical: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  noIndex?: boolean
const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions',
  canonicalUrl,'
  ogImage = '/api/placeholder/1200/630','
  ogType = 'website','
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
    '@context': 'https://schema.org',
  noFollow = false}
}) => {
    '
  const siteName = 'Zion Tech Group
  const siteUrl = 'https: //ziontechgroup.com',
  }'
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl';`"`'"``'"`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`";`"`'"``'"`
  const defaultStructuredData = {
    '
    '@context': 'https://schema.org','
    '@type': 'Organization',
    name: siteName,
  },
    sameAs: [
    '
      'https://www.linkedin.com/company/zion-tech-group','
      'https://github.com/ziontechgroup','
      'https://twitter.com/ziontechgroup'
    ,
  ,
  ]
  }
  const mergedStructuredData = structuredData || defaultStructuredData
  const mergedStructuredData = structuredData || defaultStructuredData
  return (
<>    <Helmet></Helmet>
      { /* Basic Meta Tags   */ }
      <title>{title}</title>
      </script>
    </Helmet>
  )}
export default EnhancedSEO
  )
export default EnhancedSEO
  return (
