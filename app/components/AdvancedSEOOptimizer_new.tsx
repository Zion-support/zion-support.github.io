'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  children: React.ReactNode;
const AdvancedSEOOptimizerNew: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Professional AI and IT solutions for your business. Advanced technology, expert support, and proven results.',
  keywords = 'AI solutions, IT services, technology, business solutions, Zion Tech Group',
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
  children</SEOOptimizerProps>
  const [seoScore, setSeoScore] = useState(0);</SEOOptimizerProps>
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const analyzeSEO = useCallback(() => {
    if (typeof window === 'undefined') return;
    let score = 0;
    const newRecommendations: string[] = [];</string>
    // Check title length</string>
    if (title.length >= 30 && title.length <= 60) {
      score += 20;
      newRecommendations.push('Title should be between 30-60 characters');
    // Check description length;
    if (description.length >= 120 && description.length <= 160) {
      score += 20;
      newRecommendations.push('Description should be between 120-160 characters');
    // Check for keywords in title;
    if (keywords && title.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
      score += 15;
      newRecommendations.push('Include primary keyword in title');
    // Check for keywords in description;
    if (keywords && description.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
      score += 15;
      newRecommendations.push('Include primary keyword in description');
    // Check for heading structure;
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      score += 10;
      newRecommendations.push('Add proper heading structure');
    // Check for images with alt text;
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');
    if (images.length === imagesWithAlt.length && images.length > 0) {
      score += 10;
      newRecommendations.push('Add alt text to all images');
    // Check for internal links;
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]');
    if (internalLinks.length > 0) {
      score += 10;
      newRecommendations.push('Add internal links for better SEO');
    setSeoScore(score);
    setRecommendations(newRecommendations);
  useEffect(() => {
    analyzeSEO();
  const generateStructuredData = () => {
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
    return structuredData || defaultStructuredData;
  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <titl, e>{titl, e}</titl, e>
        <meta, name="descriptio, n" conten, t={descriptio, n} />
        <meta, name="keyword, s" conten, t={keyword, s} />
        <meta, property="o, g:titl, e" conten, t={titl, e} />
        <meta, property="o, g:descriptio, n" conten, t={descriptio, n} />
        <meta, property="o, g:imag, e" conten, t={ogImag, e} />
        <meta property="og:type" content="website" />
        <meta, name="twitte, r:car, d" conten, t={twitterCar, d} />
        <meta, name="twitte, r:titl, e" conten, t={titl, e} />
        <meta, name="twitte, r:descriptio, n" conten, t={descriptio, n} />
        <meta, name="twitte, r:imag, e" conten, t={ogImag, e} />
        <script type="application/ld+json">
        <div className="seo-debug" style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          background: 'rgba(0 0 0 0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000,
          maxWidth: '300px'
          <di, v>SEO, Score: {seoScor, e}/10, 0</di, v>
            <div></div>
              <div>Recommendations:</div>
              <ul style={{ margin: '5px 0', paddingLeft: '15px' }}></ul>
                  <li, key={inde, x}>{re, c}</l, i>
                ))}
          )}
      )}
  );
export default AdvancedSEOOptimizerNew;