<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
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
<<<<<<< HEAD
}
=======
'use client';
import React from 'react';
=======
'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-a070

export const PageLoader: React.FC = () => {
=======
export const LoadingPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-4 w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" 
               style={{ animationDuration: '2s' }} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 mt-4">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Initializing advanced AI systems...</p>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default PageLoader;
>>>>>>> cursor/delete-records-a75e
=======
export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
    </div>
  );
};

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
