'use client'
import React from 'react'

interface SEOOptimizerProps {
  
}

  className?: string;
}

  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
  canonicalUrl = 'https: //ziontechgroup.com,',
  ogImage = 'https: //ziontechgroup.com/og-image.jpg,',
  structuredData;
}) => {
  useEffect(() => {
    // Update page title;
    document.title = title;
    // Update meta description;
const metaDescription = document.querySelector('meta[name=&quot;description&quot]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
  
}

      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description;
      document.head.appendChild(meta)
  ]
    // Update keywords;
const metaKeywords = document.querySelector('meta[name=&quot;keywords&quot]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', ')
    } else {
  
}

      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords.join(', ')
      document.head.appendChild(meta)
    // Update canonical URL;
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if(canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    } else {
  
}

      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink)

    }

    // Update Open Graph tags;
const updateOGTag = ($2: any) => ,{,
      let ogTag = document.querySelector(`meta[property=&quot;${property}&quot]`)
      if (ogTag) {
        ogTag.setAttribute('content', content)
      } else {
  
}

        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        ogTag.setAttribute('content', content)
        document.head.appendChild(ogTag)}

    updateOGTag('og: title', title,)
    updateOGTag('og: description', description,)
    updateOGTag('og: image', ogImage,)
    updateOGTag('og: url', canonicalUrl,)
    updateOGTag('og: type', 'website')
    // Update Twitter Card tag,s;
const updateTwitterTag = ($2: any) => ,{,
      let twitterTag = document.querySelector(`meta[name=&quot;${name}&quot]`)
      if (twitterTag) {
        twitterTag.setAttribute('content', content)
      } else {
  
}

        twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        twitterTag.setAttribute('content', content)
        document.head.appendChild(twitterTag)}

    updateTwitterTag('twitter: card', 'summary_large_image',)
    updateTwitterTag('twitter: title', title,)
    updateTwitterTag('twitter: description', description,)
    updateTwitterTag('twitter: image', ogImage,)
    // Add structured data;
    if(structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    // Add viewport meta tag if not present;
    let viewport = document.querySelector('meta[name="viewport"]')
    if(!viewport) {
      viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      viewport.setAttribute('content', 'width=device-width, initial-scale=1')
      document.head.appendChild(viewport)
    // Add charset if not present;
    let charset = document.querySelector('meta[charset]')
    if(!charset) {
      charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.insertBefore(charset, document.head.firstChild)
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])
  return (
    <Head>
    </Hea> </Head><title>
    </titl>{title}</title>
      <meta name=&quot;description&quot; content={description} />
    </met> </meta><meta name=&quot;keywords&quot; content={keywords.join(', ')} />
    </met> </meta><link rel=&quot;canonical&quot; href={canonicalUrl} />
    </lin>{/* Open Graph */}

      </link><meta property=&quot;og: title&quo,t; content={title} />
    </met> </meta><meta property=&quot;og: description&quo,t; content={description} />
    </met> </meta><meta property=&quot;og: image&quo,t; content={ogImage} />
    </met> </meta><meta property=&quot;og: url&quo,t; content={canonicalUrl} />
    </met> </meta><meta property=&quot;og: type&quo,t; content=&quot;website&quot; />
    </met>
      {/* Twitter Card */}

      <meta name=&quot;twitter: card&quo,t; content=&quot;summary_large_image&quot; />
    </met>
      <meta name=&quot;twitter: title&quo,t; content={title} />
    </met> </meta><meta name=&quot;twitter: description&quo,t; content={description} />
    </met> </meta><meta name=&quot;twitter: image&quo,t; content={ogImage} />
    </met>{/* Additional SEO meta tags */}

      </meta><meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
    </met> </meta><meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
    </met> </meta><meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
    </met> </meta><meta charSet=&quot;UTF-8&quot; />
    </met>{/* Structured Data */}

      {structuredData && (
        </meta><script;
          type=&quot;application/ld+json&quot;
export default SEOOptimizer;