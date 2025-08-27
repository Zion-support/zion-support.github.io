import React from 'react';

export function LoadingOverlay({ visible, children, className = '' }) {
  if (!visible) {
    return children;
  }

  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan mx-auto mb-2"></div>
          <p className="text-white text-sm">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingOverlay;