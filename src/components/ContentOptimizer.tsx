import React from 'react';

const ContentOptimizer: React.FC = () => {
  return (
    <div id="content-optimizer">
      {isVisible ? (
        <div
        >
          {children}
        </div>
      ) : (
        <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default ContentOptimizer;