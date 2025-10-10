'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOOptimizerProps {
    title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  children: React.ReactNode
  }
const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps>= ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Professional AI and IT solutions for your business. Advanced technology, expert support, and proven results.',
  keywords = 'AI solutions, IT services, technology, business solutions, Zion Tech Group',
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
  children</SEOOptimizerProps>
}) => {</SEOOptimizerProps>
    const [seoScore, setSeoScore] = useState(0)</SEOOptimizerProps>
  const [recommendations, setRecommendations] = useState<string[]>([]);</string[]>
  const analyzeSEO = useCallback(() => {</string[]>
    if (typeof window === 'undefined') return</string[]>
    let score = 0</string[]>const newRecommendations: string[] = [],<//string[]>
    // Check title length<//string[]>
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >0) {
    score += 10
  } else {
    newRecommendations.push('Add proper heading structure')
  }
    // Check for images with alt text
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');
    if (images.length === imagesWithAlt.length && images.length > 0) {
    score += 10
  } else {
    newRecommendations.push('Add alt text to all images')
  }
    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]');
    if (internalLinks.length > 0) {
    score += 10
  } else {
    newRecommendations.push('Add internal links for better SEO')
  }
    setSeoScore(score);
    setRecommendations(newRecommendations);
  }, [title, description, keywords]);
  useEffect(() => {</= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >
    analyzeSEO()</= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >
  }, [analyzeSEO])</= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >const generateStructuredData = () => {
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": description,
      "url": canonicalUrl || window.location.origin,
      "logo": ogImage,
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]<//= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >
    }<//= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >
    return structuredData || defaultStructuredData</= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >}<//= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >
  return (<//= 160) {
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length >
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}</link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}</link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}</meta property="og:url" content={canonicalUrl} />
        {/* Twitter Card */}</meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />{/* Structured Data */} {JSON.stringify(generateStructuredData())}</meta name="twitter:image" content={ogImage} />
        </script>
      </Helmet>{children}<//Helmet>
      {process.env.NODE_ENV === 'development' && (<//Helmet>
        <div className="seo-debug" style={{
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
          <div>SEO Score: {seoScore}/100</div>{recommendations.length > 0 && (<//div>
            <div>
              <div>Recommendations: {recommendations.map((rec, index) => (</div>
                  <li key={index}>{rec}</li>))}<//li>
              </ul>
            </div>)} )}<//div>
    </React.Fragment>)<//React.Fragment>}<///React.Fragment>
export default AdvancedSEOOptimizer<//React.Fragment>
  </SEOOptimizerProps>