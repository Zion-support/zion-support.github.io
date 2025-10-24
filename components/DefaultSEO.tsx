import React from 'react'

interface DefaultSEOProps {
  className?: string
  title?: string
  description?: string
  keywords?: string
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({ 
  className = '',
  title = 'Zion Tech Group - AI Solutions & IT Services',
  description = 'Leading provider of AI solutions, IT services, quantum computing, autonomous systems, and enterprise technology solutions.',
  keywords = 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology'
}) => {
  return (
    <div className={className}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </div>
  )
}

export default DefaultSEO