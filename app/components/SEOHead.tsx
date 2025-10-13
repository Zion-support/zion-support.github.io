<<<<<<< HEAD
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = '/og-image.jpg',
  ogType = 'website'
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonical = canonical || `https://ziontechgroup.com${typeof window !== 'undefined' ? window.location.pathname : ''}`;'

    <Helmet>
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />"
      <meta property="og:description" content={description} />"
      <meta property="og:type" content={ogType} />"
      <meta property="og:url" content={fullCanonical} />"
      <meta property="og:image" content={ogImage} />"
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={fullTitle} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={ogImage} />
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />"
      <meta name="author" content="Zion Tech Group" />
=======
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
