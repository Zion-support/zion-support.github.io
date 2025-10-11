'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

<<<<<<< HEAD
export const PageLoader: React.FC = () => {
  return ()
=======
const LoadingStates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we prepare your content.</p>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  );
};

<<<<<<< HEAD
export const ComponentLoader: React.FC = () => {
  return ()
  );
}

export const ServiceCardSkeleton: React.FC = () => {
  return ()
  );
}

export const ContentSkeleton: React.FC = () => {
  return ()
  );
}

export const LoadingSpinner: React.FC = () => ()
);
=======
export const PageLoader = LoadingStates;

export default LoadingStates;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
