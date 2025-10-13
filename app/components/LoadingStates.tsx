<<<<<<< HEAD
=======
<<<<<<< HEAD
'use client;

import React from 'react;

import { Loader2 } from 'lucide-react;

<<<<<<< HEAD
export const PageLoader: React.FC = () => {
=======
>>>>>>> origin/cursor/ad-creation-and-management-f267
import React from 'react';

<<<<<<< HEAD
interface LoadingStatesProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function LoadingStates({ isLoading, children, className = '' }: LoadingStatesProps) {
  if (isLoading) {
    return (
      <div className={`loading-states ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center>
      <div className="text-center>
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4>
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2>Loading...</h2>
        <p className="text-gray-300>Please wait while we load the page</p>
=======
import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
      </div>
    </div>;
  );
<<<<<<< HEAD

}
<<<<<<< HEAD

export const ComponentLoader: React.FC = () => {
=======
export const ComponentLoader: React.FC = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  return (

    <div className="flex items-center justify-center p-8>
      <div className="flex items-center space-x-2 text-cyan-400>
        <Loader2 className="w-5 h-5 animate-spin />
        <span>Loading component...</span>
      </div>
    </div>
  );

}
<<<<<<< HEAD

export const ServiceCardSkeleton: React.FC = () => {
=======
export const ServiceCardSkeleton: React.FC = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  return (

    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse>
      <div className="h-4 bg-slate-700 rounded mb-4></div>
      <div className="h-3 bg-slate-700 rounded mb-2></div>
      <div className="h-3 bg-slate-700 rounded mb-4></div>
      <div $2></div>
  );

}
<<<<<<< HEAD

export const ContentSkeleton: React.FC = () => {
=======
export const ContentSkeleton: React.FC = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  return (

    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse>
      <div className="h-6 bg-slate-700 rounded mb-4></div>
      <div className="h-4 bg-slate-700 rounded mb-2></div>
      <div className="h-4 bg-slate-700 rounded mb-2></div>
      <div $2></div>
  );

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};
>>>>>>> origin/cursor/ad-creation-and-management-f267
