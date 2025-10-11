import React from 'react';
import { Loader2, Brain, Cloud, Shield, Zap } from 'lucide-react';

<<<<<<< HEAD
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
=======
export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">Loading...</h2>
      <p className="text-gray-300">Please wait while we prepare your experience</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200/20 rounded-lg animate-pulse"></div>
          <div className="w-32 h-6 bg-gray-200/20 rounded animate-pulse"></div>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-16 h-4 bg-gray-200/20 rounded animate-pulse"></div>
          ))}
        </div>
        <div className="w-6 h-6 bg-gray-200/20 rounded animate-pulse"></div>
      </div>
    </div>
  </nav>
);

export const ContentSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-16 pt-24">
    <div className="text-center mb-16">
      <div className="h-16 bg-gray-200/20 rounded mx-auto mb-6 w-96 animate-pulse"></div>
      <div className="h-6 bg-gray-200/20 rounded mx-auto mb-8 w-64 animate-pulse"></div>
      <div className="h-4 bg-gray-200/20 rounded mx-auto mb-4 w-full max-w-2xl animate-pulse"></div>
      <div className="h-4 bg-gray-200/20 rounded mx-auto mb-8 w-3/4 max-w-2xl animate-pulse"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {[...Array(4)].map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[...Array(4)].map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
  );
};

export const LoadingButton: React.FC<{ 
  loading: boolean; 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ loading, children, className = '', onClick }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
      loading 
        ? 'bg-gray-500 cursor-not-allowed' 
        : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
    } text-white ${className}`}
  >
    {loading && <Spinner size="sm" />}
    {children}
  </button>
);

export const FeatureSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="w-16 h-16 bg-gray-200/20 rounded-full mx-auto mb-4"></div>
    <div className="h-6 bg-gray-200/20 rounded mb-3 w-3/4 mx-auto"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      {[...Array(4)].map((_, i) => (
        <div key={i}>
          <div className="h-12 bg-gray-200/20 rounded mb-2 w-16 mx-auto animate-pulse"></div>
          <div className="h-4 bg-gray-200/20 rounded w-24 mx-auto animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
);
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8
