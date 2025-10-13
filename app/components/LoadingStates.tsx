import React from 'react';
import { Loader2, Zap, Brain, Shield, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2 
        className={`animate-spin ${sizeClasses[size]} ${className}`}
        aria-label="Loading"
      />
    </div>
  );
};

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Loading Zion Tech Group
        </h2>
        <p className="text-gray-300 mb-6">
          Preparing your experience...
        </p>

        {/* Loading Spinner */}
        <div className="flex justify-center mb-6">
          <LoadingSpinner size="lg" className="text-cyan-400" />
        </div>

        {/* Service Icons Animation */}
        <div className="flex justify-center space-x-4 mb-6">
          <Brain className="w-6 h-6 text-cyan-400 animate-bounce" />
          <Shield className="w-6 h-6 text-purple-400 animate-bounce" style={{ animationDelay: '200ms' }} />
          <Globe className="w-6 h-6 text-pink-400 animate-bounce" style={{ animationDelay: '400ms' }} />
        </div>

        {/* Loading Message */}
        <p className="text-sm text-gray-400">
          Initializing advanced AI systems...
        </p>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  children?: React.ReactNode;
  className?: string;
}

const LoadingCard: React.FC<LoadingCardProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 ${className}`}>
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-3">
          <LoadingSpinner size="sm" className="text-cyan-400" />
        </div>
        
        <div className="space-y-2 flex-1">
          <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
          <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

const LoadingGrid: React.FC = () => {
  const skeletonItems = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Loading Services</h1>
          <div className="flex justify-center">
            <LoadingSpinner size="md" className="text-cyan-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skeletonItems.map((item) => (
            <LoadingCard key={item}>
              <div className="space-y-2">
                <div className="h-3 bg-white/10 rounded w-2/3"></div>
                <div className="h-2 bg-white/10 rounded w-full"></div>
                <div className="h-2 bg-white/10 rounded w-4/5"></div>
              </div>
            </LoadingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

interface LoadingButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ 
  children, 
  loading = false, 
  className = '',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${className}`}
    >
      {loading && <LoadingSpinner size="sm" className="text-white" />}
      <span>{children}</span>
    </button>
  );
};

export { LoadingPage, LoadingCard, LoadingGrid, LoadingButton, LoadingSpinner };
export default LoadingPage;