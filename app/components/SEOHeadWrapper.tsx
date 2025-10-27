import React from 'react';
export type SEOHeadWrapperProps = {
  // Add your props here
};

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
