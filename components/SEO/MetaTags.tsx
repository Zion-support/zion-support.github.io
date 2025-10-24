<<<<<<< HEAD
import React from 'react'
"use client"
interface MetaTagsProps {
className?: string
}
}
const MetaTags: React.FC<MetaTagsProps> = ({ className = '' ,}) => {
return (</MetaTagsProps>,
    <div className={className}></div>h2>MetaTags</h2>p>This component is under construction.</p>/div>
  )
}
;
export default MetaTags;
=======
import React from 'react';
import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'Zion Tech Group',
  description = 'Leading technology solutions',
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default MetaTags;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
