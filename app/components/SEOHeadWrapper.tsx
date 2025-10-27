import React from 'react';
export type SEOHeadWrapperProps = {
  // Add your props here
};

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
