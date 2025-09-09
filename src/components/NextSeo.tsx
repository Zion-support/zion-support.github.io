import React from 'react';

interface NextSeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    cardType?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
}

export function NextSeo({ 
  title = 'Zion Tech Group',
  description = 'Leading AI and Technology Solutions',
  canonical,
  openGraph,
  twitter
}: NextSeoProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.images && openGraph.images.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          {image.width && <meta property="og:image:width" content={image.width.toString()} />}
          {image.height && <meta property="og:image:height" content={image.height.toString()} />}
          {image.alt && <meta property="og:image:alt" content={image.alt} />}
        </React.Fragment>
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitter?.cardType || 'summary_large_image'} />
      <meta name="twitter:title" content={twitter?.title || title} />
      <meta name="twitter:description" content={twitter?.description || description} />
      {twitter?.images && twitter.images.map((image, index) => (
        <meta key={index} name="twitter:image" content={image} />
      ))}
    </>
  );
}

export default NextSeo;