import React from "react";

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  className = "",
  children,
}) => {
  return (
    <div data-testid="ptimizedimage" className={className}>
      {children || <div>OptimizedImage Component</div>}
    </div>
  );
};

export default OptimizedImage;
