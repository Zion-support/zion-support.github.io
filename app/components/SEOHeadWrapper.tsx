import React from 'react';
interface SEOHeadWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'seoheadwrapper ' + className}>
      {children || <p>SEOHeadWrapper component</p>}
    </div>
  );
};

export default SEOHeadWrapper;
