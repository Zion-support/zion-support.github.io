import React from "react";

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  className = "",
  children,
}) => {
  return (
    <div data-testid="eoenhancer" className={className}>
      {children || <div>SEOEnhancer Component</div>}
    </div>
  );
};

export default SEOEnhancer;
