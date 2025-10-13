import React from 'react';
import { Loader2, Brain, Zap, Shield, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <Loader2 
      className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`} 
    />
  );
};

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = 'Loading...', 
  showProgress = false,
  progress = 0
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Brain className="w-8 h-8 text-white animate-pulse" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {message}
        </h2>
        
        <div className="mb-6">
          <LoadingSpinner size="lg" className="mx-auto" />
        </div>

        {showProgress && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center gap-4 text-gray-400">
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4" />
            <span className="text-sm">AI Solutions</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Security</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span className="text-sm">Global</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  className?: string;
  height?: string;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  className = '',
  height = 'h-48'
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse ${height} ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
        <div className="flex-1">
          <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-white/20 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/20 rounded"></div>
        <div className="h-3 bg-white/20 rounded w-5/6"></div>
        <div className="h-3 bg-white/20 rounded w-4/6"></div>
      </div>
    </div>
  );
};

interface LoadingGridProps {
  count?: number;
  className?: string;
}

export const LoadingGrid: React.FC<LoadingGridProps> = ({ 
  count = 6,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
};

interface LoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  children,
  className = '',
  disabled = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`relative flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        loading || disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:scale-105'
      } ${className}`}
    >
      {loading && <LoadingSpinner size="sm" />}
      {children}
    </button>
  );
};

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  transparent?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isVisible,
  message = 'Loading...',
  transparent = false
}) => {
  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      transparent ? 'bg-black/20' : 'bg-slate-900/80'
    } backdrop-blur-sm`}>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-white font-medium">{message}</p>
      </div>
    </div>
  );
};

export default {
  LoadingSpinner,
  LoadingPage,
  LoadingCard,
  LoadingGrid,
  LoadingButton,
  LoadingOverlay
};