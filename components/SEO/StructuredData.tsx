import React from 'react'

interface StructuredDataProps {
  className?: string
  type?: string
  data?: any
}

const StructuredData: React.FC<StructuredDataProps> = ({
  className = '',
  type = 'Organization',
  data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI solutions, IT services, quantum computing, autonomous systems, and enterprise technology solutions.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  }
}) => {
  return (
    <div className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </div>
  )
}

export default StructuredData