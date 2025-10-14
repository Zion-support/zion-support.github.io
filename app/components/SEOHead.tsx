import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`seohead-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">SEOHead</h3>
          <p className="text-gray-600">This is the SEOHead component.</p>
        </div>
      )}
    </div>
  );
};

export default SEOHead;