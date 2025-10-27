import React from 'react';

interface SEOHeadWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOHeadWrapper({ 
  className = '', 
  children 
}: SEOHeadWrapperProps) {
  return (
    <div className={'seoheadwrapper ' + className}>
      {children || <p>SEOHeadWrapper component</p>}
    </div>
  );
}
