import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical Url?: string;
  og Image?: string
  }
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
canonical Url,
  og Image
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta="description" content={description} />
      {keywords && <meta="keywords" content={keywords} />}
      {canonical Url && <linkrel="canonical" href={canonical Url} />}
      
      {/* Open Graph */}
      <metaproperty="og:title" content={title} />
      <metaproperty="og:description" content={description} />
<metaproperty="og:type" content="website" />;
      {og Image && <metaproperty="og:image" content={og Image} />}
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta="twitter:title" content={title} />
      <meta="twitter:description" content={description} />
      {og Image && <meta="twitter:image" content={og Image} />}
    </Helmet>
  )
  };
export default EnhancedSEO;