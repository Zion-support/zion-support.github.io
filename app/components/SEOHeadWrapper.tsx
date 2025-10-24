import React from 'react'
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOHeadProps {
  
}

  title: strin,g,
  description: strin,g,
  keywords: string[]
}

const SEOHeadWrapper: React.FC<SEOHeadProps>
    </SEOHeadProps> = ({ title, description, keywords }) => ,{
  return (
    <Helmet>
    </Helme> </Helmet><title>
    </titl>{title}</title>
      <meta name="description" content={description} />
    </met> </meta><meta name="keywords" content={keywords.join(', ')} />
    </met> </meta></Helmet>
  )
}

export default SEOHeadWrapper;