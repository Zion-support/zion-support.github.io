import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaManagerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const MetaManager: React.FC<MetaManagerProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  );
};

export default MetaManager;