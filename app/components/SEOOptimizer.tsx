import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group',
  description = 'Advanced AI and IT Solutions',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEOOptimizer;
