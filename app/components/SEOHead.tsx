import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEOHead({ 
  title = "Default Title",
  description = "Default Description",
  keywords = ""
}: SEOHeadProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
    </head>
  );
}
