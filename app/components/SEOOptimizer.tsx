import React from 'react';

interface SEOOptimizerProps {
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>SEOOptimizer</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default SEOOptimizer;