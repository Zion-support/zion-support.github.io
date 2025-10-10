'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOOptimizerProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  structuredData?: object
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData
}) => {
  const keywordsString = keywords.join(', ')
  return (
    <Helmet> </Helmet><title>{title}</title>
      <meta> </meta><meta> </meta><meta> </meta><link>{/* Open Graph */}
      </link><meta> </meta><meta> </meta><meta> </meta><meta>{/* Twitter Card */}
      </meta><meta> </meta><meta> </meta><meta>{/* Structured Data */}
      {structuredData && (
        </meta><script>{JSON.stringify(structuredData)}
        </script></script>
      )}
    </Helmet>
  )
}
export default SEOOptimizer