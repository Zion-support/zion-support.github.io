import React from 'react';

interface generate-sitemapProps {
  className?: string;
  children?: React.ReactNode;
}

const generate-sitemap: React.FC<generate-sitemapProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`generate-sitemap ${className}`}>
      {children}
    </div>
  );
};

export default generate-sitemap;