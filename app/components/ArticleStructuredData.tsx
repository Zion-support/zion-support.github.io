'use client';

import Head from 'next/head';

export default function ArticleStructuredData({ 
  headline, 
  description, 
  datePublished, 
  slug,
  dateModified,
  author = 'Zion Tech Group',
  publisher = 'Zion Tech Group',
  image = '/logo.png',
}) {
  const url = `https://ziontechgroup.com/blog/${slug}`;

  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": headline,
            "description": description,
            "datePublished": datePublished,
            "dateModified": dateModified || datePublished,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": publisher,
              "logo": {
                "@type": "ImageObject",
                "url": image
              }
            },
            "image": image,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })
        }} 
      />
    </Head>
  );
}