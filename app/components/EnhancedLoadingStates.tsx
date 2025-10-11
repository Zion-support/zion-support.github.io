'use client';
import React from 'react';
import { Loader2, Brain, Cloud, Shield, Zap } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ()
}) => {
  const sizeClasses = const sizeClasses = const sizeClasses = {
=======
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', )
  text = 'Loading...' )
}) => {
  const sizeClasses = 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
>>>>>>> cursor/analyze-improve-and-deploy-application-d4cc
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

<<<<<<< HEAD
<<<<<<< HEAD
  return ();
      )};
=======
  return (
    <div className="flex flex-col items-center justify-center p-8">
      </div></div><Loader2 className={`$sizeClasses[size]} animate-spin text-blue-500`} />
      {text && ()
        <p className="mt-2 text-sm text-gray-500">text}</p></p></p>)
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    </div>;
=======
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]}`} />
        {text && <span className="text-sm text-gray-300">{text}</span>}
      </div>
    </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-d4cc
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export const PageLoader: React.FC = () => ()
=======
export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
        <Brain className="w-8 h-8 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2>
      <p className="text-gray-300">Loading advanced AI solutions...</p>
    </div>
  </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-d4cc
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

<<<<<<< HEAD
export const StatsSkeleton: React.FC = () => ()
    {Array.from({ length: 4 }).map((_, index) => ()
=======
export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    </div></div><div className="text-center">
      </div></div><div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
        </div></div><Brain className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2></h2></h2>
      <p className="text-gray-300">Loading amazing content...</p></p></p>
    </div>)
  </div>)
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
    </div></div><div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6"></div></div></div>
    <div className="h-6 bg-gray-600 rounded mb-4"></div></div></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div></div></div>
    <div className="space-y-2">
      </div></div><div className="h-3 bg-gray-600 rounded"></div></div></div>
      <div className="h-3 bg-gray-600 rounded"></div></div></div>
      <div className="h-3 bg-gray-600 rounded w-3/4"></div></div></div>
    </div>)
  </div>)
);

export const StatsSkeleton: React.FC = () => ()
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">)
    {Array.from( length: 4 }).map((_, index) => (
      </div></div><div key={index} className="text-center animate-pulse">
        </div></div><div className="h-8 bg-gray-600 rounded mb-2"></div></div></div>
        <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div></div></div>)
      </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
export const FeatureCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="w-16 h-16 bg-gray-200/20 rounded-full mx-auto mb-4"></div>
    <div className="h-6 bg-gray-200/20 rounded mb-3 w-3/4 mx-auto"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      {[...Array(4)].map((_, i) => (
        <div key={i}>
          <div className="h-12 bg-gray-200/20 rounded mb-2 w-20 mx-auto"></div>
          <div className="h-4 bg-gray-200/20 rounded w-24 mx-auto"></div>
        </div>
      ))}
    </div>
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-6 animate-pulse">
    <div className="h-8 bg-gray-200/20 rounded w-3/4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200/20 rounded"></div>
      <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200/20 rounded w-4/6"></div>
    </div>
  </div>
);

export const ButtonSkeleton: React.FC = () => (
  <div className="h-12 bg-gray-200/20 rounded-lg w-32 animate-pulse"></div>
);

export const ImageSkeleton: React.FC = () => (
  <div className="bg-gray-200/20 rounded-lg animate-pulse aspect-video"></div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="h-6 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="space-y-2 mb-4">
      <div className="h-4 bg-gray-200/20 rounded"></div>
      <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
    </div>
    <div className="h-10 bg-gray-200/20 rounded w-24"></div>
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <div className="h-4 bg-gray-200/20 rounded flex-1"></div>
          <div className="h-4 bg-gray-200/20 rounded w-20"></div>
          <div className="h-4 bg-gray-200/20 rounded w-16"></div>
        </div>
      ))}
    </div>
  </div>
);

export const ListSkeleton: React.FC = () => (
  <div className="space-y-3 animate-pulse">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-gray-200/20 rounded"></div>
        <div className="h-4 bg-gray-200/20 rounded flex-1"></div>
      </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-d4cc
    ))}
  </div>
);

<<<<<<< HEAD
<<<<<<< HEAD
export const ContentSkeleton: React.FC = () => ()
=======
export const ContentSkeleton: React.FC = () => (
  <div className="space-y-6 animate-pulse">
    </div></div><div className="h-8 bg-gray-600 rounded w-3/4"></div></div></div>
    <div className="space-y-2">
      </div></div><div className="h-4 bg-gray-600 rounded"></div></div></div>
      <div className="h-4 bg-gray-600 rounded"></div></div></div>
      <div className="h-4 bg-gray-600 rounded w-2/3"></div></div></div>
    </div>)
  </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
export const HeroSkeleton: React.FC = () => (
  <div className="text-center mb-16 animate-pulse">
    <div className="h-16 bg-gray-200/20 rounded mb-6 w-96 mx-auto"></div>
    <div className="h-8 bg-gray-200/20 rounded mb-8 w-64 mx-auto"></div>
    <div className="space-y-4 max-w-4xl mx-auto mb-8">
      <div className="h-4 bg-gray-200/20 rounded"></div>
      <div className="h-4 bg-gray-200/20 rounded w-5/6 mx-auto"></div>
      <div className="h-4 bg-gray-200/20 rounded w-4/6 mx-auto"></div>
    </div>
    <div className="flex justify-center space-x-4">
      <div className="h-12 bg-gray-200/20 rounded w-32"></div>
      <div className="h-12 bg-gray-200/20 rounded w-32"></div>
    </div>
  </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-d4cc
);

export default {
  LoadingSpinner,
  PageLoader,
  ServiceCardSkeleton,
  FeatureCardSkeleton,
  StatsSkeleton,
  ContentSkeleton,
  ButtonSkeleton,
  ImageSkeleton,
  CardSkeleton,
  TableSkeleton,
  ListSkeleton,
  HeroSkeleton
};