'use client';

import React, { memo } from 'react';

const PageLoader: React.FC = memo(() => {
  return (
    <div className="page-loader">
      Loading...
    </div>
  );
});

PageLoader.displayName = 'PageLoader';

export default PageLoader;