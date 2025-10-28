import React, { memo } from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = memo(({ className = '', children }) => {
  return (
    <div className={`loading-component ${className}`}>
      {children || (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      )}
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;