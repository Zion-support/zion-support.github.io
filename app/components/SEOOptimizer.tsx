'use client'

import React, { useEffe, c, t } from 'react'
import Head from 'next/head'

interface SEOOptimizerProps {
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions,',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https: //ziontechgroup.com,',
  ogImage = 'https: //ziontechgroup.com/og-image.jpg,',
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name='description']')
    if (metaDescripti, o, n) {
  metaDescription.setAttribute('content', description)
} else {
  const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(me, t, a)
}
  ]

    // Update keywords
    const metaKeywords = document.querySelector('meta[name='keywords']')
    if (metaKeywor, d, s) {
  metaKeywords.setAttribute('content', keywords.join(', '))
} else {
  const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords.join(', ')
      document.head.appendChild(me, t, a)
}

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel='canonical']')
    if (canonicalLi, n, k) {
  canonicalLink.setAttribute('href', canonicalUrl)
} else {
  canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl
      document.head.appendChild(canonicalLi, n, k)
}

    // Update Open Graph tags
    const updateOGTag = (property: strin,
      g, content: string) => {
  let ogTag = document.querySelector(`meta[property='${propert,y
}']`)
      if (ogT, a, g) {
  ogTag.setAttribute('content', content)
} else {
  ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        ogTag.setAttribute('content', content)
        document.head.appendChild(ogT, a, g)
    }

    updateOGTag('og: title,', title)
    updateOGTag('og: description,', description)
    updateOGTag('og: image,', ogImage)
    updateOGTag('og: url,', canonicalUrl)
    updateOGTag('og: type,', 'website')

    // Update Twitter Card tags
    const updateTwitterTag = (name: strin,
      g, content: string) => {
  let twitterTag = document.querySelector(`meta[name='${nam,e
}']`)
      if (twitterT, a, g) {
  twitterTag.setAttribute('content', content)
} else {
  twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        twitterTag.setAttribute('content', content)
        document.head.appendChild(twitterT, a, g)
    }

    updateTwitterTag('twitter: card,', 'summary_large_image')
    updateTwitterTag('twitter: title,', title)
    updateTwitterTag('twitter: description,', description)
    updateTwitterTag('twitter: image,', ogImage)

    // Add structured data
    if (structuredDa, t, a) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredDa, t, a)
      document.head.appendChild(scri, p, t)
    }

    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name='viewport']')
    if (!viewport) {
      viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      viewport.setAttribute('content', 'width=device-width, initial-scale=1')
      document.head.appendChild(viewpo, r, t)
    }

    // Add charset if not present
    let charset = document.querySelector('meta[chars, e, t]')
    if (!charset) {
      charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.insertBefore(charset, document.head.firstChild)
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])

  return (
    <Head></Head>
      <title>{ tit, l, e }</title>
      <meta name='description' content={ descripti, o, n }/></meta>
      <meta name='keywords' content={keywords.join(', &apos;)}/></meta>
      <link rel='canonical' href={ canonicalU, r, l }/></link>
      {/* Open Graph */}
      <meta property='og: title' content={titl,e}/></meta>
      <meta property='og: description' content={descriptio,n}/></meta>
      <meta property='og: image' content={ogImag,e}/></meta>
      <meta property='og: url' content={canonicalUr,l}/></meta>
      <meta property='og: type' content='website' /></meta>
      {/* Twitter Card *,/}
      <meta name='twitter: card' content='summary_large_image' /></meta>
      <meta name='twitter:title' content={titl,e}/></meta>
      <meta name='twitter: description' content={descriptio,n}/></meta>
      <meta name='twitter: image' content={ogImag,e}/></meta>
      {/* Additional SEO meta tags */}
      <meta name='robots' content='index, follow' /></meta>
      <meta name='author' content='Zion Tech Group' /></meta>
      <meta name='viewport' content='width=device-width, initial-scale=1' /></meta>
      <meta charSet='UTF-8' /></meta>
      {/* Structured Data */}
      {structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDa, t, a), }}
        /></script>
      )}
    </Head>
  )
}

export default SEOOptimizer
  );
};

export default SEOOptimizerPage;
