import React from 'react';

const SEOEnhancer: React.FC = () => {
  return (
    <div className="seo-enhancer">
      {/* SEO enhancer component */}
    </div>
  );
};

import React from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'seoenhancer ' + className}>
      {children || <p>SEOEnhancer component</p>}
    </div>
  );
};

export default SEOEnhancer;
