import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'seohead ' + className}>
      {children || <p>SEOHead component</p>}
    </div>
  );
};

export default SEOHead;
