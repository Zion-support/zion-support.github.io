'use client'
interface SEOOptimizerProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  structuredData?: object
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ()
}) =>
                {const keywordsString = keywords.join(', ')
  return (
    </SEOOptimizerProps><Helmet></Helmet>
      </Helmet><title></title>
                {title}
                </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
                {/* Open Graph */}
                <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
export default SEOOptimizer
      <meta name="twitter:image" content={ogImage} />
                {/* Additional SEO meta tags */}
                <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json"></script>
                {JSON.stringify(structuredData)}
      )}
  )
}
export default SEOOptimizer
</li>
