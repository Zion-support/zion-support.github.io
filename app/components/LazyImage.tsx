import React from 'react';

interface LazyImageProps {
  children?: React.ReactNode;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default LazyImage;
