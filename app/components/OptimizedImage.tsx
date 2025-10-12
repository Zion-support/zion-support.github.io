import React from 'react';

interface OptimizedImageProps {
  children?: React.ReactNode;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OptimizedImage;
