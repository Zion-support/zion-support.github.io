import React from 'react';

const LazyWrapper = () => {
  return (
    <div>
      {fallback || children}
    </div>
  );
};

export default LazyWrapper;
