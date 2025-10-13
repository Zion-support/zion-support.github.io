import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEO({ title, description, keywords, children }: EnhancedSEOProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}

