import React from "react";

interface PerformanceEnhancerProps {
  children?: React.ReactNode;
  className?: string;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  children,
  className = "",
}) => {
  return <div className={className}>{children}</div>;
};

export default PerformanceEnhancer;
