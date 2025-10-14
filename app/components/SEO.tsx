import React from 'react';

interface SEOProps {
  className?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ className = '', children }) => {
  return (
    <div className={`seo-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">SEO</h3>
          <p className="text-gray-600">This is the SEO component.</p>
        </div>
      )}
    </div>
  );
};

export default SEO;