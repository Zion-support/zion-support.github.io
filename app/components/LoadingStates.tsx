>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
'use client';
import React from 'react';

export const PageLoader: React.FC = () => {
=======
export const LoadingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
    </div>
  );
};

export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
