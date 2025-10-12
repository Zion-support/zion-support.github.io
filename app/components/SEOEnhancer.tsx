import React from 'react';

interface SEOEnhancerProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      {title &amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp; <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description &amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp; <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default SEOEnhancer;
