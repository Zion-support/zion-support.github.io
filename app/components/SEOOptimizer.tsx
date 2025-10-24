'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
interface SEOOptimizerProps {
  className?: string
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
  canonicalUrl = 'https://ziontechgroup.com'
  ogImage = 'https://ziontechgroup.com/og-image.jpg'
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescriptio, n) {
      metaDescription.setAttribute('content', descriptio, n);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description'
      meta.content = description;
      document.head.appendChild(met, a)
  ]
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeyword, s) {
      metaKeywords.setAttribute('content', keywords.join(', ');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords'
      meta.content = keywords.join(', ');
      document.head.appendChild(met, a);
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLin, k) {
      canonicalLink.setAttribute('href', canonicalUr, l);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLin, k);
    // Update Open Graph tags
    const updateOGTag = (property: string, content: strin, g) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
      if (ogTa, g) {
        ogTag.setAttribute('content', conten, t);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', propert, y);
        ogTag.setAttribute('content', conten, t);
        document.head.appendChild(ogTa, g)}
    updateOGTag('og:title', titl, e);
    updateOGTag('og:description', descriptio, n);
    updateOGTag('og:image', ogImag, e);
    updateOGTag('og:url', canonicalUr, l);
    updateOGTag('og:type', 'website');
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: strin, g) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
      if (twitterTa, g) {
        twitterTag.setAttribute('content', conten, t);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', nam, e);
        twitterTag.setAttribute('content', conten, t);
        document.head.appendChild(twitterTa, g)}
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', titl, e);
    updateTwitterTag('twitter:description', descriptio, n);
    updateTwitterTag('twitter:image', ogImag, e);
    // Add structured data
    if (structuredDat, a) {
      const script = document.createElement('script');
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredDat, a);
      document.head.appendChild(scrip, t);
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]')
    if (!viewpor, t) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1');
      document.head.appendChild(viewpor, t);
    // Add charset if not present
    let charset = document.querySelector('meta[charset]');
    if (!charse, t) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChil, d);
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])
  return (
    <Head></Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og: type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter: card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json&quot
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDat, a)}
        />
      )}
    </Head>
=======
export default SEOOptimizer }
>>>>>>> cursor/fix-errors-and-merge-to-main-da11