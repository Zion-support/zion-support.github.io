import React from 'react';

interface LoadingOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`loading-optimizer ${className}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="relative mb-4">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <p className="text-white text-lg font-semibold mb-2">Optimizing Performance</p>
          <p className="text-gray-300 text-sm">Enhancing your experience...</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LoadingOptimizer;