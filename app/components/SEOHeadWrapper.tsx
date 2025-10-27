import React from 'react';
interface SEOHeadWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

  return (
    <div className={'seoheadwrapper ' + className}>
      {children || <p>SEOHeadWrapper component</p>}
    </div>
  );
};
export default SEOHeadWrapper;
