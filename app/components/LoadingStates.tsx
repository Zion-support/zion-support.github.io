import React from 'react';
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
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
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
