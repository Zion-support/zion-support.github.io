import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function EnhancedSEOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>EnhancedSEO - Zion Tech Group</title>
        <meta name="description" content="Advanced EnhancedSEO solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            EnhancedSEO
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
=======
interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export default function EnhancedSEO({
  title,
  description,
  canonical,
  keywords,
  image,
  type = 'website'
}: EnhancedSEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-5de4
  );
}