'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  twitterCard?: string
  structuredData?: object
  children: React.ReactNode
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ()
}) =>
                {
  const [seoScore, setSeoScore] = useState(0)
  const [recommendations, setRecommendations] = useState</SEOOptimizerProps><string[]>([])
  const analyzeSEO = useCallback(() =>
                {
    if (typeof window === 'undefined') return
    let score = 0
    const newRecommendations: string[] = []
;
    // Check title length;
    if (title.length >= 30 && title.length <= 60) {
      score += 20
    } else {
      newRecommendations.push('Title should be between 30-60 characters')
    }

    // Check description length
    if (description.length >= 120 && description.length <= 160) {
      score += 20
    } else {
      newRecommendations.push('Description should be between 120-160 characters')
    }

    // Check for keywords in title
    if (keywords && title.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
      score += 15
    } else {
      newRecommendations.push('Include primary keyword in title')
    }

    // Check for keywords in description
    if (keywords && description.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
      score += 15
    } else {
      newRecommendations.push('Include primary keyword in description')
    }

    // Check for heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    if (headings.length > 0) {
      score += 10
    } else {
      newRecommendations.push('Add proper heading structure')
    }

    // Check for images with alt text
    const images = document.querySelectorAll('img')
    const imagesWithAlt = document.querySelectorAll('img[alt]')
    if (images.length === imagesWithAlt.length && images.length > 0) {
      score += 10
    } else {
      newRecommendations.push('Add alt text to all images')
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]')
    if (internalLinks.length > 0) {
      score += 10
    } else {
      newRecommendations.push('Add internal links for better SEO')
    }

    setSeoScore(score)
    setRecommendations(newRecommendations)
  }, [title, description, keywords])
  useEffect(() =>
                {
    analyzeSEO()
  }, [analyzeSEO])
  const generateStructuredData  = () => {
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": description,
      "url": canonicalUrl || (typeof window !== 'undefined' ? window.location.origin : ''),
      "logo": ogImage,
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]
    }
    return structuredData || defaultStructuredData
  }

  const _trackPageView = (config: SEOData) =>
                {,
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag()
      })
    }
  }

  const _trackPerformanceMetrics  = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (_perfData && typeof window !== 'undefined' && 'gtag' in window) {
          (window as unknown as {gtag: (command: string, action: string, parameters: Record<string, unknown>) => void}}).gtag('event', 'page_load_performance', {)
      window.addEventListener('load', () =>
                {
        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (_perfData && typeof window !== 'undefined' && 'gtag' in window) {
          (window as unknown as { gtag: (command: string, action: string, parameters: Record</string><string, unknown>) => void }).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(_perfData.loadEventEnd - _perfData.fetchStart),})
        }
      })
    }
  }
  return (
    <>
      <Helmet></Helmet>
        </Helmet><title></title>
                {title}
                </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
                <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
                {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        
        {/* Twitter Card */}
                <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
                {/* Structured Data */}
                <script type="application/ld+json"></script>
                {JSON.stringify(generateStructuredData())}
                </script>
                </Helmet>
                {children},
        <div className="seo-debug" style={{
    {process.env.NODE_ENV === 'development' && ()
      {children}
      {process.env.NODE_ENV === 'development' && (
        < className="seo-debug" style={{$2 />
          position: 'fixed',
          top: '10px',
          left: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000,
          maxWidth: '300px'
        }}>
          </div><div>SEO Score: {seoScore}/100</div>
                {recommendations.length > 0 && (
            <div></div>
              </div><div>Recommendations:</div>
              <ul style={{ margin: '5px 0', paddingLeft: '15px' }}></ul>
                {recommendations.map((rec, index) => (
                  </ul><li key={index}></li>
                {rec}
                </li>
          <div>SEO Score: {seoScore}/100
          {recommendations.length > 0 && (
            <div></div>
              <div>Recommendations:
              <ul style={{ margin: '5px 0', paddingLeft: '15px' }}></ul>
                {recommendations.map((rec, index) => (
                  <li key={index}></li>
                {rec}
                ))}
          )}
                </div>
                {/* Twitter Card Tags */}
                <meta name="twitter: card" content="summary_large_image" />,
      <meta name="twitter: title" content={title,}/>
      <meta name="twitter: description" content={description,}/>
      <meta name="twitter: image" content={ogImage,}/>
      <meta name="twitter: site" content="@ziontechgroup" />,
      <meta name="twitter: creator" content="@ziontechgroup" />,
      )},
    {/* Twitter Card Tags */}

      {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview: -1" />,
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#1a1a2e" />
      <meta name="msapplication-TileColor" content="#1a1a2e" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
                {/* Open Graph Tags */}
                <meta property="og: type" content="website" />,
      <meta property="og: title" content={title,}/>
      <meta property="og: description" content={description,}/>
      <meta property="og: url" content={canonicalUrl,}/>
      <meta property="og: image" content={ogImage,}/>
      <meta property="og: image:width" content="1200" />,
      <meta property="og: image:height" content="630" />,
      <meta property="og: image:alt" content={title,}/>
      <meta property="og: site_name" content="Zion Tech Group" />,
      <meta property="og: locale" content="en_US" />,

      <meta name="twitter:card" content="summary_large_image" / /></meta>
      <meta name="twitter:title" content={title} / /></meta>
      <meta name="twitter:description" content={description} / /></meta>
      <meta name="twitter:image" content={ogImage} / /></meta>
      <meta name="twitter:site" content="@ziontechgroup" / /></meta>
      <meta name="twitter:creator" content="@ziontechgroup" / /></meta>
                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" / /></meta>
      <meta name="googlebot" content="index, follow" / /></meta>
      <meta name="bingbot" content="index, follow" / /></meta>
      <meta name="author" content="Zion Tech Group" / /></meta>
      <meta name="publisher" content="Zion Tech Group" / /></meta>
      <meta name="copyright" content="Zion Tech Group" / /></meta>
      <meta name="language" content="en" / /></meta>
      <meta name="revisit-after" content="7 days" / /></meta>
      <meta name="distribution" content="global" / /></meta>
      <meta name="rating" content="general" / /></meta>
      <meta name="theme-color" content="#1a1a2e" / /></meta>
      <meta name="msapplication-TileColor" content="#1a1a2e" / /></meta>
      <meta name="msapplication-config" content="/browserconfig.xml" / /></meta>
                {/* Open Graph Tags */}
                <meta property="og:type" content="website" / /></meta>
      <meta property="og:title" content={title} / /></meta>
      <meta property="og:description" content={description} / /></meta>
      <meta property="og:url" content={canonicalUrl} / /></meta>
      <meta property="og:image" content={ogImage} / /></meta>
      <meta property="og:image:width" content="1200" / /></meta>
      <meta property="og:image:height" content="630" / /></meta>
      <meta property="og:image:alt" content={title} / /></meta>
      <meta property="og:site_name" content="Zion Tech Group" / /></meta>
      <meta property="og:locale" content="en_US" / /></meta>
                {/* Canonical URL */},
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />},
    {/* Structured Data */}
                <script type="application/ld+json" /></script>
                {JSON.stringify(generateStructuredData())}
                </script>
                </Helmet>
  );
};

export default AdvancedSEOOptimizer;
    {children}
                </>
  )
}
export default AdvancedSEOOptimizer</$1>
                </ul></li>
                </li></li>
