'use client';

import React, { memo } from 'react';

const EnhancedLoading: React.FC = memo(() => {
  return (
    <div className="enhanced-loading">
      Loading...
    </div>
  );
});

EnhancedLoading.displayName = 'EnhancedLoading';

export default EnhancedLoading;