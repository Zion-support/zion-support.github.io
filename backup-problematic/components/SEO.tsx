import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Enterprise Solutions',
  description = 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains.',
  keywords = ['AI solutions', 'enterprise automation', 'business intelligence'],
  children,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {children}
    </>
  );
};

export default SEO;
