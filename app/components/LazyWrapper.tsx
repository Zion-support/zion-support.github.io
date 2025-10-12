import React from 'react';

interface LazyWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default LazyWrapper;
