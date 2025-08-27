import React from 'react';

interface LoadingOverlayProps {
  isLoading?: boolean;
  children?: React.ReactNode;
}

export function LoadingOverlay({ isLoading = false, children }: LoadingOverlayProps) {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    </div>
  );
}