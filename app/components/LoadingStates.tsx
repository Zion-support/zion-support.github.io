import React from 'react';
import { Loader2, Zap, Brain, Shield, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <Loader2 
      className={`animate-spin ${sizeClasses[size]} ${className}`} 
    />
  );
};

interface LoadingPageProps {
  message?: string;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = 'Loading...' 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated background circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse delay-1000"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 animate-pulse delay-2000"></div>
          </div>
          
          {/* Main spinner */}
          <div className="relative z-10">
            <LoadingSpinner size="lg" className="text-cyan-400" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          {message}
        </h2>
        <p className="text-gray-300">
          Please wait while we prepare everything for you...
        </p>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  title = 'Loading...',
  description = 'Please wait',
  icon
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
        <LoadingSpinner size="sm" className="text-cyan-400" />
      </div>
      
      <div className="space-y-2">
        <div className="h-2 bg-white/10 rounded-full"></div>
        <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
        <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
      </div>
    </div>
  );
};

interface LoadingGridProps {
  count?: number;
  title?: string;
}

export const LoadingGrid: React.FC<LoadingGridProps> = ({ 
  count = 6,
  title = 'Loading services...'
}) => {
  const icons = [Zap, Brain, Shield, Globe, Zap, Brain];
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <div className="flex justify-center">
          <LoadingSpinner size="md" className="text-cyan-400" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <LoadingCard
            key={index}
            title={`Service ${index + 1}`}
            description="Loading service details..."
            icon={React.createElement(icons[index % icons.length], { 
              className: "w-6 h-6 text-cyan-400" 
            })}
          />
        ))}
      </div>
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
      className={`relative flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        loading || disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:scale-105'
      } ${className}`}
    >
      {loading && (
        <LoadingSpinner 
          size="sm" 
          className="absolute left-3 text-current" 
        />
      )}
      <span className={loading ? 'ml-6' : ''}>
        {children}
      </span>
    </button>
  );
};

export default LoadingPage;