import React from 'react';

interface SitemapXmlProps {
  className?: string;
  children?: React.ReactNode;
}

const SitemapXml: React.FC<SitemapXmlProps> = ({ className = '', children }) => {
  return (
    <div className={`sitemap-xml ${className}`}>
      {children}
    </div>
  );
};

export default SitemapXml;
