import React from 'react';
<<<<<<< HEAD
interface LoadingstatesProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Loadingstates({ className = '', children, ...props }: LoadingstatesProps) {
  return (
    <div className={`loadingstates-component ${className}`} {...props}>
      {children}
    </div>
<<<<<<< HEAD
  );
}
=======
=======

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading...</p>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
<<<<<<< HEAD
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div></div>
    <div className="h-6 bg-gray-600 rounded mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-600 rounded"></div></div>
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
    </div>
  </div>
);

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div></div>
  </div>
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
  <div className="bg-gray-800 rounded-xl p-8 animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
  </div>
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
