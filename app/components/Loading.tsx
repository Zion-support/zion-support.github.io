import React, { memo } from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = memo(({ className = '', children }) => {
  return (
    <div className={`loading-component ${className}`}>
      {children}
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;