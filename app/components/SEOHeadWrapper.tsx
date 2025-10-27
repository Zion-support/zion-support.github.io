import React from 'react';
const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className, children }) => {
  return (
    <div className={'seoheadwrapper ' + className}>
      {children || <p>SEOHeadWrapper component</p>}
    </div>
  );
};
};

export default SEOHeadWrapper;
