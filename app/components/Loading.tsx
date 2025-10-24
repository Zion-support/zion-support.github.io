import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export const Loading: React.FC<LoadingProps> = ({ className = '', children }) => {
  return (
    <div className={`loading ${className}`}>
      {children}
    </div>
  );
};

export default Loading;