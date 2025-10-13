import React from "react";

interface ImageoptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Imageoptimizer({
  className = "",
  children,
  ...props
}: ImageoptimizerProps) {
  return (
    <div className={`imageoptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
